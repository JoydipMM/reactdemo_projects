import Image from "next/image";
import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import Link from "next/link";
import Pagination from "@/components/shadeListing/filter-product/pagination";

export default function ProjectFilterData({
  allFilterTabData,
  styles,
  setPage
}) {
  const allFilteredProducts = allFilterTabData?.data?.content;
  console.log("allFilteredProducts", allFilteredProducts);
  const allPaginationData = allFilterTabData?.data?.pagination;
  return (
    <div className={styles.galfiltercont}>
      <div className={ourprojectsstyles.panel_conttab}>
        <div className={ourprojectsstyles.prjbox_wrp}>
          {allFilteredProducts && allFilteredProducts.length > 0 ? (
            allFilteredProducts.map((allFilteredProduct, index) => {
              return (
                <div
                  className={ourprojectsstyles.prj_innerbox}
                  key={`projectFilter-${index}`}
                >
                  {allFilteredProduct?.evalate ? (
                    <div className="eltag">Elevate</div>
                  ) : (
                    ""
                  )}

                  <div className={ourprojectsstyles.prj_innerbox_overlay}>
                    <div className={ourprojectsstyles.prj_overltitle}>
                      {allFilteredProduct?.name}
                    </div>
                    <div className={ourprojectsstyles.prj_overltxt}>
                      {allFilteredProduct?.excerpt}
                    </div>
                    <Link
                      href={`solutionsdetails?project_slug=${allFilteredProduct?.slug}`}
                    >
                      <Image
                        src="/images/pause-circle.svg"
                        alt="Link"
                        width={50}
                        height={50}
                      />
                    </Link>
                  </div>
                  <Image
                    src={allFilteredProduct?.image?.link}
                    alt="Projects"
                    fill={true}
                  />
                </div>
              );
            })
          ) : (
            <>No Product Found</>
          )}
        </div>
        {allFilteredProducts && allFilteredProducts.length > 0 ? (
          <Pagination paginationData={allPaginationData} setPage={setPage} />
        ) : null}
      </div>
    </div>
  );
}
