import { useState } from 'react';

const CountingBlock = ({ data, setTotalStock, setTotalNumberTrees }) => {
    const [currentStock, setCurrentStock] = useState(0);

    const changeHandler = (e) => {
        const numberTreesEntered = e.target.value;
        const stock = (data.volume * numberTreesEntered).toFixed(3);
        
        setCurrentStock(stock);
        setTotalStock(prev => Number(+prev + stock));
        setTotalNumberTrees(prev => Number(+prev + numberTreesEntered));
    }

    return (
        <>
            <li className='uk-flex uk-margin-small-bottom uk-container uk-flex uk-flex-middle' style={{paddingBottom: 5}}>
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
                    {currentStock}
                </span>           
            </li>
            {
                data.prices && data.prices.map(el => 
                    <li 
                        className='uk-margin-small-bottom uk-container uk-flex uk-flex-middle' 
                        style={{borderBottomStyle: 'dotted', borderBottomWidth: 0.5, paddingBottom: 5}}
                    >
                        {el.breed} | {el.price} | <p className='uk-margin-small-left'>неустойка: <b>{((currentStock * el.price).toFixed(1)).replace('.', ',')} р</b></p>
                    </li>
                )
            }
        </>
    );
};

export default CountingBlock;