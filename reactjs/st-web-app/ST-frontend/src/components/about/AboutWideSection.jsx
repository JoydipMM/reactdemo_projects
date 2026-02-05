import { Link } from "react-router-dom";
import ImageThumb from "../common/ImageThumb";

export default function AboutWideSection() {
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
                        <p>Empowering every journey, every ability.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}