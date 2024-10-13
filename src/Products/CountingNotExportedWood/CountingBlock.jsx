import { useState } from 'react';

const CountingBlock = ({ data }) => {
    const [val, setVal] = useState(0);

    const changeHandler = (e) => {
        setVal(e.target.value);
    }

    return (
        <li className='uk-flex uk-margin-small-bottom uk-container uk-flex uk-flex-middle' style={{borderBottomStyle: 'dotted', borderBottomWidth: 0.5, paddingBottom: 5}}>
            <span className='uk-margin-small-right'>
                {data.diameter}
            </span>
            <span className='uk-margin-small-right'>
                x
            </span>
            <span className='uk-margin-small-right'>
                <input 
                    type='number' 
                    className='uk-input'
                    onChange={changeHandler}
                />
            </span>
            <span className='uk-margin-small-right'>
                =
            </span>
            <span>
                {data.volume * val}
            </span>           
        </li>
    );
};

export default CountingBlock;