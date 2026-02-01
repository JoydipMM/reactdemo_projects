export default function CornerCurveCard({className="", borderWidth="1px", borderColor="transparent", children, backgroundColor="#fff"}){
    return(
        <div style={{borderWidth:borderWidth, borderColor:borderColor, backgroundColor:backgroundColor}} className={`corner_curve_card ${className ? className : ""}`}>
            <div className="corner_curve_card_innr">
                {children}
            </div>
        </div>
    )
}