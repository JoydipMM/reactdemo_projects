
export default function BrandLogoCard({ className, image="/default/default-logo.svg", title="default logo" }){
    return(<>
    <div className={`brand_logo_card ${className ? className : ""}`}>
        <img src={image} alt={title} />
    </div>
    </>)
}