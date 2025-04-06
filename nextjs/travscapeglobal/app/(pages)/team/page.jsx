"use client";
import Image from "next/image";
import Link from "next/link";
import { InnerPage } from "../../../Components";



export default function page(){


    return(<> 
    <InnerPage>
    
    <div className="all_team_area">
        <div className="wrapper">


        <div className="team_mem_box">
            <div className="team_mem_pic_box"><Image src="/images/team-mem-1.png" width={200} height={200} alt="" /> <div className="pic_border"></div></div>
            <div className="team_dscriptn">
            <p className="tooltiptxt"> This is a page that was built and defined as homepage in the theme. Most elements below were created using provided shortcodes. You can then build up any page and post easily without touching many HTML tags. </p>
            </div>
            <h3>Name Surname</h3>
            <small>Team Lead</small>
        </div>

        <div className="team_mem_box">
            <div className="team_mem_pic_box"><Image src="/images/team-mem-1.png" width={200} height={200} alt="" /> <div className="pic_border"></div></div>
            <div className="team_dscriptn">
            <p className="tooltiptxt"> This is a page that was built and defined as homepage in the theme. Most elements below were created using provided shortcodes. You can then build up any page and post easily without touching many HTML tags. </p>
            </div>
            <h3>Name Surname</h3>
            <small>Team Lead</small>
        </div>


        </div>
    </div>

    </InnerPage>
    
    </>)


}