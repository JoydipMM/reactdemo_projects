import { Link } from "react-router-dom";

export default function BrandLogoCard({ className, image="/default/default-logo.svg", link="", target="", title="default logo" }){
    return(<>
    {!link && <div className={`brand_logo_card ${className ? className : ""}`}>
        <img src={image} alt={title} />
    </div> }
    {link && <Link className={`brand_logo_card ${className ? className : ""}`} to={link} target={target}>
        <img src={image} alt={title} />
    </Link> }
    </>)
}