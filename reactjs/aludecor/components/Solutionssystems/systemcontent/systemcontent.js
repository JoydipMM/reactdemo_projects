import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";

export default function Systemcontent({ systemProductData }) {
  const systemContentData = systemProductData.data?.content;
  const systemProductInfos = systemContentData?.product_info;

  return (
    <section>
      <div className="container">
        <div className="commonpadding">
          {systemProductInfos?.map((systemProductInfo, index) => {
            const systemImageUrl = systemProductInfo?.image?.url;
            return (
              <div className="sswraper" key={`systemproduct${index}`}>
                <div className="sstextpart">
                  <h2>
                    <AnimatedText text={systemProductInfo?.heading} />
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: systemProductInfo?.description
                    }}
                  />
                </div>
                {systemImageUrl ? (
                  <div className="ssimagepart">
                    <Image
                      fill={true}
                      src={systemProductInfo?.image?.url}
                      alt="mfrpic"
                      className="ssimage"
                    />
                    <div className="brands">
                      <Image
                        fill={true}
                        src="/images/brand-star.svg"
                        alt="brand-star"
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
