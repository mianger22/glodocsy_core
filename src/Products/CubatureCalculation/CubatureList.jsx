const CubatureList = ({diameter, volume, handlerClick}) => {
    return (
        <li className='uk-flex uk-margin-small-bottom uk-container uk-flex uk-flex-middle'>
            <span className='uk-margin-small-right'>{diameter}</span>
            <button onClick={() => handlerClick(volume, diameter, 'add')} className='uk-button uk-button-default uk-button-small uk-margin-small-right'>+</button>
            <button onClick={() => handlerClick(volume, diameter, 'delete')} className='uk-button uk-button-default uk-button-small'>-</button>
        </li>
    )
}

export default CubatureList;