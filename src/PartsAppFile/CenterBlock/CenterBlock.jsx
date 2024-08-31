import PatrolReportGenerator from "../../Products/PatrolReportGenerator/PatrolReportGenerator";
// import CardLink from "./CardLink";

function CenterBlock() {  
    return (
        <div>
            <CardLink title_card="Отчёт по патрулированию" onClick={} />
            <CardLink title_card="Подсчёт кубатуры" />
            <PatrolReportGenerator />
        </div>
    );
}

export default CenterBlock;