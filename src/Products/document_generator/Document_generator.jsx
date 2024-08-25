import React from 'react';
import { Form, Formik } from 'formik';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

const Document_generator = () => {
  // Общие функции
  const custom_alert = (message) => {
    return window.Swal.fire({
        title: message,
        width: 400,
        height: 200,
        padding: '1em',
        color: 'green',
        background: '#fff url(/pictures/trees_phone.png)',
    });
  }

  return (
    <div>
      <h1>Отчёт по патрулированию</h1>

      <Formik
        initialValues={{ Patrol_task_number: '', Date_issue_task: '', Patrol_date: '', 
          Patrol_route_number: '', What_date_was_approved: '08.12.2023', Year_patrol: 2024,
          Person_issued_task: 'директор ГОКУ "Новгородское лесничество" Иванов К.В.',
          Full_name_senior_patroller: 'мастер леса Мясноборского участкового лесничества Устинов Дмитрий Сергеевич', 
          Full_name_junior_patroller: 'мастер леса Новгородского участкового лесничества Зайцев Даниил Алексеевич', 
          Time_assignment_issue: '', Date_assignment_issue: '', Additional_order: false, 
          Number_patrol_act: '', Date_patrol_act: '', Object_leaflet: '', Village_leaflet: '', 
          Number_informed_people: 2, Village_informed_people: '', Patrol_car: 'С948ХК',
          Is_there_photo_table: false 
        }}
        validate={values => {
          const errors = {};

          if (!values.Patrol_task_number) {
            errors.Patrol_task_number = 'Введите номер задания';
          } else if (!/^\d{1,4}$/i.test(values.Patrol_task_number)) {
            errors.Patrol_task_number = 'Номер задания должен быть не более 4 цифр';
          }

          if (!values.Date_issue_task) {
            errors.Date_issue_task = 'Введите дату выдачи задания';
          } 

          if (!values.Patrol_date) {
            errors.Patrol_date = 'Введите дату патрулирования';
          }

          if (!values.Patrol_route_number) {
            errors.Patrol_route_number = 'Выберите номер маршрута патрулирования';
          } 

          if (!values.What_date_was_approved) {
            errors.What_date_was_approved = 'Введите дату выдачи задания';
          } else if (!/^\d{2}.\d{2}.\d{4}$/i.test(values.What_date_was_approved)) {
            errors.Patrol_task_number = 'Дата должна быть подобной 08.12.2023';
          }

          if (!values.Year_patrol) {
            errors.Year_patrol = 'Выберите год патрулирования';
          } 

          if (!values.Person_issued_task) {
            errors.Person_issued_task = 'Выберите выдавшего задание';
          } 

          if (!values.Full_name_senior_patroller) {
            errors.Full_name_senior_patroller = 'Выберите старшего патрульной группы';
          } 

          if (!values.Full_name_junior_patroller) {
            errors.Full_name_junior_patroller = 'Выберите сопатрульного';
          }

          if (!values.Time_assignment_issue) {
            errors.Time_assignment_issue = 'Введите время выдачи задания';
          } 

          if (!values.Date_assignment_issue) {
            errors.Date_assignment_issue = 'Выберите дату выдачи задания';
          }

          if (!values.Number_patrol_act) {
            errors.Number_patrol_act = 'Введите номер акта патрулирования';
          } else if (!/^\d{1,4}$/i.test(values.Number_patrol_act)) {
            errors.Number_patrol_act = 'Номер акта должен быть не более 4 цифр';
          }

          if (!values.Date_patrol_act) {
            errors.Date_patrol_act = 'Выберите дату акта патрулирования';
          }

          return errors;
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            // 1. Получаю данные из полей формы
            let Person_issued_task = values.Person_issued_task;
            let Patrol_task_number = values.Patrol_task_number;
            let Date_issue_task = values.Date_issue_task; 
            let Patrol_date = values.Patrol_date; 
            let Patrol_route_number = values.Patrol_route_number; 
            let What_date_was_approved = values.What_date_was_approved; 
            let Year_patrol = values.Year_patrol; 
            let Full_name_senior_patroller = values.Full_name_senior_patroller; 
            let Full_name_junior_patroller = values.Full_name_junior_patroller; 
            let Time_assignment_issue = values.Time_assignment_issue;
            let Date_assignment_issue = values.Date_assignment_issue; 
            let Additional_order = values.Additional_order; 
            let Number_patrol_act = values.Number_patrol_act; 
            let Date_patrol_act = values.Date_patrol_act; 
            let Object_leaflet = values.Object_leaflet; 
            let Village_leaflet = values.Village_leaflet; 
            let Number_informed_people = values.Number_informed_people; 
            let Village_informed_people = values.Village_informed_people; 
            let Patrol_car = values.Patrol_car; 
            let Is_there_photo_table = values.Is_there_photo_table;

            // 2. Обрабатываю их, формируя новые

            // 2.1. Формирование нужного формата времени
            Time_assignment_issue = `${Time_assignment_issue.split(":")[0]} часов ${Time_assignment_issue.split(":")[1]} минут`;

            // 2.2. Создание фамилии с инициалами из полного имени
            let Senior_patroller, Declension_name_senior_patroller, Initials_senior_patroller, 
            Junior_patroller, Declension_name_junior_patroller, Initials_junior_patroller,
            Patrol_route_declaration;

            // 2.3. Создание инициалов старшего патрульной группы
            switch (Full_name_senior_patroller) {
                case 'мастер леса Мясноборского участкового лесничества Устинов Дмитрий Сергеевич':
                    Senior_patroller = 'мастер леса Мясноборского участкового лесничества Устинов Д.С.';
                    Declension_name_senior_patroller = 'мастером леса Мясноборского участкового лесничества Устиновым Дмитрием Сергеевичем';
                    Initials_senior_patroller = 'Устинов Д.С.';
                    break;
                case 'участковый лесничий Ермолинского участкового лесничества Кузнецова Елизавета Михайловна':
                    Senior_patroller = 'участковый лесничий Ермолинского участкового лесничества Кузнецова Е.М.';
                    Declension_name_senior_patroller = 'участковым лесничим Ермолинского участкового лесничества Кузнецовой Елизаветой Михайловной';
                    Initials_senior_patroller = 'Кузнецова Е.М.';
                    break;
                case 'участковый лесничий Новгородского участкового лесничества Маркова Ирина Фирсовна':
                    Senior_patroller = 'участковый лесничий Новгородского участкового лесничества Маркова И.Ф.';
                    Declension_name_senior_patroller = 'участковым лесничим Новгородского участкового лесничества Марковой Ириной Фирсовной';
                    Initials_senior_patroller = 'Маркова И.Ф.';
                    break;
                case 'мастер леса Советского участкового лесничества Капитонова Марина Александровна':
                    Senior_patroller = 'мастер леса Советского участкового лесничества Капитонова М.А.';
                    Declension_name_senior_patroller = 'мастером леса Советского участкового лесничества Капитоновой Мариной Александровной';
                    Initials_senior_patroller = 'Капитонова М.А.';
                    break;
                case 'мастер леса Новгородского участкового лесничества Зайцев Даниил Алексеевич':
                    Senior_patroller = 'мастер леса Новгородского участкового лесничества Зайцев Д.А.';
                    Declension_name_senior_patroller = 'мастером леса Новгородского участкового лесничества Зайцевым Даниилом Алексеевичем';
                    Initials_senior_patroller = 'Зайцев Д.А.';
                    break;
                default:
                    break;
            }

            // 2.4. Создание инициалов младшего патрульной группы
            switch (Full_name_junior_patroller) {
                case 'мастер леса Мясноборского участкового лесничества Устинов Дмитрий Сергеевич':
                    Junior_patroller = 'мастер леса Мясноборского участкового лесничества Устинов Д.С.';
                    Declension_name_junior_patroller = 'мастером леса Мясноборского участкового лесничества Устиновым Дмитрием Сергеевичем';
                    Initials_junior_patroller = 'Устинов Д.С.';
                    break;
                case 'участковый лесничий Ермолинского участкового лесничества Кузнецова Елизавета Михайловна':
                    Junior_patroller = 'участковый лесничий Ермолинского участкового лесничества Кузнецова Е.М.';
                    Declension_name_junior_patroller = 'участковым лесничим Ермолинского участкового лесничества Кузнецовой Елизаветой Михайловной';
                    Initials_junior_patroller = 'Кузнецова Е.М.';
                    break;
                case 'участковый лесничий Новгородского участкового лесничества Маркова Ирина Фирсовна':
                    Junior_patroller = 'участковый лесничий Новгородского участкового лесничества Маркова И.Ф.';
                    Declension_name_junior_patroller = 'участковым лесничим Новгородского участкового лесничества Марковой Ириной Фирсовной';
                    Initials_junior_patroller = 'Маркова И.Ф.';
                    break;
                case 'мастер леса Советского участкового лесничества Капитонова Марина Александровна':
                    Junior_patroller = 'мастер леса Советского участкового лесничества Капитонова М.А.';
                    Declension_name_junior_patroller = 'мастером леса Советского участкового лесничества Капитоновой Мариной Александровной';
                    Initials_junior_patroller = 'Капитонова М.А.';
                    break;
                case 'мастер леса Новгородского участкового лесничества Зайцев Даниил Алексеевич':
                    Junior_patroller = 'мастер леса Новгородского участкового лесничества Зайцев Д.А.';
                    Declension_name_junior_patroller = 'мастером леса Новгородского участкового лесничества Зайцевым Даниилом Алексеевичем';
                    Initials_junior_patroller = 'Зайцев Д.А.';
                    break;
                default:
                    break;
            }

            // 2.5. Создание переменных для хранения времени и протяжённости маршрута патрулирования
            let Patrol_time, Length_patrol;

            // 2.6. Создание описания маршрута патрулирования
            switch (Patrol_route_number) {
                case '70,1':
                    Patrol_route_declaration = 'квартал 128 (выдела 14,17,26,30,36,38), квартал 126 (выдела 8,7,15), квартал 228 (выдела 13,21,25), квартал 216 (выдела 17,18,19,23,30), квартал 213 (выдела 20,24,16), квартал 211 (выдела 20,21,24,30,32), квартал 199 (выдела 21,22,31,33,35), квартал 12 (выдела 7,10), квартал 13 (выдела 1,23,40,35)';
                    Patrol_time = '35 мин.';
                    Length_patrol = '14 км.';
                    break;
                case '71,2':
                    Patrol_route_declaration = 'квартал 200 (выдела 49,50,51,4,6,7), квартал 191 (выдела 25,26,27), квартал 40 (выдела 19,20), квартал 201 (выдела 6,8,14,15,18,24,26,28,31), квартал 195 (выдела 11,12), квартал 196 (выдела 2,10,11,12)';
                    Patrol_time = '15 мин.';
                    Length_patrol = '5 км.';
                    break;
                case '72,3':
                    Patrol_route_declaration = 'квартал 45 (выдела 7,9), квартал 30 (выдела 12,15,17,19), квартал 192 (выдела 3,13), квартал 82 (выдела 5,6,14,20,25), квартал 100 (выдела 14,19,21), квартал 105 (выдела 3,10,14,17,18), квартал 110 (выдела 9,8,17)';
                    Patrol_time = '1 ч. 20 мин.';
                    Length_patrol = '10 км.';
                    break;
                case '73,4':
                    Patrol_route_declaration = 'квартал 229 (выдела 2,4,8,9,10,12,13,6,7,11), квартал 116 (выдела 9,13,15,7,18,5,11,12,16), квартал 117 (выдела 18,15,12,16,17,18,21), квартал 119 (выдела 7,16,3,2,17,6,13,14,15)';
                    Patrol_time = '10 мин.';
                    Length_patrol = '4 км.';
                    break;
                case '74,5':
                    Patrol_route_declaration = 'квартал 240 (выдела 1,2,3,4,5,6,13,11,37,38,41,27,29), квартал 250 (выдела 2,3,5), квартал 257 (выдела 1,47,57), квартал 251 (выдела 1,3), квартал 252 (выдела 23,22,24,18,19)';
                    Patrol_time = '2 ч.';
                    Length_patrol = '8 км.';
                    break;
                case '75,6':
                    Patrol_route_declaration = 'квартал 267 (выдела 12,23,11,8), квартал 265 (выдела 20,24,22), квартал 255 (выдела 2,5,7,8,9,10), квартал 254 (выдела 13,17,3,5,16,17,2), квартал 248 (выдела 27,28), квартал 247 (выдела 35,38,45,47,48,51,53,4,6,7,8,5,19,18,23), квартал 232 (выдела 2,4,3,5,6,10,11,21), квартал 233 (выдела 4,5,3,7,2), квартал 230 (выдела 2,3,4,8,9,10,11,12), квартал 227 (выдела 3,2,6,1,3), квартал 125 (выдела 1,2,3)';
                    Patrol_time = '25 мин.';
                    Length_patrol = '11 км.';
                    break;
                case '76,7':
                    Patrol_route_declaration = 'квартал 226 (выдела 1,2,4,3,9,8,12), квартал 111 (выдела 4,7,8), квартал 106 (выдела 6,16,5,8), квартал 208 (выдела 6,17,20,10,9,5,7), квартал 207 (выдела 8,7,9,15,16,17), квартал 197 (выдела 9,12,8,14,11,18), квартал 198 (выдела 10,19,11)';
                    Patrol_time = '1 ч. 20 мин.';
                    Length_patrol = '20 км.';
                    break;
                case '77,8':
                    Patrol_route_declaration = 'квартал 246 (выдела 17,18,19,20,21,22), квартал 257 (выдела 2,1,7,8,10), квартал 155 (выдела 14,26,28,31,13,15,23,40,30), квартал 244 (выдела 4,5,10,8,9,36,47,53), квартал 151 (выдела 9,18,17,12,13), квартал 243 (выдела 12), квартал 224 (выдела 31,32,37,38,41), квартал 223 (выдела 33,36,38,45,49,54,61), квартал 153 (выдел 41)';
                    Patrol_time = '1 ч. 55 мин.';
                    Length_patrol = '14 км.';
                    break;
                case '78,9':
                    Patrol_route_declaration = 'квартал 225 (выдела 39,40,47,61,21,29,32), квартал 218 (выдела 14,11,12,13,20,19), квартал 86 (выдела 19,20,34,35,33,36), квартал 204 (выдела 16), квартал 203 (выдела 14,15)';
                    Patrol_time = '40 мин.';
                    Length_patrol = '12 км.';
                    break;
                default:
                    break;
            }

            // 3. Генерирую документы
            fetch('Шаблон задания на патрулирование.docx')
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Network response was not ok ' + response.statusText);
                  }
                  return response.arrayBuffer();
              })
              .then(data => {
                  const zip = new PizZip(data);
                  const doc = new Docxtemplater(zip, {
                      paragraphLoop: true,
                      linebreaks: true,
                  });

                  // Обработка документа (замена {user_name} на имя пользователя, {user_surname} на фамилию пользователя и т.д.)
                  doc.render({
                      Full_name_senior_patroller, Senior_patroller, Full_name_junior_patroller, 
                      Junior_patroller, Additional_order, Time_assignment_issue, Date_assignment_issue, 
                      Patrol_task_number, Date_issue_task, Patrol_date, Patrol_route_number, What_date_was_approved, 
                      Year_patrol, Person_issued_task
                  });

                  // Генерация и сохранение нового документа
                  const out = doc.getZip().generate({
                      type: "blob",
                      mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  });

                  // Создание элемента ссылки для скачивания файла
                  const link = document.createElement('a');
                  link.href = URL.createObjectURL(out);
                  link.download = `1. Задание на проведение патрулирования по МБ л-ву № ${Patrol_task_number}.docx`;
                  link.click();

                  custom_alert('Задание готово')
              })
              .catch(error => {
                  console.error('Ошибка:', error);
                  alert('Ошибка! Смотри в console');
              });

            fetch('Шаблон акта о проведённом патрулировании.docx')
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Network response was not ok ' + response.statusText);
                  }
                  return response.arrayBuffer();
              })
              .then(data => {
                  const zip = new PizZip(data);
                  const doc = new Docxtemplater(zip, {
                      paragraphLoop: true,
                      linebreaks: true,
                  });

                  // Создание отчёта о патрулировании
                  const Initial_report = `Во время патрулирования не было обнаружено ни нарушений лесного законодательства, ни лесозаготовительной техники, ни граждан, незаконно вывозящих древесину из лесного фонда. Также мною были проинформированы ${Number_informed_people} граждан деревни ${Village_informed_people} о правилах пожарной безопасности в лесном массиве и прилегающей территории. Каждому гражданину был вручён информационный лист с соответствующей информацией. Кроме того мною была прикреплена памятка с правилами пожарной безопасности в деревне ${Village_leaflet} (${Object_leaflet}). Для проведения патрулирования мы задействовали автомобиль ${Patrol_car}, маршрут которого составил ${Length_patrol}`;

                  // Обработка документа (замена {user_name} на имя пользователя, {user_surname} на фамилию пользователя и т.д.)
                  doc.render({
                      Declension_name_senior_patroller, Initials_senior_patroller, Declension_name_junior_patroller, 
                      Initials_junior_patroller, Number_patrol_act, Date_patrol_act, Patrol_task_number, Date_issue_task, 
                      Patrol_route_declaration, Initial_report, Is_there_photo_table
                  });

                  // Генерация и сохранение нового документа
                  const out = doc.getZip().generate({
                      type: "blob",
                      mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  });

                  // Создание элемента ссылки для скачивания файла
                  const link = document.createElement('a');
                  link.href = URL.createObjectURL(out);
                  link.download = `2. Акт о проведённом патрулировании по МБ л-ву № ${Number_patrol_act}.docx`;
                  link.click();
              })
              .catch(error => {
                  console.error('Ошибка:', error);
                  alert('Ошибка! Смотри в console');
              });

            fetch('Шаблон схемы проведённого патрулирования.docx')
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Network response was not ok ' + response.statusText);
                  }
                  return response.arrayBuffer();
              })
              .then(data => {
                  const zip = new PizZip(data);
                  const doc = new Docxtemplater(zip, {
                      paragraphLoop: true,
                      linebreaks: true,
                  });

                  // Обработка документа (замена {user_name} на имя пользователя, {user_surname} на фамилию пользователя и т.д.)
                  doc.render({
                      Initials_senior_patroller, Number_patrol_act, Date_patrol_act, Patrol_time, Length_patrol
                  });

                  // Генерация и сохранение нового документа
                  const out = doc.getZip().generate({
                      type: "blob",
                      mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  });

                  // Создание элемента ссылки для скачивания файла
                  const link = document.createElement('a');
                  link.href = URL.createObjectURL(out);
                  link.download = `3. Схема проведённого патрулирования по МБ л-ву.docx`;
                  link.click();
              })
              .catch(error => {
                  console.error('Ошибка:', error);
                  alert('Ошибка! Смотри в console');
              });

            if (Is_there_photo_table !== "") {
              fetch('Шаблон фототаблицы по патрулированию.docx')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.arrayBuffer();
                })
                .then(data => {
                    const zip = new PizZip(data);
                    const doc = new Docxtemplater(zip, {
                        paragraphLoop: true,
                        linebreaks: true,
                    });

                    // Обработка документа (замена {user_name} на имя пользователя, {user_surname} на фамилию пользователя и т.д.)
                    doc.render({
                        Number_patrol_act, Date_patrol_act, Patrol_date, Object_leaflet, Village_leaflet,
                        Number_informed_people, Village_informed_people
                    });

                    // Генерация и сохранение нового документа
                    const out = doc.getZip().generate({
                        type: "blob",
                        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    });

                    // Создание элемента ссылки для скачивания файла
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(out);
                    link.download = `4. Фототаблица проведённого патрулирования по МБ л-ву.docx`;
                    link.click();
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                    alert('Ошибка! Смотри в console');
                });
            }

            // actions.setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched, isSubmitting, ...props }) => (
          <Form>

            {/* ------------------------------------- Задание --------------------------------- */}

            <div className='uk-margin'>
              <h2 className='uk-heading-divider'>Задание</h2>
            </div>

            <Input label_name='Номер задания' field_name='Patrol_task_number' placeholder='185' input_type='number' is_primary={true} />       
            <Input label_name='От какого числа' field_name='Date_issue_task' placeholder='' input_type='date' is_primary={false} />   
            <Input label_name='Дата патрулирования' field_name='Patrol_date' placeholder='' input_type='date' is_primary={false} />      
            
            <Select 
              label_name='Номер маршрута патрулирования' 
              field_name='Patrol_route_number' 
              options_list={[
                {id: '1', value: '', name_option: 'Выберите', selected: true, disabled: true},
                {id: '2', value: '70,1', name_option: '70', selected: false, disabled: false},
                {id: '3', value: '71,2', name_option: '71', selected: false, disabled: false},
                {id: '4', value: '72,3', name_option: '72', selected: false, disabled: false},
                {id: '5', value: '73,4', name_option: '73', selected: false, disabled: false},
                {id: '6', value: '74,5', name_option: '74', selected: false, disabled: false},
                {id: '7', value: '75,6', name_option: '75', selected: false, disabled: false},
                {id: '8', value: '76,7', name_option: '76', selected: false, disabled: false},
                {id: '9', value: '77,8', name_option: '77', selected: false, disabled: false},
                {id: '10', value: '78,9', name_option: '78', selected: false, disabled: false},
              ]} 
              is_primary={true}           
            />

            <Input label_name='Какого числа утверждён' field_name='What_date_was_approved' placeholder='08.12.2023' input_type='text' is_primary={false} />   
            
            <Select 
              label_name='Год патрулирования' 
              field_name='Year_patrol' 
              options_list={[
                {id: '1', value: '2024', name_option: '2024', selected: true, disabled: false},
                {id: '2', value: '2025', name_option: '2025', selected: false, disabled: false},
                {id: '3', value: '2026', name_option: '2026', selected: false, disabled: false},
                {id: '4', value: '2027', name_option: '2027', selected: false, disabled: false},
              ]} 
              is_primary={false} 
            />

            <Select 
              label_name='Кто выдал задание' 
              field_name='Person_issued_task' 
              options_list={[
                {id: '1', value: 'директор ГОКУ "Новгородское лесничество" Иванов К.В.', name_option: 'Директор', selected: true, disabled: false},
                {id: '2', value: 'заместитель директора ГОКУ "Новгородское лесничество" Орехова И.Н.', name_option: 'Заместитель', selected: false, disabled: false},
              ]} 
              is_primary={false} 
            />

            <Select 
              label_name='Старший патрульной группы' 
              field_name='Full_name_senior_patroller' 
              options_list={[
                {id: '1', value: 'мастер леса Мясноборского участкового лесничества Устинов Дмитрий Сергеевич', name_option: 'Устинов, мастер Мясноборского', selected: true, disabled: false},
                {id: '2', value: 'участковый лесничий Ермолинского участкового лесничества Кузнецова Елизавета Михайловна', name_option: 'Кузнецова, участковый Ермолинского', selected: false, disabled: false},
                {id: '3', value: 'участковый лесничий Новгородского участкового лесничества Маркова Ирина Фирсовна', name_option: 'Маркова, участковый Новгородского', selected: false, disabled: false},
                {id: '4', value: 'мастер леса Советского участкового лесничества Капитонова Марина Александровна', name_option: 'Капитонова, мастер Советского', selected: false, disabled: false},
                {id: '5', value: 'мастер леса Новгородского участкового лесничества Зайцев Даниил Алексеевич', name_option: 'Зайцев, мастер Новгородского', selected: false, disabled: false},
              ]}   
              is_primary={false}         
            />

            <Select 
              label_name='С кем патрулирование' 
              field_name='Full_name_junior_patroller' 
              options_list={[
                {id: '1', value: 'мастер леса Мясноборского участкового лесничества Устинов Дмитрий Сергеевич', name_option: 'Устинов, мастер Мясноборского', selected: false, disabled: false},
                {id: '2', value: 'участковый лесничий Ермолинского участкового лесничества Кузнецова Елизавета Михайловна', name_option: 'Кузнецова, участковый Ермолинского', selected: false, disabled: false},
                {id: '3', value: 'участковый лесничий Новгородского участкового лесничества Маркова Ирина Фирсовна', name_option: 'Маркова, участковый Новгородского', selected: false, disabled: false},
                {id: '4', value: 'мастер леса Советского участкового лесничества Капитонова Марина Александровна', name_option: 'Капитонова, мастер Советского', selected: false, disabled: false},
                {id: '5', value: 'мастер леса Новгородского участкового лесничества Зайцев Даниил Алексеевич', name_option: 'Зайцев, мастер Новгородского', selected: true, disabled: false},
              ]} 
              is_primary={false}           
            />

            <Input label_name='Время выдачи задания' field_name='Time_assignment_issue' placeholder='' input_type='time' is_primary={true} />   
            <Input label_name='Дата выдачи задания' field_name='Date_assignment_issue' placeholder='' input_type='date' is_primary={false} />   

            <Checkbox name="Additional_order" label="Дополнительный приказ" />

            {/* ------------------------------------- Акт --------------------------------- */}

            <div className='uk-margin'>
              <h2 className='uk-heading-divider'>Акт</h2>
            </div>

            <Input label_name='Номер акта о патрулировании' field_name='Number_patrol_act' placeholder='105' input_type='number' is_primary={true} />   
            <Input label_name='Дата акта о патрулировании' field_name='Date_patrol_act' placeholder='' input_type='date' is_primary={false} />   

            <Select 
              label_name='На что наклеено' 
              field_name='Object_leaflet' 
              options_list={[
                {id: '1', value: '', name_option: 'Выберите', selected: true, disabled: true},
                {id: '2', value: 'автобусная остановка', name_option: 'Остановка', selected: false, disabled: false},
                {id: '3', value: 'доска объявлений', name_option: 'Доска объявлений', selected: false, disabled: false},
              ]} 
              is_primary={false}           
            />

            <Select 
              label_name='Деревня, в которой наклеено' 
              field_name='Village_leaflet' 
              options_list={[
                {id: '1', value: '', name_option: 'Выберите', selected: true, disabled: true},
                {id: '2', value: 'Некохово', name_option: 'Некохово', selected: false, disabled: false},
                {id: '3', value: 'Захарьино', name_option: 'Захарьино', selected: false, disabled: false},
                {id: '4', value: 'Подберезье', name_option: 'Подберезье', selected: false, disabled: false},
                {id: '5', value: 'Вешки', name_option: 'Вешки', selected: false, disabled: false},
                {id: '6', value: 'Котовицы', name_option: 'Котовицы', selected: false, disabled: false},
              ]}  
              is_primary={false}           
            />

            <Input label_name='Сколько человек проинформировано' field_name='Number_informed_people' placeholder='2' input_type='number' is_primary={false} />   

            <Select 
              label_name='Деревня, в которой проинформированы люди' 
              field_name='Village_informed_people' 
              options_list={[
                {id: '1', value: '', name_option: 'Выберите', selected: true, disabled: true},
                {id: '2', value: 'Некохово', name_option: 'Некохово', selected: false, disabled: false},
                {id: '3', value: 'Захарьино', name_option: 'Захарьино', selected: false, disabled: false},
                {id: '4', value: 'Подберезье', name_option: 'Подберезье', selected: false, disabled: false},
                {id: '5', value: 'Вешки', name_option: 'Вешки', selected: false, disabled: false},
                {id: '6', value: 'Котовицы', name_option: 'Котовицы', selected: false, disabled: false},
              ]}  
              is_primary={false}           
            />

            <Select 
              label_name='Машина патрулирования' 
              field_name='Patrol_car' 
              options_list={[
                {id: '1', value: 'С948ХК', name_option: 'Алексея Евгеньевича', selected: true, disabled: false},
                {id: '2', value: 'C848ХМ', name_option: 'Николая Викторовича', selected: false, disabled: false},
              ]}  
              is_primary={false}           
            />

            <Checkbox name="Is_there_photo_table" label="Есть ли фототаблица?" />

            {/* --------------------------------------------------------------------------- */}

            <div className="uk-margin">
              <button type="submit" disabled={isSubmitting} className="uk-button uk-button-primary uk-button-large">
                  Создать документы
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default Document_generator;