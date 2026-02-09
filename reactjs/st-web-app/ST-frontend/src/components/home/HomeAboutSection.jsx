import { useState } from "react";
import * as data from '../../services/dummyData';
import { Link } from "react-router-dom";
import ImageThumb from "../common/ImageThumb";

export default function HomeAboutSection() {
    const [aboutTitle, setAboutTitle] = useState(data.homedata.about.title);
    const [aboutDescription, setAboutDescription] = useState(data.homedata.about.description);
    const [aboutImage, setAboutImage] = useState(data.homedata.about.image);
    const [aboutAvater, setAboutAvater] = useState(data.homedata.about.avater);
    return (
        <>
        <section className="common_page_indvdl_section home_about_section">
            <div className="container">
                <div className="home_about_section_innr">
                    <img className="home_about_avater" src={aboutAvater} alt="" />
                    <div className="section_common_content_wrap home_about_cont_sctn">
                        <h2 className="section_heading_text">{aboutTitle}</h2>
                        <p>{aboutDescription}</p>
                        <Link to="/" className="common_button">Read our story </Link>
                    </div>
                </div>
            </div>
                <ImageThumb className="home_about_thumb" url={aboutImage}/>
        </section>
        </>
    )
}