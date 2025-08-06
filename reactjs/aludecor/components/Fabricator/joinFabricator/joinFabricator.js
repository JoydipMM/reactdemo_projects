import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";
import Video from "../video/video";

export default function Joinfabricator({ fabIntroData }) {
  const allData = fabIntroData?.data?.content;
  return (
    <section>
      <div className="container">
        <div className="topadding_bottom">
          <div className="sswraper">
            <div className="sstextpart">
              <h2>
                <AnimatedText text={allData?.heading} />
              </h2>
              <div dangerouslySetInnerHTML={{ __html: allData?.content }}></div>
              <Link
                href={allData?.btn_link == "" ? "#" : allData?.btn_link}
                className="common-btn"
              >
                <label>
                  Join Now{" "}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                  />
                </label>
              </Link>
            </div>

            <div className="ssimagepart">
              <Video videoUrl={allData?.vieo_url} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
