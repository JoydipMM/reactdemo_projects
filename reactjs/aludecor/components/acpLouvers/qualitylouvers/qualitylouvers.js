import AnimatedText from "@/components/Framemotion/framemotion";
import Link from "next/link";
import Image from "next/image";
import qualitylouvers from "@/components/acpLouvers/qualitylouvers/qualitylouvers.module.css";
export default function QualityLouvers({ shadesData }) {
  const allShadesData = shadesData?.data?.content;
  const shadeContent = allShadesData?.content;
  return (
    <>
      <section className="center">
        <div className="container">
          <div className={`${qualitylouvers.txt_content}`}>
            <p dangerouslySetInnerHTML={{ __html: shadeContent }}></p>
          </div>
        </div>
      </section>
    </>
  );
}
