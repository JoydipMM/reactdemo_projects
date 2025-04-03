"use client";
import Image from "next/image";
import Link from "next/link";
import { InnerPage } from "../../Components";



export default function page() {


    return (<>
        <InnerPage>

            <div className="full_photo_area">
                <div className="wrapper">

                    <div className="gallery_prt_blog">
                        <h3>Tour name</h3>
                        <div>
                            <div className="owl-demo owl-carousel">
                                <div className="item">
                                    <Link href="#" className="html5lightbox photo_box">
                                    Photo
                                        {/* <Image src="adminpanel/image_gallery/<?php echo $img_glry_rows2['img_glry_img_path']; ?>" border="0"/> */}
                                        {/* <span className="photo_over"><i className="icon-search"></i></span> */}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gallery_prt_blog">
                        <h3>Tour name</h3>
                        <div>
                            <div className="owl-demo owl-carousel">
                                <div className="item">
                                    <Link href="#" className="html5lightbox photo_box">
                                    Photo
                                        {/* <Image src="adminpanel/image_gallery/<?php echo $img_glry_rows2['img_glry_img_path']; ?>" border="0"/> */}
                                        {/* <span className="photo_over"><i className="icon-search"></i></span> */}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </InnerPage>

    </>)


}