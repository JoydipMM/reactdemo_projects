import CornerCurveCard from "./CornerCurveCard";

export default function RoundedBoxCard({className="", title="", description="", borderColor="#CCCCCC"}){
    return (
        <>
        <CornerCurveCard className={`rounded_box_card bullet_info_section ${className || ""}`} borderColor={borderColor} backgroundColor="transparent">
            {title && <h2 className="bullet_section_title">{title}</h2> }
            { description && <p className="rounded_box_card_description">{description}</p> }
        </CornerCurveCard>
        </>
    )
}