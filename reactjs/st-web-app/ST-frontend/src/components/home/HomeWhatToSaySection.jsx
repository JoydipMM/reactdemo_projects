import TestimonialCard from "../common/TestimonialCard";
import WhatToSaySection from "../common/WhatToSaySection";
import SlickCarousel from "../sliders/SlickCarousel";

export default function HomeWhatToSaySection(){
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
    return(<>
    <WhatToSaySection title={"What our users have to say"} description={"Real stories from families and providers using Soultrove."}>
        <SlickCarousel settings={sliderSettings}>
            <TestimonialCard message="Better coordination with caregivers led to faster progress." avater={"/images/banner-01.jpg"} name="Aarushi" designation="Parent" />
            <TestimonialCard avater={"/default/default-avater.png"} />
            <TestimonialCard avater={"/default/default-avater.png"} />
        </SlickCarousel>
    </WhatToSaySection>
    </>)
}