import { Link } from "react-router-dom";
import Banner from "../common/Banner";
import CornerCurveCard from "../common/CornerCurveCard";

export default function HomeTopBanner() {
    return (
        <>
        <section className="home_top_banner">
            <Banner url="/images/default-banner.jpg" />
            <div className="home_top_banner_overlay">
                <div className="container">
                    <CornerCurveCard className="banner_enpowering_box" backgroundColor="#D16050">
                        <ul className="enpowering_list">
                            <li>Inclusive</li>
                            <li>Accessible</li>
                            <li>Trusted</li>
                        </ul>
                        <h3 className="banner_enpowering_box_title">Empowering every journey, every ability.</h3>
                        <p>Soultrove connects families and service providers to the right care, resources, and community. Simple, supportive, and built for real-life needs.</p>
                        <Link to="/" className="common_button white">Get Started</Link>
                    </CornerCurveCard>
                </div>
            </div>
        </section>
        
        </>
    )
}