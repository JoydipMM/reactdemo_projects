import Link from "next/link";
import supportstyles from "../leftSupport/leftSupport.module.css"
import Image from "next/image";
import AnimatedText from "../Framemotion/framemotion";

export default function LeftSupport() {
    return (
        <>
            <div className={supportstyles.leftsupport}>
                <div className={supportstyles.callsec} >
                    <h2><AnimatedText text="Call us" /></h2>
                    <div className={supportstyles.callsec}>
                        <p>General and Product Enquiries</p>
                        <p> Monday - Friday</p>
                        <p>8:00am  - 5:00pm (AEST)</p>
                    </div>
                    <div className={supportstyles.tollsuprt}>1800 102 0407 (toll-free) (India Only) </div>
                    <div className={supportstyles.emailsuprt}> Email :  <Link href="mailto:info@aludecor.com">info@aludecor.com</Link></div>

                </div>

                <div className={supportstyles.calllink}>
                    <ul>
                        <li><Link href="#">Warranty</Link></li>
                        <li><Link href="#">Useful Links</Link></li>
                        <li className={supportstyles.linkgap}>MCPedia
                            <ul>
                                <li><Link href="#">Fabrication Guide</Link></li>
                                <li><Link href="#">Product Handling Guide</Link></li>
                                <li><Link href="#">Cleaning & Maintenance</Link></li>
                            </ul>
                        </li>

                        <li><Link href="#">FAQs</Link></li>
                    </ul>

                </div>

                <Link href="#" className="common-btn">
                    <label>Contact us
                        <Image
                            width={34}
                            height={16}
                            src="/images/arrow-right.svg"
                            alt=""
                        />
                    </label>
                </Link>

            </div>
        </>
    );
}