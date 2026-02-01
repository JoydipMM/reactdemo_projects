import { Link } from "react-router-dom";
const logo = "/images/soultrove-logo.svg";

export default function MainLogo({ className="", image, url="", target="", title="" }) {
    return (
        <>
            <Link to={url} target={target} className={`main_logo ${className}`}><img src={image ? image : logo} alt={title} /></Link>
        </>
    )
}