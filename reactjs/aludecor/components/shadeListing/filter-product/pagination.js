import filterprdstyles from "@/components/Projectsgallery/filter-product/filterprd.module.css";
import { Button } from "@heroui/react";
import { useRouter } from "next/router";
export default function Pagination({ paginationData, setPage }) {
  const router = useRouter();
  // console.log(paginationData);
  const total_pages = paginationData?.total_pages;
  const current_page = paginationData?.current_page;
  const handleButtonClick = (pageNumber) => {
    //console.log("pageNumber", pageNumber);
    setPage(pageNumber);
  };
  return (
    <>
      <div className={filterprdstyles.pagination}>
        <div className={filterprdstyles.pagiim}>
          <div className="pagination">
            <Button
              className={`arrow ${current_page - 1 == 0 ? "disabled" : ""}`}
              onPress={
                current_page - 1 > 0
                  ? () => handleButtonClick(current_page - 1)
                  : undefined
              }
            >
              &#8249;
            </Button>
            {Array.from({ length: total_pages }).map((_, index) => {
              return (
                <Button
                  key={`btn-${index}`}
                  className={current_page == index + 1 ? "active" : ""}
                  onPress={() => handleButtonClick(index + 1)}
                >
                  {index + 1}
                </Button>
              );
            })}
            {/* <Button className="active">1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button> */}
            <Button
              className={`arrow ${current_page >= total_pages ? "disabled" : ""}`}
              onPress={
                current_page < total_pages
                  ? () => handleButtonClick(current_page + 1)
                  : undefined
              }
            >
              &#8250;
            </Button>
          </div>
        </div>
      </div>
      <></>
    </>
  );
}
