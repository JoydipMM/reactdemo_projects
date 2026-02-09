import { useState } from "react";
import * as data from '../../services/dummyData';
import { Link } from "react-router-dom";
import CornerThumbCurveCard from "../common/CornerThumbCurveCard";
import SlickCarousel from "../sliders/SlickCarousel";

export default function HomeWhatWeDoSection() {

    const [title, setTitle] = useState(data.homedata.whatWeDo.title);
    const [subtitle, setSubtitle] = useState(data.homedata.whatWeDo.description);
    const [cardItems, setCardsItems] = useState(data.homedata.whatWeDo.cards);
    
    return (
        <>
        <section className="common_page_indvdl_section home_what_we_do_section">
            <div className="container">
                <div className="section_common_heading_section invert_color">
                    <h2 className="section_heading_text">{title}</h2>
                    <p>{subtitle}</p>
                </div>

                <SlickCarousel>
                    {cardItems.map((item, index) => (
                        <CornerThumbCurveCard 
                        key={index} 
                        thumbImage={item.image} 
                        icontype={"image"} 
                        icon={item.icon} 
                        title={item.title} 
                        description={item.description} />
                    ))}
                    {/* <CornerThumbCurveCard thumbImage="/images/banner-01.jpg" icontype="image" icon="/icons/health-white-icon.svg"/> 
                    <CornerThumbCurveCard thumbImage="/images/banner-01.jpg" icontype="image" icon="/icons/health-white-icon.svg"/> 
                    <CornerThumbCurveCard thumbImage="/images/banner-01.jpg" icontype="image" icon="/icons/health-white-icon.svg"/> 
                    <CornerThumbCurveCard thumbImage="/images/banner-01.jpg" icontype="image" icon="/icons/health-white-icon.svg"/> */}
                </SlickCarousel>


                
            </div>
        </section>
        </>
    )
}