import { Formik } from 'formik';

const Document_generator = () => (
  <div>
    <div className="form-title text-indigo-600 text-sm mt-4 mb-4"><ins>Задание</ins></div>
                
    <Formik
      initialValues={{ Patrol_task_number: '', val2: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
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
            <div className="mb-4">
                <label className="input-label" for="Patrol_task_number" style={{color: "rgb(167, 150, 0);"}}>Номер задания</label>

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
                {errors.Patrol_task_number && touched.Patrol_task_number && errors.Patrol_task_number}
            </div>
            <div className="mb-4">
                <label className="input-label" for="Date_issue_task">От какого числа</label>

                <div className="uk-margin">
                    <input 
                        className="uk-input date_selection" 
                        type="text" 
                        placeholder="«10» июня 2024" 
                        aria-label="Date_issue_task"
                        name="Date_issue_task"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Date_issue_task}
                    />
                </div>
                {errors.Date_issue_task && touched.Date_issue_task && errors.Date_issue_task}
            </div>
            <div className="mb-4">
                <label className="input-label" for="Patrol_date">Дата патрулирования</label>

                <div className="uk-margin">
                    <input 
                        className="uk-input date_selection" 
                        type="text" 
                        placeholder="«15» июня 2024" 
                        aria-label="Patrol_date"
                        name="Patrol_date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Patrol_date}
                    />
                </div>
                {errors.Patrol_date && touched.Patrol_date && errors.Patrol_date}
            </div>
            <div className="mb-4">
                <label className="input-label" for="Patrol_route_number" style={{color: "rgb(167, 150, 0);"}}>Номер маршрута патрулирования</label>

                <div className="uk-margin">
                    <select id="Patrol_route_number" name="Patrol_route_number">
                        <option disabled selected>
                            
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
                {errors.Patrol_route_number && touched.Patrol_route_number && errors.Patrol_route_number}
            </div>   
            <div className="mb-4">
                <label className="input-label" for="What_date_was_approved">Какого числа утверждён</label>

                <div className="uk-margin">
                    <input 
                        className="uk-input date_selection" 
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
                {errors.What_date_was_approved && touched.What_date_was_approved && errors.What_date_was_approved}
            </div>  
            <div className="mb-4 flex flex-col space-y-1">
                <label className="input-label" for="Year_patrol">Год патрулирования</label>

                <div className="uk-margin">
                    <select id="Year_patrol" name="Year_patrol">
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select>
                </div>
                {errors.Year_patrol && touched.Year_patrol && errors.Year_patrol}
            </div>  
            <div className="mb-4 flex flex-col space-y-1">
                <label className="input-label" for="Who_issued_patrol">Кто выдал задание</label>

                <div className="uk-margin">
                    <select id="Person_issued_task" name="Person_issued_task">
                        <option value='директор ГОКУ "Новгородское лесничество" Иванов К.В.'>Директор</option>
                        <option value='заместитель директора ГОКУ "Новгородское лесничество" Орехова И.Н.'>Заместитель</option>
                    </select>
                </div>
                {errors.Person_issued_task && touched.Person_issued_task && errors.Person_issued_task}
            </div>    
            <div className="mb-4">
                <label className="input-label" for="Who_is_patrolling">Старший патрульной группы</label>

                <div className="uk-margin">
                    <select id="Full_name_senior_patroller" name="Full_name_senior_patroller">
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
                {errors.Full_name_senior_patroller && touched.Full_name_senior_patroller && errors.Full_name_senior_patroller}
            </div>
            <div className="mb-4">
                <label className="input-label" for="Who_am_I_patrolling_with">С кем патрулирую</label>

                <div className="uk-margin">
                    <select id="Full_name_junior_patroller" name="Full_name_junior_patroller">
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
                {errors.Full_name_junior_patroller && touched.Full_name_junior_patroller && errors.Full_name_junior_patroller}
            </div> 
            <div className="mb-4 flex flex-col space-y-1">
                <label className="input-label" for="Time_assignment_issue" style={{color: "rgb(167, 150, 0);"}}>Время выдачи задания</label>

                <div className="uk-margin">
                    <input 
                        className="uk-input date_selection" 
                        type="text" 
                        placeholder="12 30" 
                        aria-label="Time_assignment_issue"
                        name="Time_assignment_issue"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Time_assignment_issue}
                    />
                </div>
                {errors.Time_assignment_issue && touched.Time_assignment_issue && errors.Time_assignment_issue}
            </div> 
            <div className="mb-4 flex flex-col space-y-1">
                <label className="input-label" for="Date_assignment_issue">Дата выдачи задания</label>

                <div className="uk-margin">
                    <input 
                        className="uk-input date_selection" 
                        type="text" 
                        placeholder="«10» июня 2024" 
                        aria-label="Date_assignment_issue"
                        name="Date_assignment_issue"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Date_assignment_issue}
                    />
                </div>
                {errors.Date_assignment_issue && touched.Date_assignment_issue && errors.Date_assignment_issue}
            </div>
            <div className="mb-4">
                <div className="uk-margin">
                    <input 
                        className="uk-input date_selection" 
                        type="checkbox" 
                        placeholder="«10» июня 2024" 
                        aria-label="Additional_order"
                        name="Additional_order"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Additional_order}
                    />
                </div> Дополнительный приказ
                {errors.Additional_order && touched.Additional_order && errors.Additional_order}
            </div>

            {/* ---------------------------------------------------------------------------------------------------- */}
            
            <div class="form-title text-indigo-600 text-sm mt-4 mb-4"><ins>Акт</ins></div>

            <div className="mb-4">
                <label className="input-label" for="Number_patrol_act" style={{color: "rgb(167, 150, 0);"}}>Номер акта о патрулировании</label>
                
                <div className="uk-margin">
                    <input 
                        className="uk-input date_selection" 
                        type="number" 
                        placeholder="105" 
                        aria-label="Number_patrol_act"
                        name="Number_patrol_act"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Number_patrol_act}
                    />
                </div>
                {errors.Number_patrol_act && touched.Number_patrol_act && errors.Number_patrol_act}
            </div>
            <div className="mb-4">
                <label className="input-label" for="Date_patrol_act">Дата акта о патрулировании</label>
                
                <div className="uk-margin">
                    <input 
                        className="uk-input date_selection" 
                        type="text" 
                        placeholder="«03» июня 2024" 
                        aria-label="Date_patrol_act"
                        name="Date_patrol_act"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Date_patrol_act}
                    />
                </div>
                {errors.Date_patrol_act && touched.Date_patrol_act && errors.Date_patrol_act}
            </div>
            <div className="mb-4">
                <label className="input-label" for="Object_leaflet">На что наклеено</label>
                
                <div className="uk-margin">
                    <select id="Object_leaflet" name="Object_leaflet">
                        <option value='автобусная остановка'>Остановка</option>
                        <option value='доска объявлений'>Доска объявлений</option>
                    </select>
                </div>
                {errors.Object_leaflet && touched.Object_leaflet && errors.Object_leaflet}
            </div>

            <button type="submit" disabled={isSubmitting}>
                Создать документы
            </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Document_generator;