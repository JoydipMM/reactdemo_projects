"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomeTopDestination() {
  return (
    <>
    <div className="colmn_head_ara colmn_head_btm_space"><span>Top Destinations</span></div>
    <Link href="#" className="photo_frame_ara">
        <Image src="/images/46-TigerInSunderban.jpg" width={200} height={96} alt="" title="" border="0" />
        <span className="photoFrame_name">sandakphu<small>Highest Point in West Bengal, India.</small></span>
        <div className="upcoming-tag"><Image width={70} height={66} src="/images/upcoming-tag.png" alt="" border="0" /></div>
        <span className="photo_clip"><Image width={100} height={100} src="/images/clip.png" alt="" title="" border="0" /></span>
    </Link>
    <Link href="#" className="photo_frame_ara">
        <Image src="/images/46-TigerInSunderban.jpg" width={200} height={96} alt="" title="" border="0" />
        <span className="photoFrame_name">sandakphu<small>Highest Point in West Bengal, India.</small></span>
        <span className="photo_clip"><Image width={100} height={100} src="/images/clip.png" alt="" title="" border="0" /></span>
    </Link>
    <Link href="#" className="photo_frame_ara">
        <Image src="/images/46-TigerInSunderban.jpg" width={200} height={96} alt="" title="" border="0" />
        <span className="photoFrame_name">sandakphu<small>Highest Point in West Bengal, India.</small></span>
        <span className="photo_clip"><Image width={100} height={100} src="/images/clip.png" alt="" title="" border="0" /></span>
    </Link>

    <Link href="#" className="readmore photo_frame_btn_pose event_box_btm_space">View All</Link> 
    </>
  )
}
