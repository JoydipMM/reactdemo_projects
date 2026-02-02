import Avater from "./Avater";
import * as Icons from "../icons";

export default function TestimonialCard({
    className="", 
    message="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    noImage,
    isVisible=true,
    avater,
    designation="",
    name="",
    children}) {
    return (
        <>
        <div className={`testimonial_card ${className || ""}`}>
            <div className="testimonial_quote_icon"><Icons.StartQuoteIcon/></div>
            <div className="testimonial_cont">
                “{message}”
            </div>
            {children}
            {isVisible && <div className="testimoial_user_info_row">
                <Avater noImage={noImage} image={avater} title={name}/>
                <div className="avater_name_wrap">
                    <h3>{name}</h3>{designation && <span>{designation}</span>}
                </div>
            </div> }
        </div>
        </>
    )
}