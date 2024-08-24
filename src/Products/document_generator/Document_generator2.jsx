import { Form, Formik } from 'formik';

const Document_generator2 = () => (          
    <Formik      
      onSubmit={(values, { setSubmitting }) => {
        // Общие функции
        const custom_alert = (message, color = "red") => {
            return window.Swal.fire({
                title: message,
                width: 400,
                height: 200,
                padding: "1em",
                color: color,
                background: "#fff url(/pictures/trees_phone.png)",
            });
        }

        

        setTimeout(() => {
        

        

        // Формирование нужного задания
        /*fetch('Шаблон задания на патрулирование.docx')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.arrayBuffer();
            })
            .then(data => {
                const zip = new window.PizZip(data);
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
                const zip = new window.PizZip(data);
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
                const zip = new window.PizZip(data);
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
                    const zip = new window.PizZip(data);
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
        }*/

               
   
        }, 400);
      }}
    >
      
    </Formik>
);

export default Document_generator2;