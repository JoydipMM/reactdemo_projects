import ImageThumb from "../common/ImageThumb";
import TestimonialCard from "../common/TestimonialCard";
import ThumbnailCard from "../common/ThumbnailCard";
import WhatToSaySection from "../common/WhatToSaySection";
import SlickCarousel from "../sliders/SlickCarousel";

export default function AboutWhatToSaySection(){
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
    <WhatToSaySection title={"Join thousands of families creating brighter futures with Soultrove."}>
        <SlickCarousel settings={sliderSettings}>
            <ImageThumb className="mid_height_rounded"/>
        </SlickCarousel>
    </WhatToSaySection>
    </>)
}