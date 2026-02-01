import { Link } from "react-router-dom";
import ImageThumb from "../common/ImageThumb";


export default function HomeImpactSection() {

    return (
        <>
        <section className="common_page_indvdl_section home_impact_section">
            <div className="container">
                
                <div className="section_common_heading_section left_align invert_color">
                    <h2 className="section_heading_text">Impact & Inclusion</h2>
                    <p>We partner with families and providers to drive measurable, human-centered outcomes.</p>
                </div>
            </div>

            <ImageThumb className="home_impact_bg" url="/images/default-banner.jpg" />
        </section>
        </>
    )
}