const bannerImage = "/images/default-banner.jpg";

export default function Banner({className="", url=bannerImage, title=""}){
    return (
        <>
        <div className={`${className || "banner_section"}`}>
         <img src={url ? url : bannerImage } alt={title} />
        </div>
        </>
    )
}