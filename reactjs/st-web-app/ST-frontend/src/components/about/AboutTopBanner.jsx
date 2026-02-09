import { useState } from "react";
import * as data from '../../services/dummyData';
import { Link } from "react-router-dom";
import Banner from "../common/Banner";
import CornerCurveCard from "../common/CornerCurveCard";

export default function AboutTopBanner() {
    const [bannerTitle, setBannerTitle] = useState(data.aboutData.banner.title);
    const [bannerSubtitle, setBannerSubtitle] = useState(data.aboutData.banner.subtitle);
    const [bannerDescription, setBannerDescription] = useState(data.aboutData.banner.description);
    const [bannerImage, setBannerImage] = useState(data.aboutData.banner.image);
    return (
        <>
        <section className="home_top_banner">
            <Banner url={bannerImage} />
            <div className="home_top_banner_overlay">
                <div className="container">
                    <CornerCurveCard className="banner_enpowering_box" backgroundColor="#D16050">
                        <p className="banner_enpowering_box_subtitle"><b>{bannerSubtitle}</b></p>
                        <h3 className="banner_enpowering_box_title">{bannerTitle}</h3>
                        <p>{bannerDescription}</p>
                        {/* <Link to="/" className="common_button white">Get Started</Link> */}
                    </CornerCurveCard>
                </div>
            </div>
        </section>
        
        </>
    )
}