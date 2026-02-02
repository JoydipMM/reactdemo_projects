export default function ImpactCard({title="Card Title...", description="", className=""}) {
    return (
        <>
        <div className={`impact_card ${className || ""}`}>
            <h2 className="section_heading_text impact_card_title">{title}</h2>
            { description && <p className="impact_card_description">{description}</p> }
        </div>
        </>
    )
}