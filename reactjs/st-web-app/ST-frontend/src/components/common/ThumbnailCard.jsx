import { Link } from "react-router-dom";
import ImageThumb from "./ImageThumb";

export default function ThumbnailCard({ className="", imageUrl="", title="title", description="description", url="" }) {
    return(
        <div className={`thumbnail_card ${className || ""}`}>
            {url && <Link to={url} className="card_link"></Link> }
            <ImageThumb className="card_thumb" url={imageUrl} />
            <div className="card_innfo_contnt">
                { title && <h2 className="card_title">{title}</h2>}
                {description && <p className="card_description">{description}</p> }
            </div>
        </div>
    )
}