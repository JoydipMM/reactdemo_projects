import BenefitCard from "../common/BenefitCard";
import SlickCarousel from "../sliders/SlickCarousel";

export default function HomeKeyBenefitsSection() {

    const customSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <>
        <section className="common_page_indvdl_section home_key_benefit_section">
            <div className="container">

                <div className="home_key_benefit_rows">

                    <div className="home_key_benefit_info_wrap">
                        <div className="key_benefit_lft_col">
                            <h2 className="section_heading_text">Key Benefits</h2>
                        </div>
                        <div className="key_benefit_rgt_col">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet risus non est sodales efficitur. Integer imperdiet facilisis diam, dignissim varius risus ultrices at. Sed eu justo ut nulla condimentum gravida eget quis lorem.</p>
                        </div>
                    </div>

                    <div className="home_key_benefit_cards_wrap">
                        <SlickCarousel settings={customSettings}>
                            <BenefitCard icontype="image" icon="/icons/health-white-icon.svg"/>
                            <BenefitCard icontype="image" icon="/icons/health-white-icon.svg"/>
                            <BenefitCard icontype="image" icon="/icons/health-white-icon.svg"/>
                        </SlickCarousel>
                    </div>

                </div>
  
            </div>
            <div className="home_key_benefit_bg_curve"></div>
        </section>
        </>
    )
}