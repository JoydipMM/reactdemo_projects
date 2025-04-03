"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomeFeedback() {
  return (
    <>
      <div className="colmn_head_ara colmn_head_btm_space post2"><span>Feedback</span></div>
          <div className="best_pack_full_box post2 feedbck_box_btm_space">
            <div className="event_full_box_innr">

            <div className="feedback_box">
                <div className="feedbck_hdtxt">Maecenas lectus sem, ultrices et scelerisque et</div>
                <div className="subtxt">Saswati Das - Kolkata</div>
            </div>
            <div className="feedback_box">
                <div className="feedbck_hdtxt">Maecenas lectus sem, ultrices et scelerisque et</div>
                <div className="subtxt">Saswati Das - Kolkata</div>
            </div>

            <div className="feeddash">&nbsp;</div>
            <Link href="#">More...</Link> 
            </div>
        </div>
    </>
  )
}
