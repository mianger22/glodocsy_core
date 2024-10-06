import { useState } from "react";
import CardLink from "./CardLink";
import PatrolReportGenerator from "../Products/PatrolReportGenerator/PatrolReportGenerator";
import CubatureCalculation from "../Products/CubatureCalculation/CubatureCalculation";
import CountingNotExportedWood from "../Products/CountingNotExportedWood/CountingNotExportedWood";

function ContentBlock() {  
    const [is_show_patrol_report_generator, set_show_patrol_report_generator] = useState(undefined);
    const [is_show_cubature_calculation, set_show_cubature_calculation] = useState(undefined);
    const [is_show_counting_not_exported_wood, set_show_counting_not_exported_wood] = useState(undefined);

    const show_patrol_report_generator = () => {
        set_show_patrol_report_generator(true);
        set_show_cubature_calculation(false);
        set_show_counting_not_exported_wood(false);
    }

    const show_cubature_calculation = () => {
        set_show_cubature_calculation(true);
        set_show_patrol_report_generator(false);
        set_show_counting_not_exported_wood(false);
    }

    const show_counting_not_exported_wood = () => {
        set_show_counting_not_exported_wood(true);
        set_show_patrol_report_generator(false);
        set_show_cubature_calculation(false);
    }

    const reset_zero = () => {
        set_show_cubature_calculation(undefined);
        set_show_patrol_report_generator(undefined);

        window.location.reload();
    }

    return (
        <div className='uk-card uk-card-body'>
            {is_show_patrol_report_generator === undefined
                ? <CardLink title_card='Отчёт по патрулированию' click_handler={show_patrol_report_generator} />
                :  is_show_patrol_report_generator === true
                    ? <PatrolReportGenerator />
                    : ''}
            {is_show_cubature_calculation === undefined
                ? <CardLink title_card='Подсчёт кубатуры МН' click_handler={show_cubature_calculation} />
                : is_show_cubature_calculation === true
                    ? <CubatureCalculation />
                    : ''}
            {is_show_counting_not_exported_wood === undefined
                ? <CardLink title_card='Подсчёт кубатуры ЗО' click_handler={show_counting_not_exported_wood} />
                : is_show_counting_not_exported_wood === true
                    ? <CountingNotExportedWood />
                    : ''}

            {is_show_counting_not_exported_wood === undefined
                ? <CardLink title_card='Инвентаризация' click_handler={show_counting_not_exported_wood} />
                : is_show_counting_not_exported_wood === true
                    ? <CountingNotExportedWood />
                    : ''}

            {
                (is_show_patrol_report_generator !== undefined || 
                    is_show_cubature_calculation !== undefined || 
                    is_show_counting_not_exported_wood !== undefined)
                    && <h3><span className="uk-link-heading" style={{cursor: 'pointer'}} onClick={reset_zero}>Назад</span></h3>
            }
        </div>
    );
}

export default ContentBlock;