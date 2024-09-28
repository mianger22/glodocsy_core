import { useState } from "react";
import CubatureList from "../../Common/CubatureList";

function CountingNotExportedWood() {
  const [isEl, setEl] = useState(0);
  const [isKol, setKol] = useState(0);
  const [inf, setInf] = useState({changed: '', status: '', diameter: undefined});

  const cubatureData = [
    {
        id: 1,
        length: '3 метра',
        cubatures: [
            {id: 1, diameter: 8, volume: 0.017},
            {id: 2, diameter: 12, volume: 0.038},
            {id: 3, diameter: 16, volume: 0.069},
            {id: 4, diameter: 20, volume: 0.107},
            {id: 5, diameter: 24, volume: 0.157},
            {id: 6, diameter: 28, volume: 0.22},
            {id: 7, diameter: 32, volume: 0.28},
            {id: 8, diameter: 36, volume: 0.36},
            {id: 9, diameter: 40, volume: 0.43},
            {id: 10, diameter: 44, volume: 0.52},
            {id: 11, diameter: 48, volume: 0.62},
        ]
    },
    {
        id: 2,
        length: '4 метра',
        cubatures: [
            {id: 1, diameter: 8, volume: 0.026},
            {id: 2, diameter: 12, volume: 0.053},
            {id: 3, diameter: 16, volume: 0.095},
            {id: 4, diameter: 20, volume: 0.147},
            {id: 5, diameter: 24, volume: 0.21},
            {id: 6, diameter: 28, volume: 0.29},
            {id: 7, diameter: 32, volume: 0.38},
            {id: 8, diameter: 36, volume: 0.48},
            {id: 9, diameter: 40, volume: 0.58},
            {id: 10, diameter: 44, volume: 0.70},
            {id: 11, diameter: 48, volume: 0.84},
        ]
    },
    {
        id: 3,
        length: '5 метров',
        cubatures: [
            {id: 1, diameter: 8, volume: 0.035},
            {id: 2, diameter: 12, volume: 0.073},
            {id: 3, diameter: 16, volume: 0.124},
            {id: 4, diameter: 20, volume: 0.190},
            {id: 5, diameter: 24, volume: 0.27},
            {id: 6, diameter: 28, volume: 0.37},
            {id: 7, diameter: 32, volume: 0.48},
            {id: 8, diameter: 36, volume: 0.60},
            {id: 9, diameter: 40, volume: 0.74},
            {id: 10, diameter: 44, volume: 0.89},
            {id: 11, diameter: 48, volume: 1.06},
        ]
    },
    {
        id: 4,
        length: '6 метров',
        cubatures: [
            {id: 1, diameter: 8, volume: 0.045},
            {id: 2, diameter: 12, volume: 0.093},
            {id: 3, diameter: 16, volume: 0.155},
            {id: 4, diameter: 20, volume: 0.23},
            {id: 5, diameter: 24, volume: 0.33},
            {id: 6, diameter: 28, volume: 0.45},
            {id: 7, diameter: 32, volume: 0.59},
            {id: 8, diameter: 36, volume: 0.74},
            {id: 9, diameter: 40, volume: 0.90},
            {id: 10, diameter: 44, volume: 1.09},
            {id: 11, diameter: 48, volume: 1.30},
        ]
    },  
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
    <div className="uk-container">
      {/* Фиксированная верхняя панель */}
      <div className="uk-card uk-card-default uk-margin-top uk-sticky uk-sticky-top" uk-sticky="top: 0; offset: 0">
        <div className="uk-card-body" style={{ height: '100%' }}>
          <div className='uk-margin-small-bottom'>
            <h3>Подсчёт суммы объёмов стволов не вывезенной древесины, м3</h3>
          </div>
          <div>
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
                Итого: <span className='uk-badge'>{isEl}</span>
            </div>
            <div>
                Всего: <span className='uk-badge'>{isKol}</span>
            </div>
          </div>
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
                        <li>
                            <a className="uk-accordion-title uk-text-bold" href>{group.length}</a>
                            <div className="uk-accordion-content">
                                <ul uk-accordion="collapsible: false">
                                    {group.cubatures.map(element => (
                                        <CubatureList 
                                            key={element.id} 
                                            diameter={element.diameter} 
                                            volume={element.volume} 
                                            handlerClick={change_el_val} 
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