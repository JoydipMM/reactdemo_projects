import { useState } from "react";
import * as data from '../../services/dummyData';
import SlickCarousel from "../sliders/SlickCarousel";
import CornerCurveCard from "./CornerCurveCard";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialBox({className="", isShadow=false}){

    const [testimonials, setTestimonials] = useState(data.homedata.testimonials);

    const testimonialSettings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
        <CornerCurveCard isShadow={isShadow} className={`testimonial_box ${className || ""}`}>
            <SlickCarousel settings={testimonialSettings}>
                {testimonials.length > 0 && testimonials.map((item, index) => 
                    <TestimonialCard isVisible={true} noImage={false} avater={item.avater} name={item.name} message={item.message} designation={item.designation}/>
                )}
                {/* <TestimonialCard isVisible={true} noImage={true} avater="/default/default-avater.png" name="Sudip Roy" message="Testimonial message here Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt." designation="Designation here"/>
                <TestimonialCard isVisible={true} noImage={false} avater="/default/default-avater.png" name="Sudip Roy" message="Testimonial message here Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt." designation="Designation here"/> */}
            </SlickCarousel>
        </CornerCurveCard>
        </>
    )
}