"use client";
import Image from "next/image";
import Link from "next/link";

// import HeaderNav from "./HeaderNav";
// pageTitle, pageDescription, bannerImage, className,
export default function InnerPage({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(<>
    
    <div className="banner_area_with_menu">
        {/* <div className="inner_page_menu_holder">
            <HeaderNav/>
        </div> */}
        <div className="inner_banner">
            <Image src="/images/inner_banner.png" fill={true} alt="" title="" />
        </div>

    </div>

    <div className="body_content_area wow fadeInLeft">

        <div className="welcome_txt_area">
            <div className="wrapper">
                <div className="welcome_inner_area">
                    <div className="heading_bg"><span>Page Heading<small>Subtitle</small></span></div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                </div>
            </div>
        </div>


        <div className="inner_cont_area">
            <div className="wrapper">
                {children}
            </div>
        </div>

    </div>
    </>)
}