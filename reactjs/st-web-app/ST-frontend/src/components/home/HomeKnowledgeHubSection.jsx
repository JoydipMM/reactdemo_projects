import { Link } from "react-router-dom";
import ThumbnailCard from "../common/ThumbnailCard";
import SlickCarousel from "../sliders/SlickCarousel";

export default function HomeKnowledgeHubSection() {
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
                    <h2 className="section_heading_text">Knowledge Hub</h2>
                    <p>Guides, stories, and expert tips for every step.</p>
                </div>

                <div className="knowledge_cards_wrap">
                    <SlickCarousel settings={cardSettings}>
                        <ThumbnailCard className="knowledge_card" title="Starting Therapy: A Family Guide" description="What to expect and how to prepare." imageUrl="/images/default-banner.jpg" />
                        <ThumbnailCard className="knowledge_card" title="Starting Therapy: A Family Guide" description="What to expect and how to prepare." imageUrl="/images/default-banner.jpg" />
                        <ThumbnailCard className="knowledge_card" title="Starting Therapy: A Family Guide" description="What to expect and how to prepare." imageUrl="/images/default-banner.jpg" />
                    </SlickCarousel>
                </div>

                <div className="section_action_row">
                    <Link to="/" className="common_button">Explore All Resources</Link>
                </div>

            </div>
        </section>
        </>
    )
}