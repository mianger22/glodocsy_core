import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import Input from '../../Common/Input';
import Select from '../../Common/Select';
import Checkbox from '../../Common/Checkbox';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import Phototable_template from '../../Assets/Шаблон фототаблицы по патрулированию.docx';
import Act_template from '../../Assets/Шаблон акта о проведённом патрулировании.doc';
import Schema_template from '../../Assets/Шаблон схемы проведённого патрулирования.docx';
import Task_template from '../../Assets/Шаблон задания на патрулирование.doc';

const PatrolReportGenerator = () => {
  const [isFresh, setIsFresh] = useState(false);

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

  const date_formation = (date) => {
    const month_names = [
      {'01': 'января'},
      {'02': 'февраля'},
      {'03': 'марта'},
      {'04': 'апреля'},
      {'05': 'мая'},
      {'06': 'июня'},
      {'07': 'июля'},
      {'08': 'августа'},
      {'09': 'сентября'},
      {'10': 'октября'},
      {'11': 'ноября'},
      {'12': 'декабря'},
    ];

    // 1. Получение численного обозначения месяца
    const month_number = date.split("-")[1];
    // 2. Поиск соответствующего месяца
    const foundMonth = month_names.find(month => month[month_number]);
    // 3. Получение значения месяца, если он найден
    const monthName = foundMonth ? foundMonth[month_number] : 'Месяц не найден';
    // 4. Формирование даты
    return `«${date.split("-")[2]}» ${monthName} ${date.split("-")[0]}`;
  }

  const patrol_participants = [
    {id: '1', value: 'мастер леса Мясноборского участкового лесничества Устинов Дмитрий Сергеевич', name_option: 'Устинов, мастер Мясноборского', disabled: false},
    {id: '2', value: 'участковый лесничий Ермолинского участкового лесничества Кузнецова Елизавета Михайловна', name_option: 'Кузнецова, участковый Ермолинского', disabled: false},
    {id: '3', value: 'участковый лесничий Новгородского участкового лесничества Маркова Ирина Фирсовна', name_option: 'Маркова, участковый Новгородского', disabled: false},
    {id: '4', value: 'мастер леса Советского участкового лесничества Капитонова Марина Александровна', name_option: 'Капитонова, мастер Советского', disabled: false},
  ]

  return (
    <div className='uk-margin-small-bottom'>
      <h1>Отчёт по патрулированию</h1>

      <Formik
        initialValues={{ Patrol_task_number: undefined, Date_issue_task: '', Patrol_date: '', 
          Patrol_route_number: '', What_date_was_approved: '28.10.2024', Year_patrol: 2025,
          Person_issued_task: 'директор ГОКУ "Новгородское лесничество" Иванов К.В.',
          Full_name_senior_patroller: 'мастер леса Мясноборского участкового лесничества Устинов Дмитрий Сергеевич', 
          Full_name_junior_patroller: 'участковый лесничий Новгородского участкового лесничества Маркова Ирина Фирсовна', 
          Time_assignment_issue: '', Additional_order: false, 
          Number_patrol_act: undefined, Object_leaflet: '', Village_leaflet: '', 
          Number_informed_people: '', Village_informed_people: '', Patrol_car: 'С948ХК',
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

          if (!values.Number_patrol_act) {
            errors.Number_patrol_act = 'Введите номер акта патрулирования';
          } else if (!/^\d{1,4}$/i.test(values.Number_patrol_act)) {
            errors.Number_patrol_act = 'Номер акта должен быть не более 4 цифр';
          }

          if (!values.Object_leaflet) {
            errors.Object_leaflet = 'Выберите объект расклейки';
          }

          if (!values.Village_leaflet) {
            errors.Village_leaflet = 'Выберите деревню расклейки';
          }

          if (!values.Village_leaflet) {
            errors.Village_leaflet = 'Выберите деревню расклейки';
          }

          if (!values.Number_informed_people) {
            errors.Number_informed_people = 'Выберите количество народа';
          }

          if (!values.Village_informed_people) {
            errors.Village_informed_people = 'Выберите деревню информирования';
          }

          if (!values.Patrol_car) {
            errors.Patrol_car = 'Выберите машину патрулирования';
          }

          return errors;
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));

            // 1. Получаю данные из полей формы
            const Person_issued_task = values.Person_issued_task;
            const Patrol_task_number = values.Patrol_task_number;
            let Date_issue_task = values.Date_issue_task; 
            let Patrol_date = values.Patrol_date; 
            const Patrol_route_number = values.Patrol_route_number; 
            const What_date_was_approved = values.What_date_was_approved; 
            const Year_patrol = values.Year_patrol; 
            const Full_name_senior_patroller = values.Full_name_senior_patroller; 
            const Full_name_junior_patroller = values.Full_name_junior_patroller; 
            let Time_assignment_issue = values.Time_assignment_issue;
            const Additional_order = values.Additional_order === true ? " (приказ директора от _____._____._____ года № _____)" : "";
            const Number_patrol_act = values.Number_patrol_act; 
            
            function generate_date_patrol_act() {
              // получаем дату патрулирования
              const date = values.Patrol_date;
              // для удобства делим её на части и каждую часть заносим в отдельную переменную
              let [day, month, year] = [date.split("-")[2], date.split("-")[1], date.split("-")[0]];
              // форматируем день, делая его числом и прибавляя единицу
              day = +day + 1;
              // если полученный день меньше 10, то добавляем ноль, переведя в строку
              day = day < 10 ? `0${day}` : `${day}`;
              // формируем новую дату, которая будет являться датой акта патрулирования
              return `${year}-${month}-${day}`;
            }

            let Date_patrol_act = generate_date_patrol_act();

            const Object_leaflet = values.Object_leaflet; 
            const Village_leaflet = values.Village_leaflet; 
            const Number_informed_people = values.Number_informed_people; 
            const Village_informed_people = values.Village_informed_people; 
            const Patrol_car = values.Patrol_car; 
            const Is_there_photo_table = values.Is_there_photo_table === true ? ", фототаблица" : "";

            // 2. Обрабатываю их, формируя новые

            // 2.1. Формирование нужного формата времени
            Time_assignment_issue = `${Time_assignment_issue.split(":")[0]} часов ${Time_assignment_issue.split(":")[1]} минут`;

            // 2.2. Формирование нужного формата даты
            Date_issue_task = date_formation(Date_issue_task);
            Patrol_date = date_formation(Patrol_date);
            Date_patrol_act = date_formation(Date_patrol_act);

            // 2.3. Создание фамилии с инициалами из полного имени
            let Senior_patroller, Declension_name_senior_patroller, Initials_senior_patroller, 
            Junior_patroller, Declension_name_junior_patroller, Initials_junior_patroller,
            Patrol_route_declaration;

            // 2.4. Создание инициалов старшего патрульной группы
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

            // 2.5. Создание инициалов младшего патрульной группы
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

            // 2.6. Создание переменных для хранения времени и протяжённости маршрута патрулирования
            let Patrol_time, Length_patrol;

            // 2.7. Создание описания маршрута патрулирования
            switch (Patrol_route_number) {
                case '106':
                    Patrol_route_declaration = 'квартал 128 (части выделов 14,17,26,30,36,38), квартал 126 (части выделов 8,7,15), квартал 228 (части выделов 13,21,25), квартал 216 (части выделов 17,18,19,23,30), квартал 213 (части выделов 20,24,16), квартал 211 (части выделов 20,21,24,30,32), квартал 199 (части выделов 21,22,31,33,35)';
                    Patrol_time = '35 мин.';
                    Length_patrol = '14 км.';
                    break;
                case '107':
                    Patrol_route_declaration = 'квартал 200 (части выделов 49,50,51,4,6,7), квартал 191 (части выделов 25,26,27), квартал 40 (части выделов 19,20), квартал 201 (части выделов 6,8,14,15,18,24,26,28,31), квартал 195 (части выделов 11,12), квартал 196 (части выделов 2,10,11,12)';
                    Patrol_time = '15 мин.';
                    Length_patrol = '5 км.';
                    break;
                case '108':
                    Patrol_route_declaration = 'квартал 43 (части выделов 7,9), квартал 30 (части выделов 12,15,17,19), квартал 192 (части выделов 3,13)';
                    Patrol_time = '60 мин.';
                    Length_patrol = '5 км.';
                    break;
                case '109':
                    Patrol_route_declaration = 'квартал 229 (части выделов 2,4,8,9,10,12,13,6,7,11), квартал 116 (части выделов 9,13,15,7,18,5,11,12,16), квартал 117 (части выделов 18,15,12,16,17,18,21), квартал 119 (части выделов 7,16,3,2,17,6,13,14,15)';
                    Patrol_time = '10 мин.';
                    Length_patrol = '4 км.';
                    break;
                case '110':
                    Patrol_route_declaration = 'квартал 252 (часть выдела 18)';
                    Patrol_time = '10 мин.';
                    Length_patrol = '0,3 км.';
                    break;
                case '111':
                    Patrol_route_declaration = 'квартал  255 (части выделов 2,4,6,7,9), квартал 254 (части выделов 2,3,5,7,8,9,16,19), квартал 248 (части выделов 26,27,28), квартал 247 (части выделов 35,36,39,46,49,38,45,47,48,51,53,4,6,7,8,5,19,18,23), квартал 232 (части выделов 2,4,3,5,6,10,11,21), квартал 233 (части выделов 4,5,3,7,2), квартал 230 (части выделов 2,3,4,8,9,10,11,12)';
                    Patrol_time = '20 мин.';
                    Length_patrol = '8 км.';
                    break;
                case '112':
                    Patrol_route_declaration = 'квартал 226 (части выделов 1,2,4,3,9,8,12), квартал 111 (части выделов 4,7,8), квартал 106 (части выделов 6,16,5,8), квартал 208 (части выделов 6,17,20,10,9,5,7), квартал 207 (части выделов 8,7,9,15,16,17), квартал 197 (части выделов 9,12,8,14,11,18)';
                    Patrol_time = '1 ч. 20 мин.';
                    Length_patrol = '20 км.';
                    break;
                case '113':
                    Patrol_route_declaration = 'квартал 246 (части выделов 17,18,19,20,21,22), квартал 155 (части выделов 14,26,28,31,13,15,23,40,30), квартал 244 (части выделов 4,5,10,8,9,36,47,53), квартал 151 (части выделов 9,18,17,12,13), квартал 243 (части выделов 12)';
                    Patrol_time = '1 ч. 45 мин.';
                    Length_patrol = '12 км.';
                    break;
                case '114':
                    Patrol_route_declaration = 'квартал 225 (части выделов 39,40,47,61,21,29,32), квартал 218 (части выделов 14,11,12,13,20,19), квартал 86 (части выделов 19,20,34,35,33,36)';
                    Patrol_time = '40 мин.';
                    Length_patrol = '12 км.';
                    break;
                case '115':
                    Patrol_route_declaration = 'квартал 82 (части выделов 5,6,14,20,25), квартал 100 (части выделов 14,19,21), квартал 105 (части выделов 3,10,14,17,18), квартал 110 (части выделов 9,8,17)';
                    Patrol_time = '1 ч.';
                    Length_patrol = '5 км.';
                    break;
                case '116':
                    Patrol_route_declaration = 'квартал 240 (части выделов 1,2,3,4,5,6,13,11,37,38,41,27,29)';
                    Patrol_time = '15 мин.';
                    Length_patrol = '0,5 км.';
                    break;
                case '117':
                    Patrol_route_declaration = 'квартал 250 (части выделов 2,3,5), квартал 251 (части выделов 1,3)';
                    Patrol_time = '5 мин.';
                    Length_patrol = '1 км.';
                    break;
                case '118':
                    Patrol_route_declaration = 'квартал 252 (части выделов 3,5,6)';
                    Patrol_time = '40 мин.';
                    Length_patrol = '1 км.';
                    break;
                case '119':
                    Patrol_route_declaration = 'квартал 224 (части выделов 31,32,37,38,41), квартал 223 (части выделов 33,36,38,45,49,54,61)';
                    Patrol_time = '10 мин.';
                    Length_patrol = '2 км.';
                    break;
                case '120':
                    Patrol_route_declaration = 'квартал 262 (часть выдела 27)';
                    Patrol_time = '15 мин.';
                    Length_patrol = '0,5 км.';
                    break;
                case '121':
                    Patrol_route_declaration = 'квартал 235 (части выделов 16,20)';
                    Patrol_time = '30 мин.';
                    Length_patrol = '1 км.';
                    break;
                case '122':
                    Patrol_route_declaration = 'квартал 259 (часть выдела 2)';
                    Patrol_time = '30 мин.';
                    Length_patrol = '1 км.';
                    break;
                case '123':
                    Patrol_route_declaration = 'квартал 235 (части выделов 16,20,23,24)';
                    Patrol_time = '40 мин.';
                    Length_patrol = '1 км.';
                    break;
                case '124':
                    Patrol_route_declaration = 'квартал 12 (части выделов 7,10), квартал 13 (части выделов 1,23,40,35)';
                    Patrol_time = '10 мин.';
                    Length_patrol = '4 км.';
                    break;
                default:
                    break;
            }

            // 3. Генерирую документы
            fetch(Task_template)
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
                      Junior_patroller, Additional_order, Time_assignment_issue, 
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
                  link.download = `+1. Задание на проведение патрулирования по МБ л-ву № ${Patrol_task_number}.docx`;
                  link.click();
              })
              .catch(error => {
                  console.error('Ошибка:', error);
                  alert('Ошибка! Смотри в console');
              });

            fetch(Act_template)
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
                  const Initial_report = `Также мною были проинформированы ${Number_informed_people} граждан деревни ${Village_informed_people} о правилах пожарной безопасности в лесном массиве и прилегающей территории. Каждому гражданину был вручён информационный лист с соответствующей информацией. Кроме того мною была прикреплена памятка с правилами пожарной безопасности в деревне ${Village_leaflet} (${Object_leaflet}).`;

                  // Обработка документа (замена {user_name} на имя пользователя, {user_surname} на фамилию пользователя и т.д.)
                  doc.render({
                      Declension_name_senior_patroller, Initials_senior_patroller, Declension_name_junior_patroller, 
                      Initials_junior_patroller, Number_patrol_act, Date_patrol_act, Patrol_task_number, Date_issue_task, 
                      Patrol_route_declaration, Initial_report, Patrol_car, Length_patrol, Is_there_photo_table
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

            fetch(Schema_template)
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
                  link.download = `+3. Схема проведённого патрулирования по МБ л-ву.docx`;
                  link.click();
              })
              .catch(error => {
                  console.error('Ошибка:', error);
                  alert('Ошибка! Смотри в console');
              });

            if (values.Is_there_photo_table === true) {
              fetch(Phototable_template)
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

            actions.setSubmitting(false);
            custom_alert('Задание и схему можно распечатывать, акт и фототаблица будут заполнены после патруля');
            setIsFresh(true);

            window.scrollTo(0, 0);
          }, 500);
        }}
      >
        {({ errors, touched, isSubmitting, handleChange, ...props }) => (
          <Form>

            {/* ------------------------------------- Задание --------------------------------- */}

            <div className='uk-margin'>
              <h2 className='uk-heading-divider'>Задание</h2>
            </div>

            <Input 
              handleChange={handleChange} 
              isFresh={isFresh} 
              setIsFresh={setIsFresh}
              label_name='Номер задания' 
              field_name='Patrol_task_number' 
              placeholder='185' 
              input_type='number' 
              is_primary={true} />       
            <Input 
              handleChange={handleChange} 
              isFresh={isFresh} 
              setIsFresh={setIsFresh}
              label_name='От какого числа' 
              field_name='Date_issue_task' 
              placeholder='' 
              input_type='date' 
              is_primary={false} />   
            <Input 
              handleChange={handleChange}  
              setIsFresh={setIsFresh}
              isFresh={isFresh}
              label_name='Дата патрулирования' 
              field_name='Patrol_date' 
              placeholder='' 
              input_type='date' 
              is_primary={true} />      
            
            <Select 
              handleChange={handleChange}  
              setIsFresh={setIsFresh}
              isFresh={isFresh}
              label_name='Номер маршрута патрулирования' 
              field_name='Patrol_route_number' 
              options_list={[
                {id: '1', value: '', name_option: 'Выберите', disabled: true},
                {id: '2', value: '106', name_option: '106', disabled: false},
                {id: '3', value: '107', name_option: '107', disabled: false},
                {id: '4', value: '108', name_option: '108', disabled: false},
                {id: '5', value: '109', name_option: '109', disabled: false},
                {id: '6', value: '110', name_option: '110', disabled: false},
                {id: '7', value: '111', name_option: '111', disabled: false},
                {id: '8', value: '112', name_option: '112', disabled: false},
                {id: '9', value: '113', name_option: '113', disabled: false},
                {id: '10', value: '114', name_option: '114', disabled: false},
                {id: '11', value: '115', name_option: '115', disabled: false},
                {id: '12', value: '116', name_option: '116', disabled: false},
                {id: '13', value: '117', name_option: '117', disabled: false},
                {id: '14', value: '118', name_option: '118', disabled: false},
                {id: '15', value: '119', name_option: '119', disabled: false},
                {id: '16', value: '120', name_option: '120', disabled: false},
                {id: '17', value: '121', name_option: '121', disabled: false},
                {id: '18', value: '122', name_option: '122', disabled: false},
                {id: '19', value: '123', name_option: '123', disabled: false},
                {id: '20', value: '124', name_option: '124', disabled: false},
              ]} 
              is_primary={true}           
            />

            <Input 
              handleChange={handleChange} 
              isFresh={isFresh} 
              setIsFresh={setIsFresh}
              label_name='Какого числа утверждён' 
              field_name='What_date_was_approved' 
              placeholder='08.12.2023' 
              input_type='text' 
              is_primary={false} />   
            
            <Select 
              handleChange={handleChange}  
              setIsFresh={setIsFresh}
              isFresh={isFresh}
              label_name='Год патрулирования' 
              field_name='Year_patrol' 
              options_list={[
                {id: '1', value: '2025', name_option: '2025', disabled: false},
                {id: '2', value: '2026', name_option: '2026', disabled: false},
                {id: '3', value: '2027', name_option: '2027', disabled: false},
                {id: '4', value: '2028', name_option: '2028', disabled: false},
              ]} 
              is_primary={false} 
            />

            <Select 
              handleChange={handleChange}  
              setIsFresh={setIsFresh}
              isFresh={isFresh}
              label_name='Кто выдал задание' 
              field_name='Person_issued_task' 
              options_list={[
                {id: '1', value: 'директор ГОКУ "Новгородское лесничество" Иванов К.В.', name_option: 'Директор', disabled: false},
                {id: '2', value: 'заместитель директора ГОКУ "Новгородское лесничество" Орехова И.Н.', name_option: 'Заместитель', disabled: false},
              ]} 
              is_primary={false} 
            />

            <Select 
              handleChange={handleChange}  
              setIsFresh={setIsFresh}
              isFresh={isFresh}
              label_name='Старший патрульной группы' 
              field_name='Full_name_senior_patroller' 
              options_list={patrol_participants}   
              is_primary={false}         
            />

            <Select 
              handleChange={handleChange}  
              setIsFresh={setIsFresh}
              isFresh={isFresh}
              label_name='С кем патрулирование' 
              field_name='Full_name_junior_patroller' 
              options_list={patrol_participants} 
              is_primary={false}           
            />

            <Input 
              handleChange={handleChange} 
              isFresh={isFresh}
              setIsFresh={setIsFresh}
              label_name='Время выдачи задания' 
              field_name='Time_assignment_issue' 
              placeholder='' 
              input_type='time' 
              is_primary={true} />    

            <Checkbox name="Additional_order" label="Дополнительный приказ" />

            {/* ------------------------------------- Акт --------------------------------- */}

            <div className='uk-margin'>
              <h2 className='uk-heading-divider'>Акт</h2>
            </div>

            <Input 
              handleChange={handleChange} 
              isFresh={isFresh}
              setIsFresh={setIsFresh}
              label_name='Номер акта о патрулировании' 
              field_name='Number_patrol_act' 
              placeholder='105' 
              input_type='number' 
              is_primary={true} />   

            <Select 
              handleChange={handleChange}  
              setIsFresh={setIsFresh}
              isFresh={isFresh}
              label_name='На что наклеено' 
              field_name='Object_leaflet' 
              options_list={[
                {id: '1', value: '', name_option: 'Выберите', disabled: true},
                {id: '2', value: 'автобусная остановка', name_option: 'Остановка', disabled: false},
                {id: '3', value: 'доска объявлений', name_option: 'Доска объявлений', disabled: false},
              ]} 
              is_primary={false}           
            />

            <Select 
              handleChange={handleChange}  
              setIsFresh={setIsFresh}
              isFresh={isFresh}
              label_name='Деревня, в которой наклеено' 
              field_name='Village_leaflet' 
              options_list={[
                {id: '1', value: '', name_option: 'Выберите', disabled: true},
                {id: '2', value: 'Некохово', name_option: 'Некохово', disabled: false},
                {id: '3', value: 'Захарьино', name_option: 'Захарьино', disabled: false},
                {id: '4', value: 'Подберезье', name_option: 'Подберезье', disabled: false},
                {id: '5', value: 'Вешки', name_option: 'Вешки', disabled: false},
                {id: '6', value: 'Котовицы', name_option: 'Котовицы', disabled: false},
                {id: '7', value: 'Теремец', name_option: 'Теремец', disabled: false},
              ]}  
              is_primary={false}           
            />

            <Select 
              handleChange={handleChange}  
              setIsFresh={setIsFresh}
              isFresh={isFresh}
              label_name='Сколько человек проинформировано' 
              field_name='Number_informed_people' 
              options_list={[
                {id: '1', value: '', name_option: 'Выберите',disabled: true},
                {id: '2', value: '1', name_option: '1', disabled: false},
                {id: '3', value: '2', name_option: '2', disabled: false},
                {id: '4', value: '3', name_option: '3', disabled: false},
                {id: '5', value: '4', name_option: '4', disabled: false},
                {id: '6', value: '5', name_option: '5', disabled: false},
                {id: '7', value: '6', name_option: '6', disabled: false},
                {id: '8', value: '7', name_option: '7', disabled: false},
              ]}  
              is_primary={false}           
            />

            <Select 
              handleChange={handleChange}  
              setIsFresh={setIsFresh}
              isFresh={isFresh}
              label_name='Деревня, в которой проинформированы люди' 
              field_name='Village_informed_people' 
              options_list={[
                {id: '1', value: '', name_option: 'Выберите', disabled: true},
                {id: '2', value: 'Некохово', name_option: 'Некохово', disabled: false},
                {id: '3', value: 'Захарьино', name_option: 'Захарьино', disabled: false},
                {id: '4', value: 'Подберезье', name_option: 'Подберезье', disabled: false},
                {id: '5', value: 'Вешки', name_option: 'Вешки', disabled: false},
                {id: '6', value: 'Котовицы', name_option: 'Котовицы', disabled: false},
                {id: '7', value: 'Малое Замошье', name_option: 'Малое Замошье', disabled: false},
                {id: '8', value: 'Большое Замошье', name_option: 'Большое Замошье', disabled: false},
              ]}  
              is_primary={false}           
            />

            {/* <Select 
              handleChange={handleChange}  
              setIsFresh={setIsFresh}
              isFresh={isFresh}
              label_name='Машина патрулирования' 
              field_name='Patrol_car' 
              options_list={[
                {id: '1', value: '', name_option: 'Выберите', disabled: true},
                {id: '2', value: 'С948ХК', name_option: 'Алексея Евгеньевича', disabled: false},
                {id: '3', value: 'C848ХМ', name_option: 'Николая Викторовича', disabled: false},
              ]}  
              is_primary={false}           
            /> */}

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

export default PatrolReportGenerator;