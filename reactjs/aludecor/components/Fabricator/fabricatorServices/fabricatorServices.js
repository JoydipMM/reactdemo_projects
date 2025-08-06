import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";

export default function Fabricatorservices({ serviceData }) {
  const allData = serviceData?.data?.content;
  return (
    <section>
      <div className="container">
        <div className="toppadding-bottom">
          <div className="sswraper">
            <div className="sstextpart">
              <h2>
                <AnimatedText text={allData?.title} />
              </h2>
              <div dangerouslySetInnerHTML={{ __html: allData?.content }}></div>
              <Link
                href={allData?.btn_url == "" ? "#" : allData?.btn_url}
                className="common-btn"
              >
                <label>
                  View More{" "}
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
              <Image
                width={841}
                height={841}
                src={allData?.image?.url}
                alt="img"
                className="ssimage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
