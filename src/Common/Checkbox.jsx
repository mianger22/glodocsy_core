import { Field } from 'formik';

const Checkbox = ({ name, label }) => {
  return (
    <div className="mb-4">
        <div className='uk-margin uk-grid-small uk-child-width-auto uk-grid'>
            <label>
                <Field type="checkbox" name={name} aria-label="Checkbox" className="uk-checkbox" /> {label}
            </label>
        </div>
    </div>
  );
};

export default Checkbox;