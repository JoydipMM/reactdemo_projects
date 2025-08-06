"use client";
import { useEffect, useRef, useState } from "react";
import premiumsolutionsstyles from "@/components/Home/premiumSolutions/premiumSolutions.module.css";

import realstyles from "@/components/Bim/real-success/real.module.css";
import Image from "next/image";

import Link from "next/link";
import AnimatedText from "@/components/Framemotion/framemotion";
import Modal from "@/components/Modal/Modal";
import Requestquotehomeform from "@/components/Home/requestQuoteHome/requestQuoteHomeForm";

export default function RealSuccess({ projectsData }) {
  const allProjectData = projectsData?.data?.content;
  const getprojectsData = allProjectData?.projects;
  // console.log("allProjectData", getprojectsData);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null); // Track selected solution
  const frameAnimateRef = useRef(null);
  const [frameHeight, setFrameHeight] = useState("normal");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFrameHeight(premiumsolutionsstyles.frame_height);
          }
        });
      },
      { threshold: 0.5 } // 30% of the section must be visible
    );

    if (frameAnimateRef.current) {
      observer.observe(frameAnimateRef.current);
    }

    return () => {
      if (frameAnimateRef.current) {
        observer.unobserve(frameAnimateRef.current);
      }
    };
  }, []);

  return (
    <>
      <section
        className={`${premiumsolutionsstyles.premiumwrp} ${realstyles.realwrp} commonpadding`}
      >
        <div className="container">
          <h2 className="centertie">
            <span>{allProjectData?.pre_heading}</span>
            <AnimatedText text={allProjectData?.heading} />
          </h2>

          <div className={premiumsolutionsstyles.premium_boxwrp}>
            {getprojectsData &&
              getprojectsData.map((getprojectData, index) => {
                return (
                  <div
                    className={`${premiumsolutionsstyles.premiumboxcont} ${premiumsolutionsstyles.border_l}`}
                    ref={frameAnimateRef}
                    key={`projectData-${index}`}
                  >
                    {/* <div className={premiumsolutionsstyles.premiumboximgcont}> */}
                    <div
                      className={`${premiumsolutionsstyles.animate_frame} ${frameHeight}`}
                    >
                      <div className={premiumsolutionsstyles.brandin}>
                        <Image
                          src="/images/brandin_pic.svg"
                          alt="Brandin Solutions"
                          fill={true}
                        />
                      </div>
                      <Image
                        src={getprojectData?.image?.image_url}
                        alt="Animated"
                        fill={true}
                      />
                    </div>
                    <div className={premiumsolutionsstyles.premiumbox_textcont}>
                      <div className={premiumsolutionsstyles.boxpremium_left}>
                        <h3>{getprojectData?.title}</h3>
                        <p>{getprojectData?.description}</p>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedSolution(getprojectData);
                          setIsSecondModalOpen(true);
                        }}
                        className="common-btn"
                      >
                        <label>
                          {getprojectData?.button_txt}
                          <Image
                            width={34}
                            height={16}
                            src="/images/arrow-right.svg"
                            alt="arrow-right"
                          />
                        </label>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className={premiumsolutionsstyles.btncont_view}>
            <Link href="/solutions/projectsgallery" className="common-btn">
              <label>
                View More
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
        {/* Modal area */}

        <Modal
          id={`bimsolutionPopUp`}
          isOpen={isSecondModalOpen}
          onClose={() => {
            setIsSecondModalOpen(false);
          }}
          title="Second Modal"
        >
          <Requestquotehomeform
            Solutiontype={selectedSolution?.title || ""}
            fieldName={"Project Name"}
            onSuccess={() => {
              // Close modal after toast appears (e.g., 2 seconds delay)
              setTimeout(() => {
                setIsSecondModalOpen(false);
              }, 3000); // Adjust delay based on toast duration
            }}
          />
        </Modal>

        {/* Modal area */}
      </section>
    </>
  );
}
