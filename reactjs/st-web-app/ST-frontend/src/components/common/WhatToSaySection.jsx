import SlickCarousel from "../sliders/SlickCarousel";
import TestimonialCard from "./TestimonialCard";

export default function WhatToSaySection(){
    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };
    return(
        <>
        <section className="common_page_indvdl_section what_to_say_section">
            <div className="what_to_say_inner_section">
                <div className="container">
                    <div className="what_to_say_row">
                        <div className="what_to_say_col">
                            <div className="section_common_heading_section left_align mb-0 invert_color">
                                <h2 className="section_heading_text">What our users have to say</h2>
                                <p>Real stories from families and providers using Soultrove.</p>
                            </div>
                        </div>
                        <div className="what_to_say_slider_col">
                            <SlickCarousel settings={sliderSettings}>
                                <TestimonialCard message="Better coordination with caregivers led to faster progress." avater={"/images/banner-01.jpg"} name="Aarushi" designation="Parent" />
                                <TestimonialCard avater={"/default/default-avater.png"} />
                                <TestimonialCard avater={"/default/default-avater.png"} />
                            </SlickCarousel>
                        </div>
                    </div>
                </div>
                <div className="what_to_say_bg_curve"></div>
            </div>
        </section>
        </>
    )
}