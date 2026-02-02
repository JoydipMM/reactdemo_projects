import HowToWorkCard from "../common/HowToWorkCard";
import SlickCarousel from "../sliders/SlickCarousel";

export default function HomeHowItWorkSection() {

    return (
        <>
        <section className="common_page_indvdl_section home_how_it_work_section">
            <div className="container">
                <div className="section_common_heading_section _left_align _invert_color">
                    <h2 className="section_heading_text">How it works</h2>
                    <p>Four simple steps to get the right support at the right time.</p>
                </div>

                <div className="how_to_work_slider_section">
                    <SlickCarousel className="how_to_work_slider">
                        <HowToWorkCard Imageurl="/images/banner-01.jpg" title="Step 1" description="Search services, programs, and community resources." number="1" />
                        <HowToWorkCard Imageurl="/images/banner-01.jpg" title="Step 1" description="Search services, programs, and community resources." number="1" />
                        <HowToWorkCard Imageurl="/images/banner-01.jpg" title="Step 1" description="Search services, programs, and community resources." number="1" />
                        <HowToWorkCard Imageurl="/images/banner-01.jpg" title="Step 1" description="Search services, programs, and community resources." number="1" />
                    </SlickCarousel>
                </div>

            </div>
        </section>
        </>
    )
}