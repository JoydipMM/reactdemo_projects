import { Link } from "react-router-dom";
import ImageThumb from "../common/ImageThumb";

export default function HomeAboutSection() {
    return (
        <>
        <section className="common_page_indvdl_section home_about_section">
            <div className="container">
                <div className="home_about_section_innr">
                    <img className="home_about_avater" src="/images/home-about-avater.png" alt="" />
                    <div className="section_common_content_wrap home_about_cont_sctn">
                        <h2 className="section_heading_text">About us</h2>
                        <p>We believe every person deserves dignified support and opportunity. Soultrove bridges families, providers, and resources—so care is coordinated, transparent, and human.</p>
                        <Link to="/" className="common_button">Read our story </Link>
                    </div>
                </div>
            </div>
                <ImageThumb className="home_about_thumb" url="/images/default-banner.jpg"/>
        </section>
        </>
    )
}