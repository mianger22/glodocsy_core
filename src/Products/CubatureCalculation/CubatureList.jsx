import { useState } from "react";

const CubatureList = ({breed, diameter, volume, handlerClick, isEl}) => {
    const [isClickedBtnAdd, setIsClickedBtnAdd] = useState(false);
    const [isClickedBtnDelete, setIsClickedBtnDelete] = useState(false);

    const handlerClickBtnAdd = () => {
        handlerClick(breed, volume, diameter, 'add');
        setIsClickedBtnAdd(true);

        setTimeout(() => {
            setIsClickedBtnAdd(false);
        }, 700);
    }

    const handlerClickBtnDelete = () => {
        handlerClick(breed, volume, diameter, 'delete');
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
                    
            {isEl > 0 && 
                <button 
                    onClick={handlerClickBtnDelete} 
                    className={`uk-button ${isClickedBtnDelete ? `uk-button-primary` : `uk-button-default`} uk-button-small`} 
                >
                    -
                </button>
            }
        </li>
    )
}

export default CubatureList;