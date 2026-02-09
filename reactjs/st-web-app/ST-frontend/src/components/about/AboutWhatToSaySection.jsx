import { useState } from "react";
import * as data from '../../services/dummyData';

import ImageThumb from "../common/ImageThumb";
import TestimonialCard from "../common/TestimonialCard";
import ThumbnailCard from "../common/ThumbnailCard";
import WhatToSaySection from "../common/WhatToSaySection";
import SlickCarousel from "../sliders/SlickCarousel";

export default function AboutWhatToSaySection(){
    const [whatToSayTitle, setWhatToSayTitle] = useState(data.aboutData.aboutFeatures.title);
    const [cards, setCards] = useState(data.aboutData.aboutFeatures.cards);

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
    <WhatToSaySection title={whatToSayTitle}>
        <SlickCarousel settings={sliderSettings}>
            {cards.length > 0 && cards.map((item, index) => <ImageThumb className="mid_height_rounded" key={index} url={item.image} />)}
            {/* <ImageThumb className="mid_height_rounded"/> */}
        </SlickCarousel>
    </WhatToSaySection>
    </>)
}