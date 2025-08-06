"use client";
import Link from "next/link";
import needstyles from "../needHelp/needHelp.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function NeedHelp() {

    return (
        <>
            <section className="commonpadding">

                <div className="container">
                    <div className={needstyles.readywrk}>
                        <div className={needstyles.readyleft}>
                            <h2><AnimatedText text="Need help? Reach out to our technical team for assistance." /></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>

                            <Link href="#" className="common-btn"> <label> Contact us <Image width={34} height={16} src="/images/arrow-right.svg" alt="" /></label></Link>

                        </div>
                        <div className={`${needstyles.readyrit} hoverarea`}>
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