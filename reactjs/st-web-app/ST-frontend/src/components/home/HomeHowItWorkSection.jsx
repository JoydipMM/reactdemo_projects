import { useState } from "react";
import * as data from '../../services/dummyData';
import HowToWorkCard from "../common/HowToWorkCard";
import SlickCarousel from "../sliders/SlickCarousel";

export default function HomeHowItWorkSection() {

    const [title, setTitle] = useState(data.homedata.howItWorks.title);
    const [description, setDescription] = useState(data.homedata.howItWorks.description);
    const [howItWorksCards, setHowItWorksCards] = useState(data.homedata.howItWorks.cards);

    return (
        <>
        <section className="common_page_indvdl_section home_how_it_work_section">
            <div className="container">
                <div className="section_common_heading_section _left_align _invert_color">
                    <h2 className="section_heading_text">{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="how_to_work_slider_section">
                    <SlickCarousel className="how_to_work_slider">
                        {howItWorksCards.length > 0 && howItWorksCards.map((item, index) => (
                            <HowToWorkCard key={index} Imageurl={item.image} title={item.title} description={item.description} number={index+1} />
                        ))}
                        {/* <HowToWorkCard Imageurl="/images/banner-01.jpg" title="Step 1" description="Search services, programs, and community resources." number="1" />
                        <HowToWorkCard Imageurl="/images/banner-01.jpg" title="Step 1" description="Search services, programs, and community resources." number="1" />
                        <HowToWorkCard Imageurl="/images/banner-01.jpg" title="Step 1" description="Search services, programs, and community resources." number="1" />
                        <HowToWorkCard Imageurl="/images/banner-01.jpg" title="Step 1" description="Search services, programs, and community resources." number="1" /> */}
                    </SlickCarousel>
                </div>

            </div>
        </section>
        </>
    )
}