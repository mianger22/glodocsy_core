const CubatureList = ({diameter, volume, handlerClick}) => {
    return (
        <li className='uk-flex uk-margin-small-bottom'>
            <a href='' className='uk-margin-small-right'>{diameter}</a>
            <button onClick={() => handlerClick(volume)}>+</button>
        </li>
    )
}

export default CubatureList;