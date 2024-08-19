import { Formik } from 'formik';

const Document_generator = () => (          
    <Formik
      initialValues={{ Patrol_task_number: '', Date_issue_task: '', Patrol_date: '', 
        Patrol_route_number: '', What_date_was_approved: '', Year_patrol: '', Who_issued_patrol: '', 
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
        } else if (!/^\d{2} \d{2}$/i.test(values.Time_assignment_issue)) {
            errors.Time_assignment_issue = "Время выдачи задания должно быть вида 12 30"
        }

        if (!values.Date_assignment_issue) {
            errors.Date_assignment_issue = 'Заполните поле';
        }

        if (!values.Number_patrol_act) {
            errors.Number_patrol_act = 'Заполните поле';
        } else if (!/^\d{1,4}$/i.test(values.Number_patrol_act)) {
            errors.Patrol_task_number = 'Номер акта должен быть не более 4 цифр';
        }

        if (!values.Date_patrol_act) {
            errors.Date_patrol_act = 'Заполните поле';
        }

        return errors;

        // } else if (validate_getted_time(Time_assignment_issue) === false) {
        //     custom_alert("Время выдачи задания должно быть корректным"); 
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
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
                <label className="uk-text-primary" for="Patrol_task_number">Номер задания</label>

                <div className="uk-margin">
                    <input 
                        className="uk-input" 
                        type="number" 
                        placeholder="185" 
                        aria-label="Patrol_task_number"
                        name="Patrol_task_number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Patrol_task_number}
                    />
                </div>
                <div className='uk-text-danger'>{errors.Patrol_task_number && touched.Patrol_task_number && errors.Patrol_task_number}</div>
            </div>
            <div className="mb-4">
                <label for="Date_issue_task">От какого числа</label>

                <div className="uk-margin">
                    <input 
                        type="date" 
                        className='uk-input'
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
                <label for="Patrol_date">Дата патрулирования</label>

                <div className="uk-margin">
                    <input 
                        type="date" 
                        className='uk-input'
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
                <label className="uk-text-primary" for="Patrol_route_number">Номер маршрута патрулирования</label>

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
                <label for="What_date_was_approved">Какого числа утверждён</label>

                <div className="uk-margin">
                    <input 
                        className="uk-input" 
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
                <label for="Year_patrol">Год патрулирования</label>

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
                <label for="Who_issued_patrol">Кто выдал задание</label>

                <div className="uk-margin">
                    <select className="uk-select" aria-label="Select" id="Person_issued_task" name="Person_issued_task">
                        <option value='директор ГОКУ "Новгородское лесничество" Иванов К.В.'>Директор</option>
                        <option value='заместитель директора ГОКУ "Новгородское лесничество" Орехова И.Н.'>Заместитель</option>
                    </select>
                </div>
                <div className='uk-text-danger'>{errors.Person_issued_task && touched.Person_issued_task && errors.Person_issued_task}</div>
            </div>    
            <div className="mb-4">
                <label for="Who_is_patrolling">Старший патрульной группы</label>

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
                <label for="Who_am_I_patrolling_with">С кем патрулирую</label>

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
                <label className="uk-text-primary" for="Time_assignment_issue">Время выдачи задания</label>

                <div className="uk-margin">
                    <input 
                        className="uk-input date_selection" 
                        type="number" 
                        placeholder="12 30" 
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
                <label for="Date_assignment_issue">Дата выдачи задания</label>

                <div className="uk-margin">
                    <input 
                        type="date" 
                        className='uk-input'
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
                <label className="uk-text-primary" for="Number_patrol_act">Номер акта о патрулировании</label>
                
                <div className="uk-margin">
                    <input 
                        className="uk-input" 
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
                <label for="Date_patrol_act">Дата акта о патрулировании</label>
                
                <div className="uk-margin">
                    <input 
                        type="date" 
                        className='uk-input'
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
                <label for="Object_leaflet">На что наклеено</label>
                
                <div className="uk-margin">
                    <select className="uk-select" aria-label="Select" name="Object_leaflet">
                        <option value='автобусная остановка'>Остановка</option>
                        <option value='доска объявлений'>Доска объявлений</option>
                    </select>
                </div>
                <div className='uk-text-danger'>{errors.Object_leaflet && touched.Object_leaflet && errors.Object_leaflet}</div>
            </div>
            <div className="mb-4">
                <label for="Village_leaflet">Деревня, в которой наклеено</label>
                
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
                <label for="Number_informed_people">Сколько человек проинформировано</label>
                
                <div className="uk-margin">
                    <input 
                        className="uk-input" 
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
                <label for="Village_informed_people">Деревня, в которой проинформированы люди</label>
                
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
                <label for="Patrol_car">Машина патрулирования</label>
                
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

            <p uk-margin>
                <button type="submit" disabled={isSubmitting} className="uk-button uk-button-primary uk-button-large">
                    Создать документы
                </button>
            </p>
        </form>
      )}
    </Formik>
);

export default Document_generator;