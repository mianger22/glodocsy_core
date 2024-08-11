function App() {
  const sender = () => {
    alert("success");
  }

  return (
    <div class="uk-child-width-expand@s uk-text-center" uk-grid>
      <div>
          <div class="uk-card uk-card-default uk-card-body"></div>
      </div>
      <div>
          <div class="uk-card uk-card-default uk-card-body">
            <div class="uk-margin">
              <input class="uk-input uk-form-width-medium uk-form-large" type="text" placeholder="Large" aria-label="Large" />
            </div>
            <button class="uk-button uk-button-default" onClick={sender}>Send</button>
          </div>
      </div>
      <div>
          <div class="uk-card uk-card-default uk-card-body"></div>
      </div>
    </div>
  );
}

export default App;
