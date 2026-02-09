import { useState } from "react";
import * as data from '../../services/dummyData';
import TestimonialCard from "../common/TestimonialCard";
import WhatToSaySection from "../common/WhatToSaySection";
import SlickCarousel from "../sliders/SlickCarousel";

export default function HomeWhatToSaySection(){
    const [whatToSayTitle, setWhatToSayTitle] = useState(data.homedata.homeWhat.title);
    const [whatToSayDescription, setWhatToSayDescription] = useState(data.homedata.homeWhat.description);
    const [ testimonials, setTestimonials] = useState(data.homedata.testimonials);

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
    <WhatToSaySection title={whatToSayTitle} description={whatToSayDescription}>
        <SlickCarousel settings={sliderSettings}>
            {testimonials.length > 0 && testimonials.map((item, index) => 
                <TestimonialCard 
                isVisible={true} 
                noImage={false} 
                avater={item.avater} 
                name={item.name} 
                message={item.massage} 
                designation={item.designation}
                />
            )}
            {/* <TestimonialCard message="Better coordination with caregivers led to faster progress." avater={"/images/banner-01.jpg"} name="Aarushi" designation="Parent" />
            <TestimonialCard avater={"/default/default-avater.png"} />
            <TestimonialCard avater={"/default/default-avater.png"} /> */}
        </SlickCarousel>
    </WhatToSaySection>
    </>)
}