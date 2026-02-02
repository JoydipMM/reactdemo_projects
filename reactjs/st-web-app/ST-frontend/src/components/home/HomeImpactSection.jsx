import { Link } from "react-router-dom";
import ImageThumb from "../common/ImageThumb";
import TestimonialBox from "../common/TestimonialBox";
import ImpactCard from "../common/ImpactCard";


export default function HomeImpactSection() {

    return (
        <>
        <section className="common_page_indvdl_section home_impact_section">
            <div className="container">

                <div className="impact_section_row">
                    <div className="impact_section_col impact_section_lg_col">
                        <div className="impact_lft_col_inner">
                            <div className="section_common_heading_section left_align invert_color">
                                <h2 className="section_heading_text">Impact & Inclusion</h2>
                                <p>We partner with families and providers to drive measurable, human-centered outcomes.</p>
                            </div>
                            <div className="impact_cards_row">
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
                                </div>
                                <div className="impact_cards_col">
                                    <ImpactCard className="invert_color"
                                        title="92%" 
                                        description="report easier access to services"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="impact_section_col impact_section_sm_col">
                        <TestimonialBox isShadow={true} />
                    </div>
                </div>
                
            </div>
            <ImageThumb className="home_impact_bg" url="/images/default-banner.jpg" />
        </section>
        </>
    )
}