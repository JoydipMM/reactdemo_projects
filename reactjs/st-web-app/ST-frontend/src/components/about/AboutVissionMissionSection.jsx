import { useState } from "react";
import * as data from '../../services/dummyData';
import { Link } from "react-router-dom";
import CornerThumbCurveCard from "../common/CornerThumbCurveCard";
import SlickCarousel from "../sliders/SlickCarousel";

export default function AboutVissionMissionSection() {
    const [ visionTitle, setVisionTitle ] = useState(data.aboutData.visionMission.title);
    const [visionCards, setVisionCards] = useState(data.aboutData.visionMission.cards);

    return (
        <>
        <section className="common_page_indvdl_section home_what_we_do_section">
            <div className="container">
                <div className="section_common_heading_section invert_color">
                    <h2 className="section_heading_text">{visionTitle}</h2>
                    {/* <p>A unified place to discover, connect, and thrive across care and inclusion.</p> */}
                </div>

                <SlickCarousel>
                    {visionCards.map((item, index) => (
                        <CornerThumbCurveCard 
                        key={index} 
                        thumbImage={item.image} 
                        icontype={"image"} 
                        icon={item.icon} 
                        title={item.title} 
                        description={item.description} />
                    ))}
                    {/* <CornerThumbCurveCard title="Vission" thumbImage="/images/banner-01.jpg" icontype="image" icon="/icons/health-white-icon.svg"/> 
                    <CornerThumbCurveCard title="Mission" thumbImage="/images/banner-01.jpg" icontype="image" icon="/icons/health-white-icon.svg"/> 
                    <CornerThumbCurveCard title="Values" thumbImage="/images/banner-01.jpg" icontype="image" icon="/icons/health-white-icon.svg"/>  */}
                </SlickCarousel>


                
            </div>
        </section>
        </>
    )
}