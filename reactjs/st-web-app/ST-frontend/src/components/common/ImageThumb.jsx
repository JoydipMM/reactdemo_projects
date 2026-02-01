const thumbImage = "/vite.svg";

export default function ImageThumb({className="", url=thumbImage, title=""}){
    return (
        <>
        <div className={`thumb_img_frame ${className || ""}`}>
         <img src={url ? url : thumbImage } alt={title} />
        </div>
        </>
    )
}