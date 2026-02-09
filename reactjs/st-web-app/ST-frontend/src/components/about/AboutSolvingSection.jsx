import { useState } from "react";
import * as data from '../../services/dummyData';
import { Link } from "react-router-dom";
import CornerCurveCard from "../common/CornerCurveCard";
import ImageThumb from "../common/ImageThumb";

export default function AboutSolvingSection() {

    const [solutionTitle, setSolutionTitle] = useState(data.aboutData.aboutSolving.title);
    const [solutionDescription, setSolutionDescription] = useState(data.aboutData.aboutSolving.description);
    const [solutionImage, setSolutionImage] = useState(data.aboutData.aboutSolving.image);
    const [solutionCards, setSolutionCards] = useState(data.aboutData.aboutSolving.cards);
    return (
        <>
        <section className="common_page_indvdl_section home_service_provider_section">
            <div className="container">
                <div className="solutions_rows_wrap">

                    {/* top row start */}
                    <div className="solutions_row _reverse">

                        <div className="solution_col col_one full">
                            <div className="section_common_heading_section left_align _invert_color">
                                <h2 className="section_heading_text">{solutionTitle}</h2>
                                {/* <p>Grow with Soultrove.</p> */}
                            </div>
                            {solutionCards.length > 0 && solutionCards.map((item, index) => (
                                <div className="bullet_info_section full-width">
                                    <h2 className="bullet_section_title">{item.title}</h2>
                                    <ul className="bullet_list">
                                        {item.tags.length > 0 && item.tags.map((subItem, subIndex) => (<li key={subIndex}>{subItem}</li>))}
                                        {/* <li>Create your account</li>
                                        <li>Browse providers and resources</li>
                                        <li>Book and manage support</li> */}
                                    </ul>
                                </div>
                            ))}

                            {/* <div className="bullet_info_section full-width">
                                <h2 className="bullet_section_title">Challenges families face</h2>
                                <ul className="bullet_list">
                                    <li>Create your account</li>
                                    <li>Browse providers and resources</li>
                                    <li>Book and manage support</li>
                                </ul>
                            </div>
                            <div className="bullet_info_section full-width">
                                <h2 className="bullet_section_title">How Soultrove bridges the gaps</h2>
                                <ul className="bullet_list">
                                    <li>Create your account</li>
                                    <li>Browse providers and resources</li>
                                    <li>Book and manage support</li>
                                </ul>
                            </div> */}

                            
                        </div>

                        {/* <div className="solution_col mid_col col_two">
                            <CornerCurveCard className="solution_curve_card" borderColor="#CCCCCC" backgroundColor="transparent">
                                <div className="bullet_info_section">
                                    <h2 className="bullet_section_title">Solutions that fit your family</h2>
                                    <ul className="bullet_list">
                                        <li>Verified providers & safety-first design</li>
                                        <li>Local resources mapped to your area</li>
                                        <li>Smart reminders for sessions and tasks</li>
                                        <li>Goal tracking with easy summaries</li>
                                    </ul>
                                </div>
                            </CornerCurveCard>
                        </div> */}

                        <div className="solution_col col_three">
                            <CornerCurveCard className="solution_curve_thumb_card">
                                <ImageThumb url={solutionImage} />
                            </CornerCurveCard>
                        </div>

                    </div>
                    {/* top row end */}

                </div>


            </div>
        </section>
        </>
    )
}