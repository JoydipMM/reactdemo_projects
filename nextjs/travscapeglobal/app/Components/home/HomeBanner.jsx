"use client"
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeBanner() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return(<>
    <div className="home-slider-area">
    <Slider className="slick-animated-slider" {...settings}>


        <div className="slick-animated-slide-wrap">
            <div className="slick-content-area">
                <div className="container">
                <div className="animated" data-animation-in="fadeInUp"><h3 className="subheading">Ladakh</h3></div>
                <div className="animated" data-animation-in="bounceInLeft" data-delay-in="0.4"><h3 className="heading">Ladakh <span>Festival</span></h3></div>
                <p className="animated" data-animation-in="bounceInRight" data-delay-in="0.9">Ladakh festival is celebrated every year in Leh and its villages. Inauguration ceremony takes place in Leh with a procession with cultural troupes from different part of the region... </p>
                <div className="animated" data-animation-in="flipInY" data-delay-in="1.5"><Link href="http://travscapeglobal.com/tour_detail.php?tourid=MzA=" className="link">EXPLORE NOW</Link></div>
                </div>
            </div>
            <div className="slider-overlay"></div>
            <Image src="/images/new-banner/ladakh-01.jpg" alt="" width={1000} height={300} className="slider-banner-image animatedBg" />
        </div>


        <div className="slick-animated-slide-wrap">
            <div className="slick-content-area">
                <div className="container">
                <div className="animated" data-animation-in="fadeInUp"><h3 className="subheading">Ladakh</h3></div>
                <div className="animated" data-animation-in="bounceInLeft" data-delay-in="0.4"><h3 className="heading">Ladakh <span>Festival</span></h3></div>
                <p className="animated" data-animation-in="bounceInRight" data-delay-in="0.9">Ladakh festival is celebrated every year in Leh and its villages. Inauguration ceremony takes place in Leh with a procession with cultural troupes from different part of the region... </p>
                <div className="animated" data-animation-in="flipInY" data-delay-in="1.5"><Link href="http://travscapeglobal.com/tour_detail.php?tourid=MzA=" className="link">EXPLORE NOW</Link></div>
                </div>
            </div>
            <div className="slider-overlay"></div>
            <Image src="/images/new-banner/ladakh-01.jpg" alt="" width={1000} height={300} className="slider-banner-image animatedBg" />
        </div>
      
    </Slider>
    </div>
    </>)
}