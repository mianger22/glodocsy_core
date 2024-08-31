import { useState } from "react";

const CubatureCalculation = () => {
    const [isEl, setEl] = useState(0);

    const change_el_val = (val) => {
        setEl(prevIsEl => prevIsEl + val);
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
                <div>

                </div>
            </div>
            <div>
                итог: {isEl}
            </div>
        </div>
    )
}

export default CubatureCalculation;