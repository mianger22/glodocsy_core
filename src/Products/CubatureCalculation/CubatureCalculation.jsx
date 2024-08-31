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
            
            <div>
                {inf}
                итог: {isEl}
                всего: {isKol}
            </div>

            <div class="uk-inline">

            <button class="uk-button uk-button-default" type="button" uk-toggle="target: #dropdown-1">Выберите опцию</button>
            <div id="dropdown-1" uk-dropdown="mode: click">
                <ul class="uk-nav uk-dropdown-nav">
                    <li className='uk-flex'>
                        <a href='' className='uk-margin-small-right'>8</a>
                        <button onClick={() => change_el_val(0.029)}>+</button>
                    </li>
                    <li className='uk-flex'>
                        <a href='' className='uk-margin-small-right'>12</a>
                        <button onClick={() => change_el_val(0.091)}>+</button>
                    </li>
                    <li className='uk-flex'>
                        <a href='' className='uk-margin-small-right'>16</a>
                        <button onClick={() => change_el_val(0.19)}>+</button>
                    </li>
                    <li className='uk-flex'>
                        <a href='' className='uk-margin-small-right'>20</a>
                        <button onClick={() => change_el_val(0.33)}>+</button>
                    </li>
                    <li className='uk-flex'>
                        <a href='' className='uk-margin-small-right'>24</a>
                        <button onClick={() => change_el_val(0.50)}>+</button>
                    </li>
                    <li className='uk-flex'>
                        <a href='' className='uk-margin-small-right'>28</a>
                        <button onClick={() => change_el_val(0.71)}>+</button>
                    </li>
                </ul>
            </div>
        </div>


        </div>
    )
}

export default CubatureCalculation;