import { Link } from "react-router-dom";
import CornerThumbCurveCard from "../common/CornerThumbCurveCard";
import SlickCarousel from "../sliders/SlickCarousel";

export default function HomeWhatWeDoSection() {

    return (
        <>
        <section className="common_page_indvdl_section home_what_we_do_section">
            <div className="container">
                <div className="section_common_heading_section invert_color">
                    <h2 className="section_heading_text">What we do</h2>
                    <p>A unified place to discover, connect, and thrive across care and inclusion.</p>
                </div>

                <SlickCarousel>
                    <CornerThumbCurveCard thumbImage="/images/banner-01.jpg" icontype="image" icon="/icons/health-white-icon.svg"/> 
                    <CornerThumbCurveCard thumbImage="/images/banner-01.jpg" icontype="image" icon="/icons/health-white-icon.svg"/> 
                    <CornerThumbCurveCard thumbImage="/images/banner-01.jpg" icontype="image" icon="/icons/health-white-icon.svg"/> 
                    <CornerThumbCurveCard thumbImage="/images/banner-01.jpg" icontype="image" icon="/icons/health-white-icon.svg"/>
                </SlickCarousel>


                
            </div>
        </section>
        </>
    )
}