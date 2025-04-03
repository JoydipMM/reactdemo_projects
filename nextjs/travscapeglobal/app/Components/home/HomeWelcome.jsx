"use client"
import Image from "next/image";
import Link from "next/link";


export default function HomeWelcome(){
    return(
        <>
        <div className="welcome_txt_area post4">
            <div className="wrapper">
                <div className="welcome_inner_area ontywelcm">
                    <div className="heading_bg"><span>Welcome To Travscape<small>Travscape Global Solution Pvt. Ltd.</small></span></div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                
                    {/* <Link href="#" className="readmore readmore_pose">Read more</Link> */}
                </div>
            </div>
        </div>
        
        </>
    );
}
