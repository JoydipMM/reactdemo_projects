"use client";
import Link from "next/link";
import readystyles from "@/components/Projectsgallery/ready-work/ready.module.css";
import needhelpstyles from "../needhelp/needhelp.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function NeedHelp() {

    return (
        <>
            <section className="topadding_bottom">

                <div className="container">
                    <div className={`${readystyles.readywrk} ${needhelpstyles.readywrk}`}>
                    <div className={`${readystyles.readyleft} ${needhelpstyles.readyleft}`}>
                            <h2><AnimatedText text="Need help? Reach out to our technical team for assistance." /></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>

                            <Link href="#" className="common-btn"> <label> Contact us <Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label></Link>

                        </div>
                        <div className={`${readystyles.readyrit} ${needhelpstyles.readyrit} hoverarea`}>
                            <div className="brands">
                                <Image fill={true} src="/images/brand-star.svg" alt="" />
                            </div>
                            <div className="readtframe">
                                <Image fill={true} src="/images/readywork-frame.svg" alt="" />
                            </div>
                            <Image fill={true} src="/images/readywork.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}