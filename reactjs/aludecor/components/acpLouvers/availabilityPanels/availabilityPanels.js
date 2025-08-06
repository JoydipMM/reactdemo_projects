"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import designspacestyles from "@/components/Home/designSpace/designSpace.module.css";
import metalPanelsstyles from "@/components/Product/metalPanels/metalPanels.module.css";

export default function AvailabilityPanels({ shadesData }) {
  const allShadesData = shadesData?.data?.content;
  const shades = allShadesData?.shades;
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className={`${metalPanelsstyles.shade} slidergallery`}>
        <div className="container">
          <h2 className="titlecenter">
            <AnimatedText text={allShadesData?.heading} />
          </h2>
          <p>{allShadesData?.heading}</p>

          <div className="premium_boxwrp">
            <Slider {...settings} className="commonSlider">
              {shades &&
                shades.map((shade) => {
                  return (
                    <div className="premiumboxcont" key={shade?.id}>
                      <Link
                        href={`/product/productdetails?product_id=${shade?.id}`}
                      >
                        <div className="animate_frame">
                          <div className={designspacestyles.colorbox_imgcont}>
                            <Image
                              src={shade?.thumbnail_url}
                              alt="Color Shade Green"
                              fill="true"
                            />
                          </div>
                          <div className={designspacestyles.colorbox_title}>
                            {shade?.title}
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </Slider>
            {/* <Link href="#" className="common-btn">
              <label>View All <Image width={34}  height={16} src="/images/arrow-right.svg"  alt=""/> </label>
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
}
