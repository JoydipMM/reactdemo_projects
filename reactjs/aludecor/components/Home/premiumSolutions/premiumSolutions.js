"use client";
import { useEffect, useRef, useState } from "react";
import premiumsolutionsstyles from "@/components/Home/premiumSolutions/premiumSolutions.module.css";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal/Modal";
import Requestquotehomeform from "@/components/Home/requestQuoteHome/requestQuoteHomeForm";

export default function PremiumSolutions({ solutionData }) {
  const frameAnimateRef = useRef(null);
  const [frameHeight, setFrameHeight] = useState("normal");
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null); // Track selected solution
  // const [sol, setSol] = useState();
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
  }, [solutionData]);

  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_IMAGE_URL}home/section/premium-solutions`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setSol(data.data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  // if (!sol) {
  //   return <>Loading...</>;
  // }
  const allSolutions = solutionData?.data?.content?.solutions;
  //console.log(allSolutions);
  return (
    <>
      <section
        className={`${premiumsolutionsstyles.premiumwrp} topadding_bottom`}
      >
        <div className="container">
          <h2>
            <span>{solutionData?.data.content.preheading}</span>
            {solutionData?.data?.content?.heading}
          </h2>

          <div className={premiumsolutionsstyles.premium_boxwrp}>
            {allSolutions &&
              allSolutions.map((allSolution) => (
                <div
                  key={allSolution.image_id}
                  className={`${premiumsolutionsstyles.premiumboxcont} ${premiumsolutionsstyles.border_l}`}
                  ref={frameAnimateRef}
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
                      src={allSolution.image_url}
                      alt="Animated"
                      fill={true}
                    />
                  </div>
                  <div className={premiumsolutionsstyles.premiumbox_textcont}>
                    <div className={premiumsolutionsstyles.boxpremium_left}>
                      <h3>{allSolution?.heading}</h3>
                      <p>{allSolution?.description}</p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedSolution(allSolution);
                        setIsSecondModalOpen(true);
                      }}
                      className="common-btn"
                    >
                      <label>
                        {allSolution?.button_name}
                        <Image
                          width={34}
                          height={16}
                          src="/images/arrow-right.svg"
                          alt="arrow"
                        />
                      </label>
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div className={premiumsolutionsstyles.btncont_view}>
            <Link
              href={solutionData?.data?.content?.view_more}
              className="common-btn"
            >
              {" "}
              <label>
                {" "}
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
        </div>
        {/* Modal area */}

        <Modal
          id={`premiumSolutionPopUp`}
          isOpen={isSecondModalOpen}
          onClose={() => {
            setIsSecondModalOpen(false);
          }}
          title="Second Modal"
        >
          <Requestquotehomeform
            Solutiontype={selectedSolution?.heading || ""}
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
