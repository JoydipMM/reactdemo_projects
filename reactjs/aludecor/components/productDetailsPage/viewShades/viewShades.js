import shadesstyles from "../viewShades/viewShades.module.css";
import designspacestyles from "../../Home/designSpace/designSpace.module.css";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/Framemotion/framemotion";
export default function ViewShades({ productRelatedProduct }) {
  const allProductRelated = productRelatedProduct?.data?.content;
  return (
    <>
      <section className={shadesstyles.shades}>
        <div className="container">
          <h2 className="titlecenter">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            <AnimatedText text="View other shades" />
          </h2>
          <div className={designspacestyles.colorbox_wrp}>
            {allProductRelated && allProductRelated.length > 0 ? (
              allProductRelated.map((allProductRelate, index) => {
                const allFilteredProductCat = allProductRelate.psarent_cat;
                const names = allFilteredProductCat.map((category, index) =>
                  category.name.replace(" Products", "")
                );
                const removeAllFilteredProductCat = names.join("/");
                return (
                  <div
                    className={designspacestyles.colorbox_shade}
                    key={`filterP-${index}`}
                  >
                    <div className={designspacestyles.colorbox_imgcont}>
                      <Link
                        href={`/product/productdetails?product_id=${allProductRelate?.id}`}
                      >
                        <Image
                          src={allProductRelate?.image}
                          alt="Color Shade Green"
                          fill="true"
                        />
                      </Link>
                    </div>
                    <div className={designspacestyles.color_reviewbox}>
                      {Array.from({
                        length: Math.ceil(`${allProductRelate?.rating}`)
                      }).map((_, index) => {
                        const getRating = allProductRelate?.rating;
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
                    <div className={shadesstyles.category}>
                      {removeAllFilteredProductCat}
                    </div>
                    <div className={designspacestyles.colorbox_title}>
                      {allProductRelate?.name}
                    </div>
                  </div>
                );
              })
            ) : (
              <>No Product Found</>
            )}
          </div>

          <div className={shadesstyles.shade_btnwrp}>
            <Link href="/product/productFilter" className="common-btn">
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
