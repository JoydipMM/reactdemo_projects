"use client";
import Image from "next/image";
import Link from "next/link";
import InnerPage from "../../Components/common/InnerPage";



export default function page(){


    return(<> 
    <InnerPage>
    
    <div className="about_lft">
        <div className="about_hdtxt">About Us</div>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
    </div>


    <div className="about_rgt">
        <div className="about_hdtxt">Mission & Vision</div>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
    </div>

    </InnerPage>
    
    </>)


}