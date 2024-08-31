import { useState } from "react";
import CubatureList from "./CubatureList";

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

    return (
        <div className='uk-margin-small-bottom'>
            <h1>Подсчёт кубатуры</h1>

            <div className="uk-inline uk-margin-small-bottom">
                <button className="uk-button uk-button-default" type="button" uk-toggle="target: #dropdown-1">Ель - 4</button>
                <div id="dropdown-1" uk-dropdown="mode: click">
                    <ul className="uk-nav uk-dropdown-nav">
                        <CubatureList diameter={8} volume={0.029} handlerClick={change_el_val} />
                        <CubatureList diameter={12} volume={0.091} handlerClick={change_el_val} />
                        <CubatureList diameter={16} volume={0.19} handlerClick={change_el_val} />
                        <CubatureList diameter={20} volume={0.33} handlerClick={change_el_val} />
                        <CubatureList diameter={24} volume={0.50} handlerClick={change_el_val} />
                        <CubatureList diameter={28} volume={0.71} handlerClick={change_el_val} />
                        <CubatureList diameter={32} volume={0.96} handlerClick={change_el_val} />
                        <CubatureList diameter={36} volume={1.25} handlerClick={change_el_val} />
                        <CubatureList diameter={40} volume={1.74} handlerClick={change_el_val} />
                        <CubatureList diameter={44} volume={1.91} handlerClick={change_el_val} />
                        <CubatureList diameter={48} volume={2.31} handlerClick={change_el_val} />
                        <CubatureList diameter={52} volume={2.74} handlerClick={change_el_val} />
                        <CubatureList diameter={56} volume={3.19} handlerClick={change_el_val} />
                    </ul>
                </div>
            </div>

            <div>
                <div className='uk-text-danger'>
                    {inf}
                </div>
                <div>
                    Итог: <span className="uk-badge">{isEl}</span>
                </div>
                <div>
                    Всего: <span className="uk-badge">{isKol}</span>
                </div>
            </div>
        </div>
    )
}

export default CubatureCalculation;