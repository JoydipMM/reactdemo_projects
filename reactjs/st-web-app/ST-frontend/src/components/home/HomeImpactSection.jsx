import { useState } from "react";
import * as data from '../../services/dummyData';
import { Link } from "react-router-dom";
import ImageThumb from "../common/ImageThumb";
import TestimonialBox from "../common/TestimonialBox";
import ImpactCard from "../common/ImpactCard";


export default function HomeImpactSection() {

    const [title, setTitle] = useState(data.homedata.impact.title);
    const [description, setDescription] = useState(data.homedata.impact.description);
    const [impactImage, setImpactImage] = useState(data.homedata.impact.image);
    const [impactCards, setImpactCards] = useState(data.homedata.impact.cards);

    return (
        <>
        <section className="common_page_indvdl_section home_impact_section">
            <div className="container">

                <div className="impact_section_row">
                    <div className="impact_section_col impact_section_lg_col">
                        <div className="impact_lft_col_inner">
                            <div className="section_common_heading_section left_align invert_color">
                                <h2 className="section_heading_text">{title}</h2>
                                <p>{description}</p>
                            </div>
                            <div className="impact_cards_row">
                                {impactCards.length > 0 && impactCards.map((card, index) => (
                                    <div className="impact_cards_col" key={index}>
                                        <ImpactCard className="invert_color" 
                                            title={card.title} 
                                            description={card.description}
                                        />
                                    </div>
                                ))}
                                {/* <div className="impact_cards_col">
                                    <ImpactCard className="invert_color"
                                        title="92%" 
                                        description="report easier access to services"
                                    />
                                </div>
                                <div className="impact_cards_col">
                                    <ImpactCard className="invert_color"
                                        title="92%" 
                                        description="report easier access to services"
                                    />
                                </div>
                                <div className="impact_cards_col">
                                    <ImpactCard className="invert_color"
                                        title="92%" 
                                        description="report easier access to services"
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="impact_section_col impact_section_sm_col">
                        <TestimonialBox isShadow={true} />
                    </div>
                </div>
                
            </div>
            <ImageThumb className="home_impact_bg" url={impactImage} />
        </section>
        </>
    )
}