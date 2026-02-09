import { useState } from "react";
import * as data from '../../services/dummyData';

export default function GetStartedSection(){

    const [ getStartedTitle, setGetStartedTitle ] = useState(data.commonData.getStarted[0].title);
    const [ getStartedDescription, setGetStartedDescription ] = useState(data.commonData.getStarted[0].description);
    return(<>
    <section className="common_page_indvdl_section get_started_section">
        <div className="get_started_innr_section">
            <div className="container">
                <div className="get_started_capsule_box">
                    <div className="section_common_heading_section left_align mb-0 _invert_color">
                        <h2 className="section_heading_text">{getStartedTitle}</h2>
                        <p>{getStartedDescription}</p>
                    </div>
                    <div className="get_started_action_col">
                        <button className="common_button">Explore Our Products</button>
                        <button className="common_button invert">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>)
}