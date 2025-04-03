"use client"
import Image from "next/image";
import Link from "next/link";

export default function HomeMemory(){
    return(<>
    <div className="colmn_head_ara colmn_head_btm_space wow fadeInLeft"><span>Memory</span></div>
    <div className="event_box_btm_space post2" style={{paddingTop:"5px", position:"relative"}}> 
    <Image src="/images/frame.png" alt="" title="" border="0" width={249} height={180} style={{float:"left", marginBottom:"10px"}} />
    </div>
    </>)
}