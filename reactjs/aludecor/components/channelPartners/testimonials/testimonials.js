import Image from "next/image";
import testmonialscptyles from "@/components/channelPartners/testimonials/testimnials.module.css";
import { useState } from "react";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Testimonials() {
    const [isOpenModal1, setIsOpenModal1] = useState(false);
    const [isOpenModal2, setIsOpenModal2] = useState(false);
    const [isOpenModal3, setIsOpenModal3] = useState(false);
    const [isOpenModal4, setIsOpenModal4] = useState(false);
    return (
        <>
            <section className={testmonialscptyles.vid_expmpper}>
                <div className="container">
                    <h2 className="centertie">
                        <span>Fabricators Love Aludecor Stars!</span>
                        <AnimatedText text="Dealer Testimonials & Success Stories" />
                    </h2>
                    <div className={testmonialscptyles.vid_explore_mper}>
                        <div className={testmonialscptyles.explorevidbox}>
                            <div className={testmonialscptyles.exploreimgcont}>
                                <div
                                    className={testmonialscptyles.overlay_vidiconexp}
                                    onClick={() => setIsOpenModal1(true)}
                                >
                                    <Image
                                        src="/images/overlay_vidicon.svg"
                                        alt=""
                                        width={61}
                                        height={61}
                                    />
                                </div>
                                <Image src="/images/step1_vid.png" alt="" fill={true} />
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar vitae neque sed malesuada.
                            </p>
                            <div className={testmonialscptyles.testim_wrpbox}>
                                <Image src="/images/testimonial_icon.svg" alt="" width={60} height={60} />
                                <div className={testmonialscptyles.testim_wrpbox_desc}>
                                    <p>– Ar. Priya Kapoor, </p>
                                    <p>Lead Architect, </p>
                                    <p>Urban Spaces Studio</p>
                                </div>
                            </div>
                        </div>

                        <div className={testmonialscptyles.explorevidbox}>
                            <div className={testmonialscptyles.exploreimgcont}>
                                <div
                                    className={testmonialscptyles.overlay_vidiconexp}
                                    onClick={() => setIsOpenModal2(true)}
                                >
                                    <Image
                                        src="/images/overlay_vidicon.svg"
                                        alt=""
                                        width={61}
                                        height={61}
                                    />
                                </div>
                                <Image src="/images/step2_vid.png" alt="" fill={true} />
                            </div>
                           
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar vitae neque sed malesuada.
                            </p>
                            <div className={testmonialscptyles.testim_wrpbox}>
                                <Image src="/images/testimonial_icon.svg" alt="" width={60} height={60} />
                                <div className={testmonialscptyles.testim_wrpbox_desc}>
                                    <p>– Ar. Priya Kapoor, </p>
                                    <p>Lead Architect, </p>
                                    <p>Urban Spaces Studio</p>
                                </div>
                            </div>
                        </div>

                        <div className={testmonialscptyles.explorevidbox}>
                            <div className={testmonialscptyles.exploreimgcont}>
                                <div
                                    className={testmonialscptyles.overlay_vidiconexp}
                                    onClick={() => setIsOpenModal3(true)}
                                >
                                    <Image
                                        src="/images/overlay_vidicon.svg"
                                        alt=""
                                        width={61}
                                        height={61}
                                    />
                                </div>
                                <Image src="/images/step3_vid.png" alt="" fill={true} />
                            </div>
                           
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar vitae neque sed malesuada.
                            </p>
                            <div className={testmonialscptyles.testim_wrpbox}>
                                <Image src="/images/testimonial_icon.svg" alt="" width={60} height={60} />
                                <div className={testmonialscptyles.testim_wrpbox_desc}>
                                    <p>– Ar. Priya Kapoor, </p>
                                    <p>Lead Architect, </p>
                                    <p>Urban Spaces Studio</p>
                                </div>
                            </div>
                        </div>

                        <div className={testmonialscptyles.explorevidbox}>
                            <div className={testmonialscptyles.exploreimgcont}>
                                <div
                                    className={testmonialscptyles.overlay_vidiconexp}
                                    onClick={() => setIsOpenModal4(true)}
                                >
                                    <Image
                                        src="/images/overlay_vidicon.svg"
                                        alt=""
                                        width={61}
                                        height={61}
                                    />
                                </div>
                                <Image src="/images/step4_vid.png" alt="" fill={true} />
                            </div>
                            
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar vitae neque sed malesuada.
                            </p>
                            <div className={testmonialscptyles.testim_wrpbox}>
                                <Image src="/images/testimonial_icon.svg" alt="" width={60} height={60} />
                                <div className={testmonialscptyles.testim_wrpbox_desc}>
                                    <p>– Ar. Priya Kapoor, </p>
                                    <p>Lead Architect, </p>
                                    <p>Urban Spaces Studio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ...........modal 1 start........... */}
            {isOpenModal1 && (
                <div className={testmonialscptyles.modalwrper}>
                    <div className={testmonialscptyles.vidmodal_mwrp}>
                        <button
                            onClick={() => setIsOpenModal1(false)}
                            className={testmonialscptyles.close_popup}
                        >
                            Close
                        </button>
                        <div className={testmonialscptyles.video_modalcont}>
                            <iframe
                                src="https://www.youtube.com/embed/q6bdXAYk52k&rel=0"
                                height="300"
                                width="100%"
                                title="Aludecor Video"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
            {/* ...........modal 1 ends........... */}
            {/* ...........modal 2 starts........... */}
            {isOpenModal2 && (
                <div className={testmonialscptyles.modalwrper}>
                    <div className={testmonialscptyles.vidmodal_mwrp}>
                        <button
                            onClick={() => setIsOpenModal2(false)}
                            className={testmonialscptyles.close_popup}
                        >
                            Close
                        </button>
                        <div className={testmonialscptyles.video_modalcont}>
                            <iframe
                                src="https://www.youtube.com/embed/q6bdXAYk52k&rel=0"
                                height="300"
                                width="100%"
                                title="Aludecor Video"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
            {/* ...........modal 2 ends........... */}

            {/* ...........modal 3 starts........... */}
            {isOpenModal3 && (
                <div className={testmonialscptyles.modalwrper}>
                    <div className={testmonialscptyles.vidmodal_mwrp}>
                        <button
                            onClick={() => setIsOpenModal3(false)}
                            className={testmonialscptyles.close_popup}
                        >
                            Close
                        </button>
                        <div className={testmonialscptyles.video_modalcont}>
                            <iframe
                                src="https://www.youtube.com/embed/q6bdXAYk52k&rel=0"
                                height="300"
                                width="100%"
                                title="Aludecor Video"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
            {/* ...........modal 3 ends........... */}

            {/* ...........modal 4 starts........... */}
            {isOpenModal4 && (
                <div className={testmonialscptyles.modalwrper}>
                    <div className={testmonialscptyles.vidmodal_mwrp}>
                        <button
                            onClick={() => setIsOpenModal4(false)}
                            className={testmonialscptyles.close_popup}
                        >
                            Close
                        </button>
                        <div className={testmonialscptyles.video_modalcont}>
                            <iframe
                                src="https://www.youtube.com/embed/q6bdXAYk52k&rel=0"
                                height="300"
                                width="100%"
                                title="Aludecor Video"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
            {/* ...........modal 4 ends........... */}
        </>
    );
}