"use client";
import Image from "next/image";
import Link from "next/link";
import InnerPage from "../Components/common/InnerPage";



export default function page(){


    return(<> 
    <InnerPage>
    
    <div className="services_full_area">
        <div className="wrapper">

        <div className="service_box">
            <div className="service_img_box"><Image src="/images/service-icon-2.png" border="0" alt="" width={100} height={100} /></div>
            <h3>Hill Working</h3>
            <small></small>
            <p>You take the good, you take the bad, you take them both and there you have the facts of life, the facts of life. There's a time you got to go and show You take the good, you take the bad, you take them both and there you have the facts of life, the facts of life. You take the good,</p>
        </div>
        
        <div className="service_box">
            <div className="service_img_box"><Image src="/images/service-icon-2.png" border="0" alt="" width={100} height={100} /></div>
            <h3>Hill Working</h3>
            <small></small>
            <p>You take the good, you take the bad, you take them both and there you have the facts of life, the facts of life. There's a time you got to go and show You take the good, you take the bad, you take them both and there you have the facts of life, the facts of life. You take the good,</p>
        </div>



        </div>
    </div>

    </InnerPage>
    
    </>)


}