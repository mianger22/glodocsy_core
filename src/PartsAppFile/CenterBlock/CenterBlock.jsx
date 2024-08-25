import DocumentGenerator from "../../Products/document_generator/Document_generator";
// import CardLink from "./CardLink";

function CenterBlock() {  
    return (
        <div>
            {/* <CardLink title_card="Отчёт по патрулированию" /> */}
            {/* <CardLink title_card="Подсчёт кубатуры" /> */}
            <DocumentGenerator />
        </div>
    );
}

export default CenterBlock;