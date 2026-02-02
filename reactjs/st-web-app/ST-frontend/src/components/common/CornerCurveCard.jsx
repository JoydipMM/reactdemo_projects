export default function CornerCurveCard({
    className="", 
    isShadow=false, 
    borderWidth="1px", 
    borderColor="transparent", 
    children, 
    backgroundColor="#fff"}){
 
    const boxShadow = "0px 7px 7px 0px #00000040";

    return(
        <div style={{
            borderWidth:borderWidth, 
            borderColor:borderColor, 
            backgroundColor:backgroundColor, 
            boxShadow: isShadow ? boxShadow : "none"}} 
            className={`corner_curve_card ${className ? className : ""}`}
        >
            <div className="corner_curve_card_innr">
                {children}
            </div>
        </div>
    )
}