import { useState } from "react";

const CubatureList = ({breed, diameter, volume, handlerClick, isHistory, category}) => {
    const [isClickedBtnAdd, setIsClickedBtnAdd] = useState(false);
    const [isClickedBtnDelete, setIsClickedBtnDelete] = useState(false);

    const handlerClickBtnAdd = () => {
        handlerClick(breed, volume, diameter, 'add', category);
        setIsClickedBtnAdd(true);

        setTimeout(() => {
            setIsClickedBtnAdd(false);
        }, 700);
    }

    const handlerClickBtnDelete = () => {
        handlerClick(breed, volume, diameter, 'delete', category);
        setIsClickedBtnDelete(true);

        setTimeout(() => {
            setIsClickedBtnDelete(false);
        }, 700);
    }

    return (
        <li 
            className='uk-flex uk-margin-small-bottom uk-container uk-flex uk-flex-middle' 
            style={{borderBottomStyle: 'dotted', borderBottomWidth: 0.5, paddingBottom: 5}}
        >
            <span className='uk-margin-small-right'>{diameter}</span>
              
            <button 
                onClick={handlerClickBtnAdd} 
                className={`uk-button ${isClickedBtnAdd ? `uk-button-primary` : `uk-button-default`} uk-button-small uk-margin-large-right`} 
            >
                +
            </button>

            {isHistory.map((breed_group, index_breed_group) => (
                <div key={index_breed_group}>
                    {breed_group.data.map((breed_group_data, index_breed_group_data) => (
                        <div key={index_breed_group_data}>{breed_group_data.diameter === diameter && 
                            <button 
                                onClick={handlerClickBtnDelete} 
                                className={`uk-button ${isClickedBtnDelete ? `uk-button-primary` : `uk-button-default`} uk-button-small`} 
                            >
                                -
                            </button>
                        }</div>
                    ))}
                </div>
            ))}
        </li>
    )
}

export default CubatureList;