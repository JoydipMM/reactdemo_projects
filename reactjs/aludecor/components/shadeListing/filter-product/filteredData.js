import designspacestyles from "@/components/Home/designSpace/designSpace.module.css";
import Link from "next/link";
import shadeliststyles from "@/components/shadeListing/shadeListing.module.css";
import Image from "next/image";
import Pagination from "./pagination";

// css add
const smalltxtStyle = {
  fontSize: "16px",
  marginTop: "-10px",
  marginBottom: "10px"
};
export default function FilteredData({ filteredProduct, setPage }) {
  const allFilteredProducts = filteredProduct?.data?.content;
  const allPaginationData = filteredProduct?.data?.pagination;
  //console.log(filteredProduct);
  return (
    <>
      <div
        className={`${designspacestyles.colorbox_wrp} ${shadeliststyles.wrparea}`}
      >
        {allFilteredProducts && allFilteredProducts.length > 0 ? (
          allFilteredProducts.map((allFilteredProduct, index) => {
            const allFilteredProductCat = allFilteredProduct.categories;
            console.log("allFilteredProduct", allFilteredProduct);
            const names = allFilteredProductCat.map((category) =>
              category.name.replace(" Products", "")
            );
            const removeAllFilteredProductCat = names.join("/");
            //  allFilteredProductCat.name.replace(" Products", "");
            return (
              <div
                className={designspacestyles.colorbox_shade}
                key={`filterp-${index}`}
              >
                <div className={designspacestyles.colorbox_imgcont}>
                  <Link
                    href={`/product/productdetails?product_id=${allFilteredProduct?.id}`}
                  >
                    <Image
                      src={allFilteredProduct?.image?.src}
                      alt="Color Shade Green"
                      fill="true"
                    />
                  </Link>
                </div>
                <div className={designspacestyles.color_reviewbox}>
                  {Array.from({
                    length: Math.ceil(`${allFilteredProduct?.rating}`)
                  }).map((_, index) => {
                    const getRating = allFilteredProduct?.rating;
                    const isHalfStar =
                      index === Math.floor(getRating) && getRating % 1 !== 0;
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
                <div style={smalltxtStyle}> {removeAllFilteredProductCat}</div>
                <div className={designspacestyles.colorbox_title}>
                  {allFilteredProduct.name}
                </div>
              </div>
            );
          })
        ) : (
          <>No Product Found</>
        )}
      </div>
      {/* <Pagination paginationData={allPaginationData} /> */}
      {allFilteredProducts && allFilteredProducts.length > 0 ? (
        <Pagination paginationData={allPaginationData} setPage={setPage} />
      ) : null}
    </>
  );
}
