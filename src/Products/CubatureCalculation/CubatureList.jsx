const CubatureList = ({diameter, volume, handlerClick}) => {
    return (
        <li className='uk-flex uk-margin-small-bottom'>
            <a href='/#' className='uk-margin-small-right'>{diameter}</a>
            <button onClick={() => handlerClick(volume, diameter, 'add')} className='uk-margin-small-right'>+</button>
            <button onClick={() => handlerClick(volume, diameter, 'delete')}>-</button>
        </li>
    )
}

export default CubatureList;