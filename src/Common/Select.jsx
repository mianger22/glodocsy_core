import { Field } from "formik";
import { useEffect, useState } from "react";

const Select = ({label_name, field_name, options_list, is_primary, handleChange, isFresh, setIsFresh}) => {
    const [isChangedSelectValue, setIsChangedSelectValue] = useState(false);

    useEffect(() => {
        if (isFresh) {
            setIsChangedSelectValue(false);
        }
    }, [isFresh, isChangedSelectValue])

    const handleChangeLocal = (e) => {
        handleChange(e);
        setIsChangedSelectValue(true); 
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
                        <select 
                            className={`${meta.error ? 'uk-select uk-form-danger' : isChangedSelectValue ? 'uk-select uk-form-success' : 'uk-select'}`}
                            aria-label="Select"
                            {...field}
                            onChange={handleChangeLocal}    
                        >
                            {options_list.map(option => (
                                <option 
                                    key={option.id}
                                    value={option.value}  
                                    disabled={option.disabled}
                                >
                                    {option.name_option}
                                </option>
                            ))}
                        </select>

                        {meta.touched && meta.error && <p className='uk-text-danger'>{meta.error}</p>}
                    </div>
                    )}
                </Field>
            </div>
        </div> 
    )
}

export default Select