"use client";
import Image from "next/image";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import gallerystyles from "@/components/csr/gallery/gallery.module.css";
import useSWR from "swr";
import CsrActivity from "./csrActivity";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Gallery({ galleryData, activityData }) {
  const allData = galleryData?.data?.content;
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

  const currentYear = new Date().getFullYear().toString();
  const [selectedYear, setSelectedYear] = useState("");
  const [initialGalleryData, setInitialGalleryData] = useState(allGalleryDatas);

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_IMAGE_URL}csr/section/photo-gallery?category=${selectedYear}`,
    fetcher
  );

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    // Use SWR to fetch data based on the selected category
  };
  useEffect(() => {
    if (data?.data?.content?.gallery) {
      setInitialGalleryData(data.data.content.gallery);
    }
  }, [data]);

  return (
    <>
      <section className={`slidergallery ${gallerystyles.slidergallery} gallerySection`}>
        <div className="commonpadding">
          <div className="container">
            <h2 className="centertie">
              <AnimatedText text={allData?.heading} />
            </h2>

            <div className={`${gallerystyles.year_content}`}>
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

            <div className={`${gallerystyles.gallery_content}`}>
              <Slider {...settings} className="commonSlider">
                {initialGalleryData &&
                  initialGalleryData.map((allGalleryData, index) => {
                    return (
                      <div
                        className={`${gallerystyles.gallerybox}`}
                        key={`allGalleryDataID-${index}`}
                      >
                        <Image
                          src={allGalleryData?.image?.url}
                          fill={true}
                          alt="allGalleryImage"
                        />
                        <div className="content">
                          <div className="txt">
                            <div className="title">{allGalleryData?.title}</div>
                            <p>{allGalleryData?.content}</p>
                          </div>
                        </div>
                        <div className="brands">
                          <Image
                            src="/images/witebrand.svg"
                            alt="witebrand"
                            fill={true}
                          />
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>

          {/* Association start */}
          <CsrActivity activityData={activityData} />
          {/* Association end */}
        </div>
      </section>
    </>
  );
}
