import Pagination from "@/components/shadeListing/filter-product/pagination";
import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import Image from "next/image";
import Link from "next/link";
import { handleDownload } from "@/helper/downloadHelper";
import { useRouter } from "next/router";
export default function BimDisplayResult({
  producttpestyles,
  filteredProduct,
  setPage,
  bimSelectedData,
  session = null
}) {
  const router = useRouter();
  const bimFilterProduct = filteredProduct?.data?.content;
  const allPaginationData = filteredProduct?.data?.pagination;
  const fileFormat = bimSelectedData?.file_format || [];

  const getLink = (getDownloadLink) => {
    const getFileFormat = fileFormat[0] || "";
    // console.log("getFileFormat", getFileFormat);
    switch (fileFormat) {
      case "dwg":
        return getDownloadLink?.file_formats?.dwg;
      case "dxf":
        return getDownloadLink?.file_formats?.dxf;
      case "dwt":
        return getDownloadLink?.file_formats?.dwt;
      case "dws":
        return getDownloadLink?.file_formats?.dws;
      case "bak":
        return getDownloadLink?.file_formats?.bak;
      case "ctb_stb":
        return getDownloadLink?.file_formats?.ctb_stb;
      default:
        return getDownloadLink?.default_download;
    }
  };

  //console.log("fileFormat", fileFormat[0]);
  return (
    <div className={producttpestyles.tabContent}>
      <div className={`${ourprojectsstyles.prjbox_wrp} newprowrap`}>
        {bimFilterProduct && bimFilterProduct.length > 0
          ? bimFilterProduct.map((singleBimFilter, index) => {
              //  const dwnButton = singleBimFilter?.default_download;
              const dwnLink = getLink(singleBimFilter);
              //  console.log("dwnLink", dwnLink);
              return (
                <div
                  className={`${ourprojectsstyles.prj_innerbox} ${producttpestyles.prj_innerboxin}`}
                >
                  <div
                    className={`${ourprojectsstyles.prj_innerbox_overlay} ${producttpestyles.innerbox_overlay}`}
                  >
                    <div className={ourprojectsstyles.prj_overltitle}>
                      {singleBimFilter?.heading}
                    </div>
                    <div className={ourprojectsstyles.prj_overltxt}>
                      {singleBimFilter?.description}
                    </div>
                    {session ? (
                      <Link href={dwnLink} className="common-btn">
                        <label>
                          {" "}
                          DOWNLOAD{" "}
                          <Image
                            width={34}
                            height={16}
                            src="/images/arrow-right.svg"
                            alt=""
                          />{" "}
                        </label>
                      </Link>
                    ) : (
                      <button
                        className="common-btn"
                        onClick={() => handleDownload(router.asPath)}
                      >
                        <label>
                          Login
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
                  <Image
                    src={singleBimFilter?.image?.url}
                    alt="Projects"
                    fill={true}
                  />
                  <div
                    className={`${ourprojectsstyles.prj_overltitle} ${producttpestyles.overltitle}`}
                  >
                    {singleBimFilter?.heading}
                  </div>
                </div>
              );
            })
          : "No Data Found!!"}
      </div>
      {bimFilterProduct && bimFilterProduct.length > 0 ? (
        <Pagination paginationData={allPaginationData} setPage={setPage} />
      ) : null}
      {/* <div
        className={`${ourprojectsstyles.prj_viewbtn} ${producttpestyles.loadbox}`}
      >
        <Link href="#" className="common-btn">
          <label>
            {" "}
            load more{" "}
            <Image
              width={34}
              height={16}
              src="/images/arrow-right.svg"
              alt=""
            />{" "}
          </label>
        </Link>
      </div> */}
    </div>
  );
}
