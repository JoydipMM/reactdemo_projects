import { Link } from "react-router-dom";

export default function Avater({className="", noImage, image, url="", target="", title="" }) {

    const getInitials = (name = "") => {
        if(!name) return;
        return name
            .trim()
            .split(" ")
            .slice(0, 2)
            .map(word => word[0].toUpperCase())
            .join("");
    };

     const dpName = getInitials(title);

    return (
        <>
        <div className={`avater_dp_frame ${className}`}>
            {url ? (
                <Link to={url} target={target} className="avater_link">
                {!noImage && image && <img src={image} alt={title} />}
                {noImage && <span className="avater_dp_name">{dpName}</span>}
                </Link>
            ) : (
                <>
                {!noImage && image && <img src={image} alt={title} />}
                {noImage && <span className="avater_dp_name">{dpName}</span>}
                </>
            )}
        </div>
        </>
    )
}