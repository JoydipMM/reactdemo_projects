import { useState } from "react";
import * as data from '../../services/dummyData';
import { Link } from "react-router-dom";

export default function AboutWideSection() {
    const [aboutTitle, setAboutTitle] = useState(data.aboutData.about.title);
    const [aboutDescription, setAboutDescription] = useState(data.aboutData.about.description);
    return (
        <>
        <section className="common_page_indvdl_section about_page_about_section">
            <div className="container">
                <div className="home_about_section_innr">
                    <div className="section_common_content_wrap home_about_cont_sctn">
                        {/* <h2 className="section_heading_text">About us</h2> */}
                        <div className="section_action_row left_align mt-0">
                            <Link to="/" className="common_button">Read our story </Link>
                            <Link to="/" className="common_button invert">Read our story </Link>
                        </div>
                        <p>{aboutDescription}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}