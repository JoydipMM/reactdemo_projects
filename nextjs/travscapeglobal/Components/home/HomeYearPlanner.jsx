"use client";
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeYearPlanner(){
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(<>
    <div className="colmn_head_ara colmn_head_btm_space post2a"><span>Year Planner</span></div>
    <div className="yr_plnr event_box_btm_space">
        {/* <div className="slider planner"> */}

        <Slider className="slider planner" {...settings}>
            <div>
                <Link href="#" className="html5lightbox">
                <Image src="/images/planner-2019.jpg" alt="" width={300} height={300}/> </Link>
                <div className="ovrlytxt">Trek planner 2019</div>
            </div>
            <div>
                <Link href="#" className="html5lightbox">
                <Image src="/images/planner-2019.jpg" alt="" width={300} height={300}/> </Link>
                <div className="ovrlytxt">Trek planner 2019</div>
            </div>
        </Slider>

        {/* </div> */}
    </div>
    </>)
}