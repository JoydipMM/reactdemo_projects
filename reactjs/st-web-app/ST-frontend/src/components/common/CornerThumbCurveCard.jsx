import ImageThumb from "./ImageThumb";

export default function CornerThumbCurveCard({
    className="", 
    borderWidth="1px", 
    borderColor="transparent", 
    children, 
    backgroundColor="#fff", 
    thumbImage="", 
    title="Lorem Ipsum title",
    description="The Lorem Ipsum for photos. Easy to use, stylish placeholders."
}){
    return(
        <div style={{borderWidth:borderWidth, borderColor:borderColor, backgroundColor:backgroundColor}} className={`corner_curve_card with_thumb ${className ? className : ""}`}>
            <div className="corner_curve_card_innr">
                <div className="corner_curve_card_cnt_row">
                    <h2 className="card_heading_text">{title}</h2>
                    <p>{description}</p>
                </div>
                <ImageThumb url={thumbImage} className="corner_curve_card_thumb" />
                {children}
            </div>
        </div>
    )
}