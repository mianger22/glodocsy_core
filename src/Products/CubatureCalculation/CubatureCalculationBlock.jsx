import CubatureList from "./CubatureList";

const CubatureCalculationBlock = ({handlerClick, cubatureData}) => {
    return (
        <div className='uk-margin-small-bottom'>
            <div className="uk-inline uk-margin-small-bottom">
                <button className="uk-button uk-button-default" type="button" uk-toggle="target: #dropdown-1">{cubatureData.breed} - {cubatureData.category}</button>
                <div id="dropdown-1" uk-dropdown="mode: click">
                    <ul className="uk-nav uk-dropdown-nav">
                        {cubatureData.cubatures.map(el => 
                            <CubatureList 
                                key={el.id} 
                                diameter={el.diameter} 
                                volume={el.volume} 
                                handlerClick={handlerClick} 
                            />)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CubatureCalculationBlock;