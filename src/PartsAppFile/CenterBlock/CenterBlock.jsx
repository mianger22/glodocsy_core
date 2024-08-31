import { useState } from "react";
import CardLink from "./CardLink";
import PatrolReportGenerator from "../../Products/PatrolReportGenerator/PatrolReportGenerator";
import CubatureCalculation from "../../Products/CubatureCalculation/CubatureCalculation";


function CenterBlock() {  
    const [is_show_patrol_report_generator, set_show_patrol_report_generator] = useState(false);
    const [is_show_cubature_calculation, set_show_cubature_calculation] = useState(false);

    const show_patrol_report_generator = () => {
        set_show_patrol_report_generator(true);
        set_show_cubature_calculation(false);
    }

    const show_cubature_calculation = () => {
        set_show_cubature_calculation(true);
        set_show_patrol_report_generator(false);
    }

    return (
        <div>
            {is_show_patrol_report_generator ? <PatrolReportGenerator /> : <CardLink title_card="Отчёт по патрулированию" click_handler={show_patrol_report_generator} />}
            {is_show_cubature_calculation ? <CubatureCalculation /> : <CardLink title_card="Подсчёт кубатуры" click_handler={show_cubature_calculation} />}
        </div>
    );
}

export default CenterBlock;