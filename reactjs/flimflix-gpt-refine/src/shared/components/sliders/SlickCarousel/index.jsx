import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const defaultSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
};

export default function SlickCarousel({className="", children, settings}) {
    return (
        <>
        <div className={`common_slider_wrapper ${className ? className : ""}`}>
            <Slider className={`sl_slick_carousel`} {...(settings || defaultSettings)}>
                {children}
            </Slider>
        </div>
        </>
    )
}
