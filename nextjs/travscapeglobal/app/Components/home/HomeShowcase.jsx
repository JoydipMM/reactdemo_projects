"use client"
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeShowcase() {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <>
      <div className="facilits_full_box wow fadeInLeft">
            <div className="colmn_head_ara colmn_head_btm_space"><span>Showcase</span></div>
            
            <div className="best_pack_full_box post2 feedbck_box_btm_space">
            <div className="showcaseArea">
            
            <div className="slideshow_wrap"> 
                <Slider className="_slideshow" {...settings}>
                <div className="slide"><Image width={249} height={180} src="/images/showcase-1.jpg" alt="" border="0"/><p>Travscape on top of Bhagirathi II.</p></div> 
                <div className="slide"><Image width={249} height={180} src="/images/showcase-2.jpg" alt="" border="0"/><p>Bhagirathi II conquered by Travscape.</p></div> 
              </Slider>
            </div>
            
            
            </div>
            </div>
            
            
            
          </div>
    </>
  )
}
