import { useState } from "react";
import CubatureCalculationBlock from "./CubatureCalculationBlock";

const CubatureCalculation = () => {
    const [isEl, setEl] = useState(0);
    const [isKol, setKol] = useState(0);
    const [inf, setInf] = useState('');

    const change_el_val = (val) => {
        setEl(prevIsEl => prevIsEl + val);
        setKol(prevIsKol => prevIsKol + 1);

        setInf('+ 1');
        setTimeout(()=>{
            setInf('');
        }, 1000);
    }

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
        }
    ]

    return (
        <div>
            <h1>Подсчёт кубатуры</h1>

            <CubatureCalculationBlock handlerClick={change_el_val} inf={inf} isEl={isEl} isKol={isKol} cubatureData={cubatureData[0]} />
        </div>
    )
}

export default CubatureCalculation;