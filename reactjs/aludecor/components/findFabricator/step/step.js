import AnimatedText from "@/components/Framemotion/framemotion";
import stepstyle from "@/components/findFabricator/step/step.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Step() {

    return (
        <>
            <section className="topadding_bottom">
                <div className="container">
                    <div className={`${stepstyle.steparea} ${stepstyle.steppadding}`}>
                        <div className={`${stepstyle.stepwrp}`}>
                            <Link href="#" >
                                <div className={`${stepstyle.stepimg} borderradius`}>
                                <Image fill={true} src="/images/solutions/pro-1.jpg" alt="" />
                                </div> 
                                <h3>Exterior</h3>
                            </Link>
                        </div> 
                        <div className={`${stepstyle.stepwrp}`}>
                            <Link href="#" >
                                <div className={`${stepstyle.stepimg} borderradius`}>
                                <Image fill={true} src="/images/findfabricator/interior-1.png" alt="" />
                                </div> 
                                <h3>Interior</h3>
                            </Link>
                        </div>
                        <div className={`${stepstyle.stepwrp} ${stepstyle.steptxt}`}>
                            <h2>Step 01</h2>
                            <h3>Where would you like to use the product</h3>
                            <div className="btnwrp">
                                    <Link href="#" className="common-btn purple">
                                    <label> Next Step <Image  width={34} height={16}  src="/images/arrow-right.svg" alt="arrow-right" /></label>
                                    </Link>
                                    <Link href="#" className="common-btn">
                                    <label>Skip <Image  width={34} height={16}  src="/images/arrow-right.svg" alt="arrow-right" /></label>
                                    </Link>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
  
        </>
    );
}