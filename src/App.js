import CenterBlock from "./PartsAppFile/CenterBlock/CenterBlock";

function App() {
  return (
    <div className="uk-grid-match uk-child-width-expand@s uk-flex" uk-grid>
      <div className="uk-card uk-card-body"></div>
      <div className="uk-card uk-card-body">
        <CenterBlock />
      </div>
      <div className="uk-card uk-card-body"></div>
  </div>
  );
}

export default App;
