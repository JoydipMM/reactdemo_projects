"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomeFacilities() {
  return (
    <>
    <div className="facilits_full_box post2">
        <div className="colmn_head_ara colmn_head_btm_space"><span>Facilities</span></div>
        
        <div className="best_pack_full_box post2 feedbck_box_btm_space">

            {/* <div className="event_full_box_innr">
                <p>Facilities coming soon</p>
            </div>  */}


            <Link href="#" className="facility_box">
                <div className="facility_icon_area"><Image width={21} height={74} src="/images/facilities_images/facility_icon_2.png" border="0" alt="" title="" /></div>
                    <div className="facility_txtara">
                    <h3 className="fc_hdtxtxt">facility title</h3>
                    <p className="fc_subtxt">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                </div>
            </Link>

            <Link href="#" className="facility_box">
                <div className="facility_icon_area"><Image width={21} height={74} src="/images/facilities_images/facility_icon_3.png" border="0" alt="" title="" /></div>
                    <div className="facility_txtara">
                    <h3 className="fc_hdtxtxt">facility title</h3>
                    <p className="fc_subtxt">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                </div>
            </Link>

            <Link href="#" className="facility_box">
                <div className="facility_icon_area"><Image width={21} height={74} src="/images/facilities_images/facility_icon_5.png" border="0" alt="" title="" /></div>
                    <div className="facility_txtara">
                    <h3 className="fc_hdtxtxt">facility title</h3>
                    <p className="fc_subtxt">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                </div>
            </Link>

            <Link href="#" className="facility_box">
                <div className="facility_icon_area"><Image width={21} height={74} src="/images/facilities_images/facility_icon_5.png" border="0" alt="" title="" /></div>
                    <div className="facility_txtara">
                    <h3 className="fc_hdtxtxt">facility title</h3>
                    <p className="fc_subtxt">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                </div>
            </Link>


        </div>
    </div>
    </>
  )
}
