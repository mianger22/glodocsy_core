import CenterBlock from "./PartsAppFile/CenterBlock/CenterBlock";

function App() {
  return (
    <div class="uk-grid-match uk-child-width-expand@s uk-text-center uk-flex" uk-grid>
      <div>
        <div class="uk-card uk-card-default uk-card-body"></div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <CenterBlock />
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body"></div>
      </div>
  </div>
  );
}

export default App;
