import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";

export default function Ourcmd({ innerData }) {
  const allCmdData = innerData.data?.content;
  return (
    <section>
      <div className="container">
        <div className="commonpadding">
          <div className="sswraper">
            <div className="ssimagepart hoverarea">
              <Image
                fill={true}
                src={allCmdData?.image?.url}
                alt="mprofile"
                className="ssimage"
              />
            </div>
            <div className="sstextpart">
              <h2>
                <AnimatedText text={allCmdData?.heading} />
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: allCmdData?.description }}
              ></div>

              <Link
                href={
                  allCmdData?.button_link == "" ? "#" : allCmdData?.button_link
                }
                className="common-btn"
              >
                <label>
                  {allCmdData?.button_name}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                  />
                </label>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
