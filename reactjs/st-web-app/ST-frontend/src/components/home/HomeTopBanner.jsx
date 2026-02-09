import { useState } from "react";
import * as data from '../../services/dummyData';
import { Link } from "react-router-dom";
import Banner from "../common/Banner";
import CornerCurveCard from "../common/CornerCurveCard";

export default function HomeTopBanner() {
    //console.log("Home Data: ", data.homedata);
    //const {banner} = data.homedata;
    const [bannerTitle, setBannerTitle] = useState(data.homedata.banner.title);
    const [bannerDescription, setBannerDescription] = useState(data.homedata.banner.description);
    const [bannerImage, setBannerImage] = useState(data.homedata.banner.image);
    const [bannerTags, setBannerTags] = useState(data.homedata.banner.tags);
    return (
        <>
        <section className="home_top_banner">
            <Banner url={bannerImage} />
            <div className="home_top_banner_overlay">
                <div className="container">
                    <CornerCurveCard className="banner_enpowering_box" backgroundColor="#D16050">
                        <ul className="enpowering_list">
                            {/* <li>Inclusive</li>
                            <li>Accessible</li>
                            <li>Trusted</li> */}
                            {bannerTags.length > 0 && bannerTags.map((tag, index) => <li key={index}>{tag}</li>)}
                        </ul>
                        <h3 className="banner_enpowering_box_title">{bannerTitle}</h3>
                        <p>{bannerDescription}</p>
                        <Link to="/" className="common_button white">Get Started</Link>
                    </CornerCurveCard>
                </div>
            </div>
        </section>
        
        </>
    )
}