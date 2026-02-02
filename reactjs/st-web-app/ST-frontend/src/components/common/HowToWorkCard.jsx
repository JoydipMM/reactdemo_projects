import ImageThumb from "./ImageThumb";

export default function HowToWorkCard({className="", Imageurl="", title="", description="", number="0"}){
    return(
        <div className={`how_to_work_card ${className || ""}` }>
            <ImageThumb className="card_thumb" url={Imageurl} />
            <div className="work_card_cont_box invert_color">
                {number && <span className="card_number">{number}</span>}
                <h2 className="card_heading_text card_title">{title}</h2>
                { description && <p className="card_description">{description}</p> }
            </div>
        </div>
    )
}