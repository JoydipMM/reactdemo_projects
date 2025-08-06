import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";

export default function Resourcescontent({ resourceInfoData }) {
  const allResourceInfo = resourceInfoData?.data?.content;
  const allResourceDatas = allResourceInfo?.resource_info;
  //console.log("resourceInfoData", resourceInfoData);
  return (
    <section>
      <div className="container">
        <div className="topadding_bottom">
          {allResourceDatas &&
            allResourceDatas.map((allResourceData, index) => {
              let buttonLink = allResourceData?.button_link;
              return (
                <div className="sswraper" key={`resourceData-${index}`}>
                  <div className="sstextpart">
                    <h2>
                      <span>{allResourceData?.pre_heading}</span>
                      <AnimatedText text={allResourceData?.heading} />
                    </h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: allResourceData?.description
                      }}
                    ></p>

                    <Link
                      href={buttonLink == "" ? "#" : buttonLink}
                      className="common-btn"
                    >
                      <label>
                        {allResourceData?.button_name}
                        <Image
                          width={34}
                          height={16}
                          src="/images/arrow-right.svg"
                          alt=""
                        />
                      </label>
                    </Link>
                  </div>
                  <div className="ssimagepart hoverarea">
                    <Image
                      fill={true}
                      src={allResourceData?.image?.image_url}
                      alt="allResourceDataImage"
                      className="ssimage"
                    />
                    <div className="brands">
                      <Image fill={true} src="/images/brand-star.svg" alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
