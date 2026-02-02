import { Link } from "react-router-dom";
import CornerCurveCard from "../common/CornerCurveCard";
import ImageThumb from "../common/ImageThumb";
import SlickCarousel from "../sliders/SlickCarousel";
import RoundedBoxCard from "../common/RoundedBoxCard";

export default function HomeServiceProviderSection() {
    const sliderSettings = {
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
        <section className="common_page_indvdl_section home_service_provider_section">
            <div className="container">
                <div className="solutions_rows_wrap">

                    {/* top row start */}
                    <div className="solutions_row reverse">

                        <div className="solution_col col_one">
                            <div className="section_common_heading_section left_align _invert_color">
                                <h2 className="section_heading_text">For Service Providers</h2>
                                <p>Grow with Soultrove.</p>
                            </div>
                            <div className="bullet_info_section">
                                <h2 className="bullet_section_title">Join and connect</h2>
                                <ul className="bullet_list">
                                    <li>Create your account</li>
                                    <li>Browse providers and resources</li>
                                    <li>Book and manage support</li>
                                </ul>
                                <div className="bullet_info_action_row">
                                    <Link to="/" className="common_button create_account_button">Create Account</Link>
                                    <Link to="/" className="common_button invert learn_more_button">Learn More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="solution_col mid_col col_two">
                            <CornerCurveCard className="solution_curve_card" borderColor="#CCCCCC" backgroundColor="transparent">
                                <div className="bullet_info_section">
                                    <h2 className="bullet_section_title">Solutions that fit your family</h2>
                                    <ul className="bullet_list">
                                        <li>Verified providers & safety-first design</li>
                                        <li>Local resources mapped to your area</li>
                                        <li>Smart reminders for sessions and tasks</li>
                                        <li>Goal tracking with easy summaries</li>
                                    </ul>
                                </div>
                            </CornerCurveCard>
                        </div>

                        <div className="solution_col col_three">
                            <CornerCurveCard className="solution_curve_thumb_card">
                                <ImageThumb url="/images/banner-01.jpg" />
                            </CornerCurveCard>
                        </div>

                    </div>
                    {/* top row end */}


                    {/* bottom row start */}
                    <div className="solution_cards_slider_row">
                        <SlickCarousel settings={sliderSettings}>
                            <RoundedBoxCard title="Common challenges" description="Finding trusted providers, long waitlists, scattered info." />
                            <RoundedBoxCard title="Common challenges" description="Finding trusted providers, long waitlists, scattered info." />
                            <RoundedBoxCard title="Common challenges" description="Finding trusted providers, long waitlists, scattered info." />
                        </SlickCarousel>
                    </div>
                    {/* bottom row ended */}

                </div>


            </div>
        </section>
        </>
    )
}