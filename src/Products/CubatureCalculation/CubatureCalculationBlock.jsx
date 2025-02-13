import CubatureList from "./CubatureList";

const CubatureCalculationBlock = ({handlerClick, cubatureData, isHistory}) => {
    return (
        <li>
            <a className="uk-accordion-title" href>{cubatureData.breed} - {cubatureData.category}</a>
            <div className="uk-accordion-content">
                <ul uk-accordion="collapsible: false">
                    {cubatureData.cubatures.map(el => 
                        <CubatureList 
                            key={el.id} 
                            breed={cubatureData.breed}
                            diameter={el.diameter} 
                            volume={el.volume} 
                            handlerClick={handlerClick} 
                            isHistory={isHistory}
                            category={cubatureData.category}
                        />
                    )}
                </ul>
            </div>
        </li>
    )
}

export default CubatureCalculationBlock;