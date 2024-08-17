import CenterBlock from "./PartsAppFile/CenterBlock/CenterBlock";

function App() {
  return (
    <div className="uk-grid-match uk-child-width-expand@s uk-flex" uk-grid>
      <div>
        <div className="uk-card uk-card-body"></div>
      </div>
      <div>
        <div className="uk-card uk-card-body">
          <CenterBlock />
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-body"></div>
      </div>
  </div>
  );
}

export default App;
