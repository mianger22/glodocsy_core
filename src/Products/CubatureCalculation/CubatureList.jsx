const CubatureList = ({diameter, volume, handlerClick}) => {
    return (
        <li className='uk-flex uk-margin-small-bottom'>
            <a href='/#' className='uk-margin-small-right'>{diameter}</a>
            <button onClick={() => handlerClick(volume, 'add')} className='uk-margin-small-right'>+</button>
            <button onClick={() => handlerClick(volume, 'delete')}>-</button>
        </li>
    )
}

export default CubatureList;