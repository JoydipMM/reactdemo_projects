"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "@/components/Framemotion/framemotion";

import downloadresourcesstyles from "../downloadResources/downloadresources.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";

import { getDownloadHandler, handleDownload } from "@/helper/downloadHelper";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function DownloadResources({ reportData }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const allData = reportData?.data?.content;
  const allGalleryDatas = allData?.gallery;
  const allFilterDatas = allData?.filters?.years;
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [selectedYear, setSelectedYear] = useState("");
  const [initialGalleryData, setInitialGalleryData] = useState(allGalleryDatas);

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_IMAGE_URL}csr/section/csr-report?category=${selectedYear}`,
    fetcher
  );

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    console.log("DAta", data);
    // Use SWR to fetch data based on the selected category
  };
  useEffect(() => {
    if (data?.data?.content?.reports) {
      setInitialGalleryData(data.data.content.reports);
    }
  }, [data]);

  return (
    <>
      <section
        className={`${downloadresourcesstyles.slidergallery} slidergallery downloadSection`}
      >
        <div className="topadding_bottom">
          <div className="container">
            <h2 className="centertie">
              <span>{allData?.preheading}</span>
              <AnimatedText text={allData?.heading} />
            </h2>

            <div className={`${downloadresourcesstyles.year_content}`}>
              <select onChange={handleYearChange}>
                <option value="">Select Year</option>
                {allFilterDatas &&
                  allFilterDatas.map((allFilterData, index) => {
                    return (
                      <option
                        value={allFilterData?.slug}
                        key={`allFilterDataID-${index}`}
                      >
                        {allFilterData?.name}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className={`${downloadresourcesstyles.download_content}`}>
              <Slider {...settings} className="commonSlider">
                {initialGalleryData &&
                  initialGalleryData.map((allGalleryData, index) => {
                    return (
                      <div
                        className={`${downloadresourcesstyles.download_box}`}
                        key={`allDDataID-${index}`}
                      >
                        <div className="icon-pic">
                          <Image
                            width={34}
                            height={16}
                            src="/images/product/csr/icon-pdf.svg"
                            alt=""
                          />
                        </div>
                        <div className="year-title">
                          {allGalleryData?.title}
                        </div>
                        {session ? (
                          <a
                            className="common-btn"
                            href={allGalleryData.download_link}
                            download
                            onClick={async (e) => {
                              e.preventDefault(); // Always prevent default first

                              if (!allGalleryData.download_link) return;

                              const { shouldDownload, error } =

                                await getDownloadHandler(
                                  allGalleryData,
                                  session
                                );


                              if (shouldDownload) {
                                // Trigger download
                                const link = document.createElement("a");
                                link.href = allGalleryData.download_link;
                                link.target = "_blank";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                                toast.success("Download started!");
                              }
                            }}
                          >
                            <label
                              style={{
                                cursor: "pointer",
                                transition: "transform 0.2s ease "
                              }}
                            >
                              Download
                              <Image
                                width={34}
                                height={16}
                                src="/images/arrow-right.svg"
                                alt=""
                              />
                            </label>
                          </a>
                        ) : (
                          <button
                            onClick={() => handleDownload(router.asPath)}
                            className="common-btn"
                          >
                            <label
                              style={{
                                cursor: "pointer",
                                transition: "transform 0.2s ease "
                              }}
                            >
                              Download{" "}
                              <Image
                                width={34}
                                height={16}
                                src="/images/arrow-right.svg"
                                alt=""
                              />
                            </label>
                          </button>
                        )}
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
