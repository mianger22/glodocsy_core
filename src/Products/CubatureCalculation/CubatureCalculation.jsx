import { useState } from "react";

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

            <h5>Ель</h5>
            <div className="uk-flex">
                <div className="uk-margin-small-right">0,029</div>
                <div className="uk-margin-small-right">8</div>
                <div className="uk-margin-small-right">
                    <button onClick={() => change_el_val(0.029)}>+</button>
                </div>
            </div>
            <hr />
            <div className="uk-flex">
                <div className="uk-margin-small-right">0,091</div>
                <div className="uk-margin-small-right">12</div>
                <div className="uk-margin-small-right">
                    <button onClick={() => change_el_val(0.091)}>+</button>
                </div>
            </div>
            <div>
                {inf}
                итог: {isEl}
                всего: {isKol}
            </div>
        </div>
    )
}

export default CubatureCalculation;