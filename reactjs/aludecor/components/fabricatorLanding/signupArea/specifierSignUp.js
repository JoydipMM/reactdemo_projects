import AnimatedText from "@/components/Framemotion/framemotion";
import signupAreastyle from "@/components/fabricatorLanding/signupArea/signupArea.module.css";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import JoiningForm from "@/helper/joiningForm";

export default function SpecifierSignUp({ introductionData }) {
  const allData = introductionData?.data?.content;
  // console.log("allData", allData);
  return (
    <>
      <section>
        <div className="container">
          <div className="topadding_top">
            <div className={`${signupAreastyle.sswraper} sswraper`}>
              <div className="sstextpart">
                <h2>
                  <AnimatedText text={allData?.heading} />
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: allData?.description }}
                ></div>
                <Link
                  href={allData?.button_url == "" ? "#" : allData?.button_url}
                  className="common-btn"
                >
                  <label>
                    Download APP{" "}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt="arrow-right"
                    />
                  </label>
                </Link>
              </div>
              <JoiningForm type="specifiers" />
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
