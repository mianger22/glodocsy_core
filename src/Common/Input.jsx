import { Field } from "formik";
import { useEffect, useState } from "react";

const Input = ({label_name, field_name, placeholder, input_type, is_primary, handleChange, isFresh, setIsFresh}) => {
    const [isChangedInputValue, setIsChangedInputValue] = useState(false);

    useEffect(() => {
        if (isFresh) {
            setIsChangedInputValue(false);
        }
    }, [isFresh, isChangedInputValue])

    const handleChangeLocal = (e) => {
        handleChange(e);
        setIsChangedInputValue(true); 
        setIsFresh(false);
    }

    return (
        <div className="mb-4">
            <label className={`${is_primary && `uk-text-primary`}`} htmlFor={field_name}>{label_name}</label>

            <div className="uk-margin">
                <Field name={field_name}>
                    {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                    }) => (
                    <div>
                        <input 
                            type={input_type} 
                            placeholder={placeholder}
                            className={`${meta.error ? 'uk-input uk-form-danger' : isChangedInputValue ? 'uk-input uk-form-success' : 'uk-input'}`}
                            aria-label={field_name}
                            {...field}

                            onChange={handleChangeLocal}                       
                        />
                        {meta.touched && meta.error && <p className='uk-text-danger'>{meta.error}</p>}
                    </div>
                    )}
                </Field>
            </div>
        </div>
    )
}

export default Input;