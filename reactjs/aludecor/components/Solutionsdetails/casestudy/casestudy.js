import Image from "next/image";
import Link from "next/link";
import casestudystyles from "../casestudy/casestudy.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Casestudy({ highlightData, contactCtaData }) {
  const allHighlightData = highlightData.data?.content;
  const allHighlightSubData = allHighlightData?.highlights;
  const allContactData = contactCtaData.data?.content;
  return (
    <section>
      <div className="container">
        <div className="commonpadding">
          <div className={`sswraper ${casestudystyles.sswraperflex}`}>
            <div className={`sstextpart ${casestudystyles.tablearea}`}>
              <h2>
                <span>{allHighlightData?.preheading}</span>
                <AnimatedText text={allHighlightData?.heading} />
              </h2>
              <div className="commontable-wrapper">
                <table className="commontable">
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{textAlign:'left'}}>
                        <strong>Project Highlights</strong>
                      </td>
                     
                    </tr>
                    <tr>
                      <td>Application :</td>
                      <td>{allHighlightSubData?.project_application}</td>
                    </tr>
                    <tr>
                      <td>Project :</td>
                      <td>{allHighlightSubData?.project_name}</td>
                    </tr>
                    <tr>
                      <td>Project Types :</td>
                      <td>{allHighlightSubData?.project_category}</td>
                    </tr>
                    <tr>
                      <td>States :</td>
                      <td>{allHighlightSubData?.project_states}</td>
                    </tr>
                    <tr>
                      <td>City :</td>
                      <td>{allHighlightSubData?.project_city}</td>
                    </tr>
                    <tr>
                      <td>Products used :</td>
                      <td>{allHighlightSubData?.product_used}</td>
                    </tr>
                    <tr>
                      <td>Sample Tag :</td>
                      <td>{allHighlightSubData?.sample_tag}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={`sstextpart ${casestudystyles.readyarea}`}>
              <Image
                fill={true}
                src="/images/solutions/ready-bg.png"
                alt="logo"
                title="logo"
              />
              <h2>
                <AnimatedText text={allContactData?.heading} />
              </h2>
              <p>{allContactData?.subheading}</p>
              <Link
                href={allContactData == "" ? "#" : allContactData?.contact_url}
                className="common-btn"
              >
                <label>
                  {" "}
                  Contact Us{" "}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt=""
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
