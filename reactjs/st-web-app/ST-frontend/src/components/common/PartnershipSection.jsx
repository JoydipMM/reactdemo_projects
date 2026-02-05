import SlickCarousel from "../sliders/SlickCarousel";
import BrandLogoCard from "./BrandLogoCard";

export default function PartnershipSection({className}){
    const sliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };
    return(<>
    <section className={`common_page_indvdl_section partnership_section ${className ? className : ""}`}>
        <div className="container">
            <div className="section_common_heading_section _left_align _invert_color">
                <h2 className="section_heading_text">Partnerships & Collaborations</h2>
                <p>We work with foundations, NGOs, schools, and inclusive employers.</p>
            </div>
            <div className="partnership_scn_slider_row">
                <SlickCarousel settings={sliderSettings}>
                    <BrandLogoCard />
                    <BrandLogoCard />
                    <BrandLogoCard />
                    <BrandLogoCard />
                    <BrandLogoCard />
                    <BrandLogoCard />
                    <BrandLogoCard />
                </SlickCarousel>
            </div>
            <div className="section_action_row">
                <button className="common_button">Partner with Us</button>
            </div>
        </div>
    </section>
    </>)
}