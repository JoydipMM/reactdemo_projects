

import AnimatedText from "@/components/Framemotion/framemotion";
import maintenancestyles from "@/components/cleaningAndMaintenance/maintenance/maintenance.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
export default function Maintenance() {

    const aftercare = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,

        responsive: [

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className="slidergallery topadding_top">
                <div className="container">
                    <h2 className="titlecenter"><span>Explore Our manufacturing</span>
                        <AnimatedText text="Maintenance and Aftercare" />
                    </h2>
                    <div className={maintenancestyles.maint_slider}>
                        <Slider {...aftercare} className="commonSlider">

                            <div className={maintenancestyles.maintmainbox}>
                                <div className={`${maintenancestyles.maint_innerbox} hoverarea`}>
                                    <div className="brands">
                                        <Image fill={true} src="/images/brand-star.svg" alt="" />
                                    </div>

                                    <Image src="/images/cean_procedure.png" alt="Projects" fill={true} />

                                </div>
                                <h3>Cleaning Procedures</h3>
                                <p>Recommend appropriate cleaning agents and methods to maintain the appearance and longevity of ACP installations.</p>
                                <Link href="#" className="common-btn">
                                    <label>
                                        Read more
                                        <Image
                                            width={34}
                                            height={16}
                                            src="/images/arrow-right.svg"
                                            alt="arrow-right"
                                        />
                                    </label>
                                </Link>
                            </div>

                            <div className={maintenancestyles.maintmainbox}>
                                <div className={`${maintenancestyles.maint_innerbox} hoverarea`}>
                                    <div className="brands">
                                        <Image fill={true} src="/images/brand-star.svg" alt="" />
                                    </div>

                                    <Image src="/images/inspection.png" alt="Projects" fill={true} />

                                </div>
                                <h3>Cleaning Procedures</h3>
                                <p>Recommend appropriate cleaning agents and methods to maintain the appearance and longevity of ACP installations.</p>
                                <Link href="#" className="common-btn">
                                    <label>
                                        Read more
                                        <Image
                                            width={34}
                                            height={16}
                                            src="/images/arrow-right.svg"
                                            alt="arrow-right"
                                        />
                                    </label>
                                </Link>
                            </div>


                            <div className={maintenancestyles.maintmainbox}>
                                <div className={`${maintenancestyles.maint_innerbox} hoverarea`}>
                                    <div className="brands">
                                        <Image fill={true} src="/images/brand-star.svg" alt="" />
                                    </div>

                                    <Image src="/images/cean_procedure.png" alt="Projects" fill={true} />

                                </div>
                                <h3>Cleaning Procedures</h3>
                                <p>Recommend appropriate cleaning agents and methods to maintain the appearance and longevity of ACP installations.</p>
                                <Link href="#" className="common-btn">
                                    <label>
                                        Read more
                                        <Image
                                            width={34}
                                            height={16}
                                            src="/images/arrow-right.svg"
                                            alt="arrow-right"
                                        />
                                    </label>
                                </Link>
                            </div>

                            <div className={maintenancestyles.maintmainbox}>
                                <div className={`${maintenancestyles.maint_innerbox} hoverarea`}>
                                    <div className="brands">
                                        <Image fill={true} src="/images/brand-star.svg" alt="" />
                                    </div>

                                    <Image src="/images/inspection.png" alt="Projects" fill={true} />

                                </div>
                                <h3>Cleaning Procedures</h3>
                                <p>Recommend appropriate cleaning agents and methods to maintain the appearance and longevity of ACP installations.</p>
                                <Link href="#" className="common-btn">
                                    <label>
                                        Read more
                                        <Image
                                            width={34}
                                            height={16}
                                            src="/images/arrow-right.svg"
                                            alt="arrow-right"
                                        />
                                    </label>
                                </Link>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}