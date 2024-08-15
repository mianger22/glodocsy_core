import Document_generator from "../../Products/document_generator/Document_generator";
import CardLink from "./CardLink";

function CenterBlock() {  
    return (
        <div>
            {/* <CardLink title_card="Отчёт по патрулированию" /> */}
            {/* <CardLink title_card="Подсчёт кубатуры" /> */}
            <Document_generator />
        </div>
    );
}

export default CenterBlock;