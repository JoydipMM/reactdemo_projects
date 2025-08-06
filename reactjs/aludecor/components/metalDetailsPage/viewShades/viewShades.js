import shadesstyles from "../viewShades/viewShades.module.css";
import designspacestyles from "../../Home/designSpace/designSpace.module.css";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/Framemotion/framemotion";
// css add
const smalltxtStyle = {
  fontSize: "16px",
  marginTop: "-10px",
  marginBottom: "10px"
};
export default function ViewShades({ product_series, shadesSeries }) {
  const allShades = shadesSeries?.data?.content;
  // const allFeatures = allShades?.features;
  console.log("allShades", allShades);
  return (
    <>
      <section className={shadesstyles.shades}>
        <div className="container">
          <h2 className="titlecenter">
            <span>Explore Our Premium Solutions</span>
            <AnimatedText text="View all shades" />
          </h2>
          <div className={designspacestyles.colorbox_wrp}>
            {allShades &&
              allShades.map((allShade, index) => {
                const allShadeProductCat = allShade.categories;
                const names = allShadeProductCat.map((category) =>
                  category.name.replace(" Products", "")
                );
                const removeAllFilteredProductCat = names.join("/");
                return (
                  <div
                    className={designspacestyles.colorbox_shade}
                    key={`filterp-${index}`}
                  >
                    <div className={designspacestyles.colorbox_imgcont}>
                      <Link
                        href={`/product/productdetails?product_id=${allShade?.id}`}
                      >
                        <Image
                          src={allShade?.image?.src}
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </Link>
                    </div>
                    <div className={designspacestyles.color_reviewbox}>
                      {Array.from({
                        length: Math.ceil(`${allShade?.rating}`)
                      }).map((_, index) => {
                        const getRating = allShade?.rating;
                        const isHalfStar =
                          index === Math.floor(getRating) &&
                          getRating % 1 !== 0;
                        return (
                          <Image
                            key={index}
                            src={
                              isHalfStar
                                ? "/images/half-star.svg"
                                : "/images/review.svg"
                            }
                            alt="Review"
                            width={20}
                            height={24}
                          />
                        );
                      })}
                    </div>
                    <div style={smalltxtStyle}>
                      {" "}
                      {removeAllFilteredProductCat}
                    </div>
                    <div className={designspacestyles.colorbox_title}>
                      {allShade.name}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={shadesstyles.shade_btnwrp}>
            <Link
              href={
                product_series
                  ? `/product/productFilter?series=${product_series}`
                  : "#"
              }
              className="common-btn"
            >
              <label>
                VIEW MORE
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
      </section>
    </>
  );
}
