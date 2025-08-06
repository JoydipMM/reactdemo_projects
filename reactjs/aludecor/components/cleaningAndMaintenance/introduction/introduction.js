
import AnimatedText from "@/components/Framemotion/framemotion";
import introstyles from "@/components/cleaningAndMaintenance/introduction/introduction.module.css"
import Link from "next/link";
import Image from "next/image";
export default function Introduction() {
    return (
        <>
            <section className="commonpadding">
                <div className="container">
                    <div className={introstyles.introwrp}>
                        <div className={`${introstyles.leftintro} ${introstyles.allcenter}`}>
                            <h2><AnimatedText text="Introduction" /></h2>
                            <p className={introstyles.titletxt}>
                                01 . Overview:</p>

                            <p>Introduce Aluminium Composite Panels (ACP), highlighting their versatility and applications in modern construction.</p>

                            <p className={introstyles.titletxt}>02 . Purpose of the Guide: </p>

                            <p>Explain the guide's objective—to equip fabricators with best practices, techniques, and insights for efficient ACP fabrication.
                            </p>
                            <Link href="#" className="common-btn" type="submit"> <label>Read More<Image width={34} height={16} src="/images/arrow-right.svg" alt="Arrow Btn Label" /></label></Link>
                        </div>
                        <div className={introstyles.leftintro}>
                        <Image fill={true} src="/images/intro_mcepedia.jpg" alt="" className={introstyles.img_w} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}