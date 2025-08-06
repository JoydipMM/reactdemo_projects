
import Image from "next/image";
import asheetsstyles from "@/components/cleaningAndMaintenance/acpSheets/acpSheets.module.css"
import AnimatedText from "@/components/Framemotion/framemotion";
export default function AcpSheets() {
    return (
        <>
            <section>
                <div className="container">

                    <div className={asheetsstyles.sheetwrp}>

                        <div className={asheetsstyles.sheetbox}>
                            <div className={asheetsstyles.sheetimcont}>
                                <Image fill={true} src="/images/acpsheet_img1.png" alt="" />
                            </div>
                            <h3><AnimatedText text="Composition"/></h3>
                            <p>Detail the layers and materials that constitute ACP, emphasizing the aluminium layers and core material</p>
                        </div>

                        <div className={asheetsstyles.sheetbox}>
                            <div className={asheetsstyles.sheetimcont}>
                                <Image fill={true} src="/images/acpsheet_img2.png" alt="" />
                            </div>
                            <h3><AnimatedText text="Properties"/></h3>
                            <p>Discuss key characteristics such as durability, flexibility, weather resistance, and aesthetic appeal.</p>
                        </div>

                        <div className={asheetsstyles.sheetbox}>
                            <div className={asheetsstyles.sheetimcont}>
                                <Image fill={true} src="/images/acpsheet_img3.png" alt="" />
                            </div>
                            <h3><AnimatedText text="Applications"/></h3>
                            <p>List common uses, including exterior cladding, interior decoration, signage, and more.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}