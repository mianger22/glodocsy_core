import ContentBlock from "./ComponentsHomePage/ContentBlock";
import ExtraBlock from "./ComponentsHomePage/ExtraBlock";

function HomePage() {
    return (
        <div className="uk-grid-match uk-child-width-expand@s uk-flex" uk-grid>
            <ExtraBlock />
            <ContentBlock />
            <ExtraBlock />
        </div>
    );
}
  
export default HomePage;