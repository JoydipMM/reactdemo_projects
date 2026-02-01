import CornerCurveCard from "./CornerCurveCard";
import IconBox from "./IconBox";

export default function BenefitCard({
    className="", 
    title="Lorem Ipsum title", 
    description="lorem ipsum dolor sit amet consectetur adipiscing elit", 
    icon="", 
    icontype="", 
    iconcolor=""}){
    return (
        <>
        <CornerCurveCard borderColor="#CCCCCC" className={`benefit_card ${className || ""}`}>
            {icon !='' && <IconBox icontype={icontype} icon={icon} color={iconcolor}/> }
            <div className="benefit_card_cnt_wrap">
                <h2 className="card_heading_text">{title}</h2>
                <p>{description}</p>
            </div>
        </CornerCurveCard>
        </>
    )
}