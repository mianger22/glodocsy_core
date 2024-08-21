import { Formik } from 'formik';

const Document_generator = () => (          
    <Formik
      initialValues={{ Patrol_task_number: '', Date_issue_task: '', Patrol_date: '', 
        Patrol_route_number: '', What_date_was_approved: '08.12.2023', Year_patrol: '', Who_issued_patrol: '', 
        Full_name_senior_patroller: '', Full_name_junior_patroller: '', Time_assignment_issue: '',
        Date_assignment_issue: '', Additional_order: '', Number_patrol_act: '', Date_patrol_act: '', 
        Object_leaflet: '', Village_leaflet: '', Number_informed_people: '', Village_informed_people: '', 
        Patrol_car: '', Is_there_photo_table: '' }}
      validate={values => {
        const errors = {};

        if (!values.Patrol_task_number) {
          errors.Patrol_task_number = 'Заполните поле';
        } else if (!/^\d{1,4}$/i.test(values.Patrol_task_number)) {
          errors.Patrol_task_number = 'Номер задания должен быть не более 4 цифр';
        }

        if (!values.Date_issue_task) {
            errors.Date_issue_task = 'Заполните поле';
        } 

        if (!values.Patrol_date) {
            errors.Patrol_date = 'Заполните поле';
        } 

        if (!values.Patrol_route_number) {
            errors.Patrol_route_number = 'Заполните поле';
        } 

        if (!values.What_date_was_approved) {
            errors.What_date_was_approved = 'Заполните поле';
        } else if (!/^\d{2}.\d{2}.\d{4}$/i.test(values.What_date_was_approved)) {
            errors.Patrol_task_number = 'Дата должна быть подобной 08.12.2023';
          }

        if (!values.Year_patrol) {
            errors.Year_patrol = 'Заполните поле';
        } 

        if (!values.Who_issued_patrol) {
            errors.Who_issued_patrol = 'Заполните поле';
        } 

        if (!values.Full_name_senior_patroller) {
            errors.Full_name_senior_patroller = 'Заполните поле';
        } 

        if (!values.Full_name_junior_patroller) {
            errors.Full_name_junior_patroller = 'Заполните поле';
        }
        
        if (!values.Time_assignment_issue) {
            errors.Time_assignment_issue = 'Заполните поле';
        } 
        // else if (!/^\d{2} \d{2}$/i.test(values.Time_assignment_issue)) {
        //     errors.Time_assignment_issue = "Время выдачи задания должно быть вида 12 30"
        // }

        if (!values.Date_assignment_issue) {
            errors.Date_assignment_issue = 'Заполните поле';
        }

        if (!values.Number_patrol_act) {
            errors.Number_patrol_act = 'Заполните поле';
        } else if (!/^\d{1,4}$/i.test(values.Number_patrol_act)) {
            errors.Number_patrol_act = 'Номер акта должен быть не более 4 цифр';
        }

        if (!values.Date_patrol_act) {
            errors.Date_patrol_act = 'Заполните поле';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);

        Time_assignment_issue = `${Time_assignment_issue.split(" ")[0]} часов ${Time_assignment_issue.split(" ")[1]} минут`;

        // Создание фамилии с инициалами из полного имени
        let Senior_patroller, Declension_name_senior_patroller, Initials_senior_patroller, 
        Junior_patroller, Declension_name_junior_patroller, Initials_junior_patroller,
        Patrol_route_declaration;

        // Создание инициалов старшего патрульной группы
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
        }

        // Создание инициалов младшего патрульной группы
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
        }

        // Создание переменных для хранения времени и протяжённости маршрута патрулирования
        let Patrol_time, Length_patrol;

        // Создание описания маршрута патрулирования
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
        }

        // Формирование нужного задания
        fetch('Шаблон задания на патрулирование.docx')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.arrayBuffer();
            })
            .then(data => {
                const zip = new PizZip(data);
                const doc = new window.docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                });

                // Обработка документа (замена {user_name} на имя пользователя, {user_surname} на фамилию пользователя и т.д.)
                doc.render({
                    Full_name_senior_patroller, Senior_patroller, Full_name_junior_patroller, 
                    Junior_patroller, Additional_order, Time_assignment_issue, Date_assignment_issue, 
                    Patrol_task_number, Date_issue_task, Patrol_date, Patrol_route_number, What_date_was_approved, 
                    Year_patrol, Year_patrol, Person_issued_task
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

        // Формирование нужного акта
        fetch('Шаблон акта о проведённом патрулировании.docx')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.arrayBuffer();
            })
            .then(data => {
                const zip = new PizZip(data);
                const doc = new window.docxtemplater(zip, {
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

        // Формирование нужной схемы
        fetch('Шаблон схемы проведённого патрулирования.docx')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.arrayBuffer();
            })
            .then(data => {
                const zip = new PizZip(data);
                const doc = new window.docxtemplater(zip, {
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

        // Формирование нужной фототаблицы
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
                    const doc = new window.docxtemplater(zip, {
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
   
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
            <div className='uk-margin'>
                <h2 className='uk-heading-divider'>Задание</h2>
            </div>

            <div className="mb-4">
                <label className="uk-text-primary" htmlFor="Patrol_task_number">Номер задания</label>

                <div className="uk-margin">
                    <input 
                        className={`${errors.Patrol_task_number ? `uk-input uk-form-danger` : `uk-input`}`}
                        type="number" 
                        placeholder="185" 
                        aria-label="Patrol_task_number"
                        name="Patrol_task_number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Patrol_task_number}
                    />
                    <p className='uk-text-danger'>{errors.Patrol_task_number && touched.Patrol_task_number && errors.Patrol_task_number}</p>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="Date_issue_task">От какого числа</label>

                <div className="uk-margin">
                    <input 
                        type="date" 
                        className={`${errors.Date_issue_task ? `uk-input uk-form-danger` : `uk-input`}`}
                        aria-label="Date_issue_task"
                        name="Date_issue_task"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Date_issue_task} 
                    />
                </div>
                <div className='uk-text-danger'>{errors.Date_issue_task && touched.Date_issue_task && errors.Date_issue_task}</div>
            </div>
            <div className="mb-4">
                <label htmlFor="Patrol_date">Дата патрулирования</label>

                <div className="uk-margin">
                    <input 
                        type="date" 
                        className={`${errors.Patrol_date ? `uk-input uk-form-danger` : `uk-input`}`}
                        aria-label="Patrol_date"
                        name="Patrol_date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Patrol_date} 
                    />
                </div>
                <div className='uk-text-danger'>{errors.Patrol_date && touched.Patrol_date && errors.Patrol_date}</div>
            </div>
            <div className="mb-4">
                <label className="uk-text-primary" htmlFor="Patrol_route_number">Номер маршрута патрулирования</label>

                <div className="uk-margin">
                    <select className="uk-select" aria-label="Select" name="Patrol_route_number">
                        <option value='' disabled selected>
                            Выберите
                        </option>
                        <option value='70,1'>
                            70
                        </option>
                        <option value='71,2'>
                            71
                        </option>
                        <option value='72,3'>
                            72
                        </option>
                        <option value='73,4'>
                            73
                        </option>
                        <option value='74,5'>
                            74
                        </option>
                        <option value='75,6'>
                            75
                        </option>
                        <option value='76,7'>
                            76
                        </option>
                        <option value='77,8'>
                            77
                        </option>
                        <option value='78,9'>
                            78
                        </option>
                    </select>
                </div>
                <div className='uk-text-danger'>{errors.Patrol_route_number && touched.Patrol_route_number && errors.Patrol_route_number}</div>
            </div>   
            <div className="mb-4">
                <label htmlFor="What_date_was_approved">Какого числа утверждён</label>

                <div className="uk-margin">
                    <input 
                        className={`${errors.What_date_was_approved ? `uk-input uk-form-danger` : `uk-input`}`}
                        type="text" 
                        placeholder="08.12.2023" 
                        // value="08.12.2023"
                        aria-label="What_date_was_approved"
                        name="What_date_was_approved"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.What_date_was_approved}
                    />
                </div>
                <div className='uk-text-danger'>{errors.What_date_was_approved && touched.What_date_was_approved && errors.What_date_was_approved}</div>
            </div>  
            <div className="mb-4">
                <label htmlFor="Year_patrol">Год патрулирования</label>

                <div className="uk-margin">
                    <select className="uk-select" aria-label="Select" name="Year_patrol">
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select>
                </div>
                <div className='uk-text-danger'>{errors.Year_patrol && touched.Year_patrol && errors.Year_patrol}</div>
            </div>  
            <div className="mb-4">
                <label htmlFor="Who_issued_patrol">Кто выдал задание</label>

                <div className="uk-margin">
                    <select className="uk-select" aria-label="Select" id="Person_issued_task" name="Person_issued_task">
                        <option value='директор ГОКУ "Новгородское лесничество" Иванов К.В.'>Директор</option>
                        <option value='заместитель директора ГОКУ "Новгородское лесничество" Орехова И.Н.'>Заместитель</option>
                    </select>
                </div>
                <div className='uk-text-danger'>{errors.Person_issued_task && touched.Person_issued_task && errors.Person_issued_task}</div>
            </div>    
            <div className="mb-4">
                <label htmlFor="Who_is_patrolling">Старший патрульной группы</label>

                <div className="uk-margin">
                    <select className="uk-select" aria-label="Select" name="Full_name_senior_patroller">
                        <option value='мастер леса Мясноборского участкового лесничества Устинов Дмитрий Сергеевич'>
                            Устинов, мастер Мясноборского
                        </option>
                        <option value='участковый лесничий Ермолинского участкового лесничества Кузнецова Елизавета Михайловна'>
                            Кузнецова, участковый Ермолинского
                        </option>
                        <option value='участковый лесничий Новгородского участкового лесничества Маркова Ирина Фирсовна'>
                            Маркова, участковый Новгородского
                        </option>
                        <option value='мастер леса Советского участкового лесничества Капитонова Марина Александровна'>
                            Капитонова, мастер Советского
                        </option>
                        <option value='мастер леса Новгородского участкового лесничества Зайцев Даниил Алексеевич'>
                            Зайцев, мастер Новгородского
                        </option>
                    </select>
                </div>
                <div className='uk-text-danger'>{errors.Full_name_senior_patroller && touched.Full_name_senior_patroller && errors.Full_name_senior_patroller}</div>
            </div>
            <div className="mb-4">
                <label htmlFor="Who_am_I_patrolling_with">С кем патрулирую</label>

                <div className="uk-margin">
                    <select className="uk-select" aria-label="Select" name="Full_name_junior_patroller">
                        <option value='мастер леса Мясноборского участкового лесничества Устинов Дмитрий Сергеевич'>
                            Устинов, мастер Мясноборского
                        </option>
                        <option value='участковый лесничий Ермолинского участкового лесничества Кузнецова Елизавета Михайловна'>
                            Кузнецова, участковый Ермолинского
                        </option>
                        <option value='участковый лесничий Новгородского участкового лесничества Маркова Ирина Фирсовна'>
                            Маркова, участковый Новгородского
                        </option>
                        <option value='мастер леса Советского участкового лесничества Капитонова Марина Александровна'>
                            Капитонова, мастер Советского
                        </option>
                        <option value='мастер леса Новгородского участкового лесничества Зайцев Даниил Алексеевич' selected>
                            Зайцев, мастер Новгородского
                        </option>
                    </select>
                </div>
                <div className='uk-text-danger'>{errors.Full_name_junior_patroller && touched.Full_name_junior_patroller && errors.Full_name_junior_patroller}</div>
            </div> 
            <div className="mb-4">
                <label className="uk-text-primary" htmlFor="Time_assignment_issue">Время выдачи задания</label>

                <div className="uk-margin">
                    <input 
                        className={`${errors.Time_assignment_issue ? `uk-input uk-form-danger` : `uk-input`}`}
                        type="time" 
                        // placeholder="12 30" 
                        aria-label="Time_assignment_issue"
                        name="Time_assignment_issue"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Time_assignment_issue}
                    />
                </div>
                <div className='uk-text-danger'>{errors.Time_assignment_issue && touched.Time_assignment_issue && errors.Time_assignment_issue}</div>
            </div> 
            <div className="mb-4">
                <label htmlFor="Date_assignment_issue">Дата выдачи задания</label>

                <div className="uk-margin">
                    <input 
                        type="date" 
                        className={`${errors.Date_assignment_issue ? `uk-input uk-form-danger` : `uk-input`}`}
                        aria-label="Date_assignment_issue"
                        name="Date_assignment_issue"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Date_assignment_issue} 
                    />
                </div>
                <div className='uk-text-danger'>{errors.Date_assignment_issue && touched.Date_assignment_issue && errors.Date_assignment_issue}</div>
            </div>
            <div className="mb-4">
                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            
                            aria-label="Additional_order"
                            name="Additional_order"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // value={values.Additional_order}
                        /> Дополнительный приказ
                    </label>
                </div>
                <div className='uk-text-danger'>{errors.Additional_order && touched.Additional_order && errors.Additional_order}</div>
            </div>

            {/* ---------------------------------------------------------------------------------------------------- */}
            
            <div className='uk-margin'>
                <h2 className='uk-heading-divider'>Акт</h2>
            </div>

            <div className="mb-4">
                <label className="uk-text-primary" htmlFor="Number_patrol_act">Номер акта о патрулировании</label>
                
                <div className="uk-margin">
                    <input 
                        className={`${errors.Number_patrol_act ? `uk-input uk-form-danger` : `uk-input`}`}
                        type="number" 
                        placeholder="105" 
                        aria-label="Number_patrol_act"
                        name="Number_patrol_act"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Number_patrol_act}
                    />
                </div>
                <div className='uk-text-danger'>{errors.Number_patrol_act && touched.Number_patrol_act && errors.Number_patrol_act}</div>
            </div>
            <div className="mb-4">
                <label htmlFor="Date_patrol_act">Дата акта о патрулировании</label>
                
                <div className="uk-margin">
                    <input 
                        type="date" 
                        className={`${errors.Date_patrol_act ? `uk-input uk-form-danger` : `uk-input`}`}
                        aria-label="Date_patrol_act"
                        name="Date_patrol_act"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Date_patrol_act} 
                    />
                </div>
                <div className='uk-text-danger'>{errors.Date_patrol_act && touched.Date_patrol_act && errors.Date_patrol_act}</div>
            </div>
            <div className="mb-4">
                <label htmlFor="Object_leaflet">На что наклеено</label>
                
                <div className="uk-margin">
                    <select className="uk-select" aria-label="Select" name="Object_leaflet">
                        <option value='автобусная остановка'>Остановка</option>
                        <option value='доска объявлений'>Доска объявлений</option>
                    </select>
                </div>
                <div className='uk-text-danger'>{errors.Object_leaflet && touched.Object_leaflet && errors.Object_leaflet}</div>
            </div>
            <div className="mb-4">
                <label htmlFor="Village_leaflet">Деревня, в которой наклеено</label>
                
                <div className="uk-margin">
                    <select className="uk-select" aria-label="Select" name="Village_leaflet">
                        <option value='' disabled selected>
                            Выберите
                        </option>
                        <option value='Некохово'>Некохово</option>
                        <option value='Захарьино'>Захарьино</option>
                        <option value='Подберезье'>Подберезье</option>
                        <option value='Вешки'>Вешки</option>
                        <option value='Котовицы'>Котовицы</option>
                        <option value='Мясной Бор'>Мясной Бор</option>
                        <option value='Большое Замошье'>Большое Замошье</option>
                        <option value='Малое Замошье'>Малое Замошье</option>
                    </select>
                </div>
                <div className='uk-text-danger'>{errors.Village_leaflet && touched.Village_leaflet && errors.Village_leaflet}</div>
            </div>
            <div className="mb-4">
                <label htmlFor="Number_informed_people">Сколько человек проинформировано</label>
                
                <div className="uk-margin">
                    <input 
                        className={`${errors.Number_informed_people ? `uk-input uk-form-danger` : `uk-input`}`}
                        type="number" 
                        placeholder="1" 
                        aria-label="Number_informed_people"
                        name="Number_informed_people"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Number_informed_people}
                    />
                </div>
                <div className='uk-text-danger'>{errors.Number_informed_people && touched.Number_informed_people && errors.Number_informed_people}</div>
            </div>
            <div className="mb-4">
                <label htmlFor="Village_informed_people">Деревня, в которой проинформированы люди</label>
                
                <div className="uk-margin">
                    <select className="uk-select" aria-label="Select" name="Village_informed_people">
                        <option value='' disabled selected>
                            Выберите
                        </option>
                        <option value='Некохово'>Некохово</option>
                        <option value='Захарьино'>Захарьино</option>
                        <option value='Подберезье'>Подберезье</option>
                        <option value='Вешки'>Вешки</option>
                        <option value='Котовицы'>Котовицы</option>
                        <option value='Мясной Бор'>Мясной Бор</option>
                        <option value='Большое Замошье'>Большое Замошье</option>
                        <option value='Малое Замошье'>Малое Замошье</option>
                    </select>
                </div>
                <div className='uk-text-danger'>{errors.Village_informed_people && touched.Village_informed_people && errors.Village_informed_people}</div>
            </div>
            <div className="mb-4">
                <label htmlFor="Patrol_car">Машина патрулирования</label>
                
                <div className="uk-margin">
                    <select className="uk-select" aria-label="Select" name="Patrol_car">
                        <option value='УАЗ С233ТА53' selected>Алексея Евгеньевича</option>
                        <option value='УАЗ C848ХМ53'>Николая Викторовича</option>
                    </select>
                </div>
                <div className='uk-text-danger'>{errors.Patrol_car && touched.Patrol_car && errors.Patrol_car}</div>
            </div>
            <div className="mb-4">
                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            
                            aria-label="Is_there_photo_table"
                            name="Is_there_photo_table"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // value={values.Is_there_photo_table}
                        /> Есть ли фототаблица
                    </label>
                </div>
                <div className='uk-text-danger'>{errors.Is_there_photo_table && touched.Is_there_photo_table && errors.Is_there_photo_table}</div>
            </div>

            <div className="uk-margin">
                <button type="submit" disabled={isSubmitting} className="uk-button uk-button-primary uk-button-large">
                    Создать документы
                </button>
            </div>
        </form>
      )}
    </Formik>
);

export default Document_generator;