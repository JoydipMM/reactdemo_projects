import AnimatedText from "@/components/Framemotion/framemotion";
import varbenstyles from "@/components/zincSolidPanels/variousBenefits/variousBenefits.module.css"
import Image from "next/image";
export default function VariousBenefits() {
    return (
        <>
            <section className={`${varbenstyles.adv_zinc_mwrper} `}>
                <div className="container">
                    <h2 className="titlecenter"><AnimatedText text="There are various benefits of using zinc as exterior façade cladding, including" /></h2>
                    <div className={varbenstyles.adv_iconwrpmain}>
                        <div className={varbenstyles.adv_iconwrp}>
                            <Image width={57} height={57} src="/images/key_icon.svg" alt="Aludecor Zinc Solid" />
                            <p>Zinc is 100% recyclable, providing the structure with a contemporary appearance.</p>
                        </div>

                        <div className={varbenstyles.adv_iconwrp}>
                            <Image width={57} height={57} src="/images/key_icon.svg" alt="Aludecor Zinc Solid" />
                            <p>Use distinctive zinc cladding to draw attention to specific places and impart a sense of exclusivity.</p>
                        </div>

                        <div className={varbenstyles.adv_iconwrp}>
                            <Image width={57} height={57} src="/images/key_icon.svg" alt="Aludecor Zinc Solid" />
                            <p>Zinc is simple to work with. Therefore, there are countless design options! Many different types of facades are covered in zinc.</p>
                        </div>

                        <div className={varbenstyles.adv_iconwrp}>
                            <Image width={57} height={57} src="/images/key_icon.svg" alt="Aludecor Zinc Solid" />
                            <p>A zinc façade has a long lifespan and requires no maintenance.</p>
                        </div>
                        

                    </div>                   


                </div>
            </section>
        </>
    );
}