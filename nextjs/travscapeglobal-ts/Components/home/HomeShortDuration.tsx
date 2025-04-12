"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomeShortDuration(){
    return(<>
    <div className="colmn_head_ara colmn_head_btm_space post4"><span>Short Duration</span></div>
    <div className="best_pack_full_box event_box_btm_space post4">
        <div className="best_pack_full_box_innr">

            <div className="best_pack_box">
                <div className="best_pack_pic_area">
                    <div className="image_ara"><Image src="/images/best_pack_1.png" width={100} height={100}  alt="" title="" /></div>
                    <div className="textarea">
                        <h6>Kutch - Gujrat</h6>
                        <span>3 days 2Nights</span>
                        <p>You take the good, you take the bad, you take them both and there you have the facts of life, </p>
                        <Link href={"#"}>More...</Link>
                    </div>
                </div>
            </div>

            <div className="best_pack_box">
                <div className="best_pack_tag"><Image src="/images/upcoming-tag-2.png" alt=""  width={100} height={15} /></div>
                <div className="best_pack_pic_area">
                    <div className="image_ara"><Image src="/images/best_pack_1.png" width={100} height={100}  alt="" title="" /></div>
                    <div className="textarea">
                        <h6>Kutch - Gujrat</h6>
                        <span>3 days 2Nights</span>
                        <p>You take the good, you take the bad, you take them both and there you have the facts of life, </p>
                        <Link href={"#"}>More...</Link>
                    </div>
                </div>
            </div>

            <Link className="best_view_all" href="#">View All</Link>
        </div>
    </div>
    </>)
}