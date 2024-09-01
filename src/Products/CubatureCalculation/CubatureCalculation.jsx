import { useState } from "react";
import CubatureCalculationBlock from "./CubatureCalculationBlock";

const CubatureCalculation = () => {
    const [isEl, setEl] = useState(0);
    const [isKol, setKol] = useState(0);
    const [inf, setInf] = useState({changed: '', status: '', diameter: undefined});

    const cubatureData = [
        {
            id: 1,
            breed: 'Ель',
            category: 4,
            cubatures: [
                {id: 1, diameter: 8, volume: 0.029},
                {id: 2, diameter: 12, volume: 0.091},
                {id: 3, diameter: 16, volume: 0.19},
                {id: 4, diameter: 20, volume: 0.33},
                {id: 5, diameter: 24, volume: 0.50},
                {id: 6, diameter: 28, volume: 0.71},
                {id: 7, diameter: 32, volume: 0.96},
                {id: 8, diameter: 36, volume: 1.25},
                {id: 9, diameter: 40, volume: 1.74},
                {id: 10, diameter: 44, volume: 1.91},
                {id: 11, diameter: 48, volume: 2.31},
                {id: 12, diameter: 52, volume: 2.74},
                {id: 13, diameter: 56, volume: 3.19},
            ]
        },
        {
            id: 2,
            breed: 'Сосна',
            category: 4,
            cubatures: [
                {id: 1, diameter: 8, volume: 0.037},
                {id: 2, diameter: 12, volume: 0.098},
                {id: 3, diameter: 16, volume: 0.19},
                {id: 4, diameter: 20, volume: 0.32},
                {id: 5, diameter: 24, volume: 0.48},
                {id: 6, diameter: 28, volume: 0.68},
                {id: 7, diameter: 32, volume: 0.90},
                {id: 8, diameter: 36, volume: 1.16},
                {id: 9, diameter: 40, volume: 1.45},
                {id: 10, diameter: 44, volume: 1.77},
                {id: 11, diameter: 48, volume: 2.14},
            ]
        },
        {
            id: 3,
            breed: 'Берёза',
            category: 4,
            cubatures: [
                {id: 1, diameter: 8, volume: 0.030},
                {id: 2, diameter: 12, volume: 0.090},
                {id: 3, diameter: 16, volume: 0.18},
                {id: 4, diameter: 20, volume: 0.31},
                {id: 5, diameter: 24, volume: 0.49},
                {id: 6, diameter: 28, volume: 0.68},
                {id: 7, diameter: 32, volume: 0.91},
                {id: 8, diameter: 36, volume: 1.18},
                {id: 9, diameter: 40, volume: 1.48},
                {id: 10, diameter: 44, volume: 1.81},
                {id: 11, diameter: 48, volume: 2.13},
            ]
        },
        {
            id: 4,
            breed: 'Осина',
            category: 4,
            cubatures: [
                {id: 1, diameter: 8, volume: 0.035},
                {id: 2, diameter: 12, volume: 0.096},
                {id: 3, diameter: 16, volume: 0.19},
                {id: 4, diameter: 20, volume: 0.31},
                {id: 5, diameter: 24, volume: 0.47},
                {id: 6, diameter: 28, volume: 0.67},
                {id: 7, diameter: 32, volume: 0.89},
                {id: 8, diameter: 36, volume: 1.16},
                {id: 9, diameter: 40, volume: 1.45},
                {id: 10, diameter: 44, volume: 1.78},
                {id: 11, diameter: 48, volume: 2.09},
            ]
        }
    ]

    const change_el_val = (volume, diameter, action) => {
        if (action === 'add') {
            setInf({changed: '', status: '', diameter: undefined});

            setEl(prevIsEl => prevIsEl + volume);
            setKol(prevIsKol => prevIsKol + 1);

            setInf({changed: '+ 1', status: 'success', diameter: diameter});
        } else if (action === 'delete') {
            setInf({changed: '', status: '', diameter: undefined});

            setEl(prevIsEl => prevIsEl - volume);
            setKol(prevIsKol => prevIsKol - 1);

            setInf({changed: '- 1', status: 'danger', diameter: diameter});
        }
    }

    return (
        <div>
            <div className='uk-margin-medium-bottom'>
                <h1>Подсчёт кубатуры</h1>
            </div>
            
            <div className='uk-margin-medium-bottom'>
                <div className='uk-margin-small-bottom'>
                    Статус:
                    <div>
                        {
                            inf.changed === '' 
                                ? <span className='uk-text-secondary'> в процессе</span> 
                                : <>
                                    <span className={`uk-text-${inf.status} uk-text-bold`}>{inf.changed}, </span>
                                    диаметр: <span className={`uk-text-${inf.status} uk-text-bold`}>{inf.diameter}</span>
                                </>
                        }
                    </div> 
                </div>
                <div>
                    Итог: <span className='uk-badge'>{isEl}</span>
                </div>
                <div>
                    Всего: <span className='uk-badge'>{isKol}</span>
                </div>
            </div>

            <div>
                <CubatureCalculationBlock handlerClick={change_el_val} cubatureData={cubatureData[0]} cubatureDataId={1} />
                <CubatureCalculationBlock handlerClick={change_el_val} cubatureData={cubatureData[1]} cubatureDataId={2} />
                <CubatureCalculationBlock handlerClick={change_el_val} cubatureData={cubatureData[2]} cubatureDataId={3} />
                <CubatureCalculationBlock handlerClick={change_el_val} cubatureData={cubatureData[3]} cubatureDataId={4} />
            </div>
        </div>
    )
}

export default CubatureCalculation;