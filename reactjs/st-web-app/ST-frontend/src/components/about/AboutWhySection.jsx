import { useState } from "react";
import * as data from '../../services/dummyData';
import { Link } from "react-router-dom";
import ThumbnailCard from "../common/ThumbnailCard";
import SlickCarousel from "../sliders/SlickCarousel";

export default function AboutWhySection() {

    const [ differentiatorTitle, setDifferentiatorTitle ] = useState(data.aboutData.aboutDifferentiator.title);
    const [ differentiatorDescription, setDifferentiatorDescription ] = useState(data.aboutData.aboutDifferentiator.description);
    const [ differentiatorCards, setDifferentiatorCards ] = useState(data.aboutData.aboutDifferentiator.cards);

    const cardSettings = {
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
        <section className="common_page_indvdl_section home_knowledge_hub_section">
            <div className="container">

                <div className="section_common_heading_section">
                    <h2 className="section_heading_text">{differentiatorTitle}</h2>
                    <p>{differentiatorDescription}</p>
                </div>

                <div className="knowledge_cards_wrap">
                    <SlickCarousel settings={cardSettings}>
                        {differentiatorCards.length > 0 && differentiatorCards.map((item, index) => (
                            <ThumbnailCard 
                            key={index} 
                            className="differentiator_card" 
                            title={item.title} 
                            description={item.description} 
                            imageUrl={item.image} />
                        ))}
                        {/* <ThumbnailCard className="differentiator_card" title="Life-span support" description="From early childhood to adulthood." imageUrl="/images/default-banner.jpg" />
                        <ThumbnailCard className="differentiator_card" title="Starting Therapy: A Family Guide" description="What to expect and how to prepare." imageUrl="/images/default-banner.jpg" />
                        <ThumbnailCard className="differentiator_card" title="Starting Therapy: A Family Guide" description="What to expect and how to prepare." imageUrl="/images/default-banner.jpg" /> */}
                    </SlickCarousel>
                </div>

                {/* <div className="section_action_row">
                    <Link to="/" className="common_button">Explore All Resources</Link>
                </div> */}

            </div>
        </section>
        </>
    )
}