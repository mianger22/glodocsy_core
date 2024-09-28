import { useState } from "react";

const CubatureList = ({diameter, volume, handlerClick}) => {
    const [isClickedBtnAdd, setIsClickedBtnAdd] = useState(false);
    const [isClickedBtnDelete, setIsClickedBtnDelete] = useState(false);

    const handlerClickBtnAdd = () => {
        handlerClick(volume, diameter, 'add');
        setIsClickedBtnAdd(true);

        setTimeout(() => {
            setIsClickedBtnAdd(false);
        }, 700);
    }

    const handlerClickBtnDelete = () => {
        handlerClick(volume, diameter, 'delete');
        setIsClickedBtnDelete(true);

        setTimeout(() => {
            setIsClickedBtnDelete(false);
        }, 700);
    }

    return (
        <li className='uk-flex uk-margin-small-bottom uk-container uk-flex uk-flex-middle' style={{borderBottomStyle: 'dotted', borderBottomWidth: 0.5, paddingBottom: 5}}>
            <span className='uk-margin-small-right'>{diameter}</span>
            {
                isClickedBtnAdd 
                    ?  
                        <button 
                            onClick={handlerClickBtnAdd} 
                            className='uk-button uk-button-primary uk-button-small uk-margin-large-right' 
                        >
                            +
                        </button>
                    :  
                        <button 
                            onClick={handlerClickBtnAdd} 
                            className='uk-button uk-button-default uk-button-small uk-margin-large-right' 
                        >
                            +
                        </button>
            }
           
           {
                isClickedBtnDelete 
                    ?  
                        <button 
                            onClick={handlerClickBtnDelete} 
                            className='uk-button uk-button-primary uk-button-small' 
                        >
                            +
                        </button>
                    :  
                        <button 
                            onClick={handlerClickBtnDelete} 
                            className='uk-button uk-button-default uk-button-small' 
                        >
                            -
                        </button>
            }
        </li>
    )
}

export default CubatureList;