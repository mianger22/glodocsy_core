import { Formik } from 'formik';

const Document_generator = () => (
  <div>
    <Formik
      initialValues={{ val1: '', val2: '' }}
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
            <div className="uk-margin">
                <input 
                    className="uk-input" 
                    type="text" 
                    placeholder="val1" 
                    aria-label="Input"
                    name="val1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.val1}
                />
            </div>
            {errors.val1 && touched.val1 && errors.val1}
            <div className="uk-margin">
                <input 
                    className="uk-input" 
                    type="text" 
                    placeholder="val2" 
                    aria-label="val2"
                    name="val2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.val2}
                />
            </div>
            {errors.val2 && touched.val2 && errors.val2}
            
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Document_generator;