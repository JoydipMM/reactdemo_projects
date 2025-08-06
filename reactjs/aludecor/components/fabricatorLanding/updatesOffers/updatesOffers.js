import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import Image from "next/image";
import Link from "next/link";
import "react-tabs/style/react-tabs.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Updatesoffers({ updateData }) {
  const allData = updateData?.data?.content;
  const allUpdateDatas = allData?.items;
  return (
    <>
      <section
        className={`${ourprojectsstyles.Expl_metalmpwr} topadding_bottom`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <span>{allData?.perheading}</span>
            <AnimatedText text={allData?.heading} />
          </h2>
          <p
            style={{
              width: "80%",
              margin: "0 auto",
              textAlign: "center",
              marginBottom: "15px"
            }}
          >
            {allData?.subheading}
          </p>
          <div className={ourprojectsstyles.prjbox_wrp}>
            {allUpdateDatas?.map((allUpdateData, index) => (
              <div
                className={ourprojectsstyles.prj_innerbox}
                key={`allUpdateDataID-${index}`}
              >
                <div className={ourprojectsstyles.prj_innerbox_overlay}>
                  <div className={ourprojectsstyles.prj_overltitle}>
                    {allUpdateData?.title}
                  </div>
                  <div className={ourprojectsstyles.prj_overltxt}>
                    {allUpdateData?.description}
                  </div>
                  <Link
                    href={allUpdateData?.link == "" ? "#" : allUpdateData?.link}
                  >
                    <Image
                      src="/images/pause-circle.svg"
                      alt="Link"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
                <Image
                  src={allUpdateData?.image?.url}
                  alt="Projects"
                  fill={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
