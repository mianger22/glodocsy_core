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
            
            <button type="submit" disabled={isSubmitting}>
                Создать документы
            </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Document_generator;