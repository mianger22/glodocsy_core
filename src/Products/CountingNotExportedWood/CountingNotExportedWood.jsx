import { useState } from "react";
import CountingBlock from "./CountingBlock";

function CountingNotExportedWood() {
  const [totalStock, setTotalStock] = useState(0);
  const [totalNumberTrees, setTotalNumberTrees] = useState(0);
  const [inf, setInf] = useState({changed: '', status: '', diameter: undefined});
  // тут будет массив, в который будут заноситься измененные значения в виде объекта
  // и который будет отображаться в шапке

  // структура объекта
  // {changed: '', status: '', diameter: undefined}
  
  const first_ko = 3.14;
  const second_ko = 2;

  const pricesSmallTypeWood = [
    {id: 1, breed: 'сосна', price: 61.74},
    {id: 2, breed: 'ель', price: 55.44},
    {id: 3, breed: 'береза', price: 31.14},
    {id: 4, breed: 'ольха черная', price: 18.72},
    {id: 5, breed: 'осина, ольха серая', price: 6.84},
  ];

  const pricesAverageTypeWood = [
    {id: 1, breed: 'сосна', price: 122.94},
    {id: 2, breed: 'ель', price: 110.34},
    {id: 3, breed: 'береза', price: 61.74},
    {id: 4, breed: 'ольха черная', price: 36.72},
    {id: 5, breed: 'осина, ольха серая', price: 12.42},
  ];

  const pricesLargeTypeWood = [
    {id: 1, breed: 'сосна', price: 172.08},
    {id: 2, breed: 'ель', price: 155.16},
    {id: 3, breed: 'береза', price: 86.04},
    {id: 4, breed: 'ольха черная', price: 51.66},
    {id: 5, breed: 'осина, ольха серая', price: 16.38},
  ];

  const cubatureData = [
    {
        id: 1,
        length: '3 метра',
        cubatures: [
            {
              id: 1, diameter: 8, volume: 0.017, 
              prices: pricesSmallTypeWood
            },
            {
              id: 2, diameter: 12, volume: 0.038,
              prices: pricesSmallTypeWood
            },
            {
              id: 3, diameter: 16, volume: 0.069,
              prices: pricesAverageTypeWood
            },
            {
              id: 4, diameter: 20, volume: 0.107,
              prices: pricesAverageTypeWood
            },
            {
              id: 5, diameter: 24, volume: 0.157,
              prices: pricesAverageTypeWood
            },
            {
              id: 6, diameter: 28, volume: 0.22,
              prices: pricesLargeTypeWood
            },
            { 
              id: 7, diameter: 32, volume: 0.28,
              prices: pricesLargeTypeWood
            },
            {
              id: 8, diameter: 36, volume: 0.36,
              prices: pricesLargeTypeWood
            },
            { id: 9, diameter: 40, volume: 0.43,
              prices: pricesLargeTypeWood
            },
            {
              id: 10, diameter: 44, volume: 0.52,
              prices: pricesLargeTypeWood
            },
            {
              id: 11, diameter: 48, volume: 0.62,
              prices: pricesLargeTypeWood
            },
        ]
    },
    {
        id: 2,
        length: '4 метра',
        cubatures: [
            {
              id: 1, diameter: 8, volume: 0.026,
              prices: pricesSmallTypeWood
            },
            {
              id: 2, diameter: 12, volume: 0.053,
              prices: pricesSmallTypeWood
            },
            {
              id: 3, diameter: 16, volume: 0.095,
              prices: pricesAverageTypeWood
            },
            {
              id: 4, diameter: 20, volume: 0.147,
              prices: pricesAverageTypeWood
            },
            {
              id: 5, diameter: 24, volume: 0.21,
              prices: pricesAverageTypeWood
            },
            {
              id: 6, diameter: 28, volume: 0.29,
              prices: pricesLargeTypeWood
            },
            {
              id: 7, diameter: 32, volume: 0.38,
              prices: pricesLargeTypeWood
            },
            {
              id: 8, diameter: 36, volume: 0.48,
              prices: pricesLargeTypeWood
            },
            {
              id: 9, diameter: 40, volume: 0.58,
              prices: pricesLargeTypeWood
            },
            {
              id: 10, diameter: 44, volume: 0.70,
              prices: pricesLargeTypeWood
            },
            {
              id: 11, diameter: 48, volume: 0.84,
              prices: pricesLargeTypeWood
            },
        ]
    },
    {
        id: 3,
        length: '5 метров',
        cubatures: [
            {
              id: 1, diameter: 8, volume: 0.035,
              prices: pricesSmallTypeWood
            },
            {
              id: 2, diameter: 12, volume: 0.073,
              prices: pricesSmallTypeWood
            },
            {
              id: 3, diameter: 16, volume: 0.124,
              prices: pricesAverageTypeWood
            },
            {
              id: 4, diameter: 20, volume: 0.190,
              prices: pricesAverageTypeWood
            },
            {
              id: 5, diameter: 24, volume: 0.27,
              prices: pricesAverageTypeWood
            },
            {
              id: 6, diameter: 28, volume: 0.37,
              prices: pricesLargeTypeWood
            },
            {
              id: 7, diameter: 32, volume: 0.48,
              prices: pricesLargeTypeWood
            },
            {
              id: 8, diameter: 36, volume: 0.60,
              prices: pricesLargeTypeWood
            },
            {
              id: 9, diameter: 40, volume: 0.74,
              prices: pricesLargeTypeWood
            },
            {
              id: 10, diameter: 44, volume: 0.89,
              prices: pricesLargeTypeWood
            },
            {
              id: 11, diameter: 48, volume: 1.06,
              prices: pricesLargeTypeWood
            },
        ]
    },
    {
        id: 4,
        length: '6 метров',
        cubatures: [
            {
              id: 1, diameter: 8, volume: 0.045,
              prices: pricesSmallTypeWood
            },
            {
              id: 2, diameter: 12, volume: 0.093,
              prices: pricesSmallTypeWood
            },
            {
              id: 3, diameter: 16, volume: 0.155,
              prices: pricesAverageTypeWood
            },
            {
              id: 4, diameter: 20, volume: 0.23,
              prices: pricesAverageTypeWood
            },
            {
              id: 5, diameter: 24, volume: 0.33,
              prices: pricesAverageTypeWood
            },
            {
              id: 6, diameter: 28, volume: 0.45,
              prices: pricesLargeTypeWood
            },
            {
              id: 7, diameter: 32, volume: 0.59,
              prices: pricesLargeTypeWood
            },
            {
              id: 8, diameter: 36, volume: 0.74,
              prices: pricesLargeTypeWood
            },
            {
              id: 9, diameter: 40, volume: 0.90,
              prices: pricesLargeTypeWood
            },
            {
              id: 10, diameter: 44, volume: 1.09,
              prices: pricesLargeTypeWood
            },
            {
              id: 11, diameter: 48, volume: 1.30,
              prices: pricesLargeTypeWood
            },
        ]
    },  
  ]

  return (
    <div className="uk-container">
      {/* Фиксированная верхняя панель */}
      <div className="uk-card uk-card-default uk-margin-top uk-sticky uk-sticky-top" uk-sticky="top: 0; offset: 0">
        <div className="uk-card-body" style={{ height: '100%' }}>
          <div className='uk-margin-small-bottom'>
            <div className='uk-text-danger'> 
              <div>
                <a href="https://docs.cntd.ru/document/902044488" className="uk-text-danger">посл.изм: 6 марта 2024 года</a>
              </div>
              <div>
                <a href="https://docs.cntd.ru/document/1300402965" className="uk-text-danger">в 2025 коэффициент другой</a>
              </div>
              <div>
                х2 - согласно соглашению от 2013 года
              </div>
            </div>
            <div className='uk-text-success uk-margin-small-bottom'>первый коэффициент: {first_ko}, второй: {second_ko}</div>
            <a href="#3">3 метра</a> | <a href="#4">4 метра</a> | <a href="#5">5 метров</a> | <a href="#6">6 метров</a>
          </div>
          {/* <div>
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
                Общий запас: <span className='uk-badge'>{totalStock}</span>
            </div>
            <div>
                Общее число деревьев: <span className='uk-badge'>{totalNumberTrees}</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Контент страницы */}
      <div className="uk-grid" uk-grid>
        <div className="uk-width-1-1">
          <div 
            className="content-section" 
            style={{ height: '100%', padding: '20px' }}
          >
            <ul uk-accordion="collapsible: false">
                {
                    cubatureData.map(group => (
                        <li id={`${group.length.charAt(0)}`}>
                            <a className="uk-accordion-title uk-text-bold" href>{group.length}</a>
                            <div className="uk-accordion-content">
                                <ul uk-accordion="collapsible: false">
                                    {group.cubatures.map(element => (
                                      <CountingBlock 
                                        key={element.id} 
                                        data={element} 
                                        setTotalStock={setTotalStock}
                                        setTotalNumberTrees={setTotalNumberTrees}
                                        first_ko={first_ko}
                                        second_ko={second_ko}
                                      />
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))
                }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountingNotExportedWood;