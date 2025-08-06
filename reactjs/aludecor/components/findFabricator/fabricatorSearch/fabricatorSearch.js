import AnimatedText from "@/components/Framemotion/framemotion";
import fabricatorSearchstyle from "@/components/findFabricator/fabricatorSearch/fabricatorSearch.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import FilterDealerData from "./filteredDealerData";
import { useRouter } from "next/router";

export default function FabricatorSearch() {
  const [allData, setAllData] = useState(null);
  const [downloadData, setDownloadData] = useState(null);
  const [allMData, setAllMData] = useState(null);
  const [downloadMData, setDownloadMData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [mPage, setMPage] = useState(1);
  const [text, setText] = useState("");
  const [findUserLoad, setFindUserLoad] = useState(false);
  const router = useRouter();
  const { query } = router;
  const dealerType = query.dealerType ?? "fabricators";
  let textChange = "";
  if (dealerType == "channel-partners") {
    textChange = "Channel Partners";
  } else if (dealerType == "specifiers") {
    textChange = "Specifiers";
  } else {
    textChange = "Fabricators";
  }
  // loading Dealer data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const toastId = toast.loading("Loading dealers...");

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_IMAGE_URL}authorized/dealers?page=${page}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        console.log(data);
        setDownloadData(data);
        setAllData(data.data.content);
        setIsLoading(false);
      } catch (error) {
        toast.error(
          `Failed Fetching Data: ${error.message || "Network error"}`
        );
      } finally {
        setIsLoading(false);
        toast.dismiss(toastId);
      }
    };

    fetchData();
  }, [page]);

  // 1. Extract fetch logic into a standalone function
  const fetchDealers = async (page) => {
    setIsLoading(true);

    const toastId = toast.loading("Loading dealers...");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_IMAGE_URL}dealers/search?category=${dealerType}&term=${text}&page=${page}`,
        { headers: { "Content-Type": "application/json" } }
      );
      if (!response.ok) throw new Error("Network error");

      const data = await response.json();
      setDownloadMData(data);
      setAllMData(data.data.content);
    } catch (error) {
      toast.error(`Failed: ${error.message}`);
    } finally {
      setIsLoading(false);
      toast.dismiss(toastId);
    }
  };

  // 2. Original form handler (resets to page 0)
  const handleSubmit = (e) => {
    e.preventDefault();
    setFindUserLoad(true);
    fetchDealers(1); // Reset to first page on new search
  };

  // 3. Trigger fetch when mPage changes
  useEffect(() => {
    console.log("mPage", mPage);
    if (findUserLoad) {
      fetchDealers(mPage);
    }
  }, [mPage]); // Only runs when mPage updates

  return (
    <>
      <section className={`${fabricatorSearchstyle.searcharea}`}>
        <div className="container">
          <h2>
            <AnimatedText text={`Find a ${textChange}`} />
          </h2>
          <div className={`${fabricatorSearchstyle.searchareatxt}`}>
            <p>
              {`
              Get in touch with an Aludecor authorized ${textChange} to choose the
              right product for the windows & doors for your building, either
              new or renovated`}
            </p>
          </div>
          <div className={`${fabricatorSearchstyle.searchareabox}`}>
            <div className={`${fabricatorSearchstyle.searchareaboxwrap}`}>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  name="search"
                  placeholder="Fill in address , region , city , or postal code"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  required
                />

                <div className="common-btn purple">
                  <label>
                    {" "}
                    <input type="submit" value={`Search ${textChange}`} />{" "}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt="right"
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {!findUserLoad ? (
        <FilterDealerData
          setPage={setPage}
          allData={allData}
          downloadData={downloadData}
        />
      ) : (
        <FilterDealerData
          setPage={setMPage}
          allData={allMData}
          downloadData={downloadMData}
        />
      )}
      <ToastContainer />
    </>
  );
}
