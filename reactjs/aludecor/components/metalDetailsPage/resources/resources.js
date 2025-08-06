import AnimatedText from "@/components/Framemotion/framemotion";
import resrcestyles from "../resources/resources.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { handleDownload } from "@/helper/downloadHelper";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

export default function Resources({ downloadableSeries, session = null }) {
  const router = useRouter();
  // console.log("session", session);
  const alldSeries = downloadableSeries?.data?.content;
  const allResourses = alldSeries?.resources;
  const resources = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1366,
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

  return (
    <>
      <section
        className={`slidergallery topadding_bottom ${resrcestyles.resourwrp}`}
      >
        <div className="container">
          <h2 className="titlecenter">
            <span>{alldSeries?.preheading}</span>
            <AnimatedText text={alldSeries?.heading} />
          </h2>
          <div className={resrcestyles.prjrel_slider}>
            <Slider {...resources} className="commonSlider">
              {allResourses &&
                allResourses.map((allResourse) => {
                  return (
                    <div
                      className={resrcestyles.iconbox_resour}
                      key={allResourse?.id}
                    >
                      <div className={resrcestyles.resorce_iconcont}>
                        <Image
                          src={allResourse?.image_link}
                          alt="E-catalogues"
                          fill={true}
                        />
                      </div>
                      <p className={resrcestyles.icontitlep}>
                        {allResourse?.title}
                      </p>
                      {session ? (
                        <Link
                          href={
                            allResourse?.button_url == ""
                              ? "#"
                              : allResourse?.button_url
                          }
                          className="common-btn"
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <label>
                            {allResourse?.button_name}
                            <Image
                              width={34}
                              height={16}
                              src="/images/arrow-right.svg"
                              alt=""
                            />
                          </label>
                        </Link>
                      ) : (
                        <button
                          className="common-btn"
                          onClick={() => handleDownload(router.asPath)}
                        >
                          <label>
                            {allResourse?.button_name}
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
      </section>
      <ToastContainer autoClose={false} />
    </>
  );
}
