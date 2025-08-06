import Image from "next/image";
import LeftNav from "@/components/MyAccount/leftnav/leftnav";
import warrantystyles from "@/components/warranty/warranty.module.css";
import React, { useEffect, useState } from "react";
import AnimatedText from "@/components/Framemotion/framemotion";
import downloadacstyles from "@/components/MyAccount/downloads/downloads.module.css";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Pagination from "@/components/shadeListing/filter-product/pagination";

export default function Downloads() {
  const { data: session, status } = useSession();
  const [apiData, setApiData] = useState(null);
  const [downloadData, setDownloadData] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const [text, setText] = useState("");
  // console.log("session", session);
  // console.log("downloadData", downloadData);

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.user?.token || isLoading) return;

      setIsLoading(true);
      const toastId = toast.loading("Loading downloads...");

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_IMAGE_URL}my-account/section/downloads?page=${page}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${session.user.token}`,
              "Content-Type": "application/json"
            }
          }
        );

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        setApiData(data);
        setDownloadData(data.data.content);
        setIsLoading(false);
      } catch (error) {
        toast.error(`Download failed: ${error.message || "Network error"}`);
      } finally {
        setIsLoading(false);
        toast.dismiss(toastId);
      }
    };

    fetchData();
  }, [session, page]);

  return (
    <>
      <section>
        <div className="container">
          <div className={`${warrantystyles.warrntywrp}`}>
            <div className={warrantystyles.leftwrp_warrnty}>
              <LeftNav />
            </div>
            <div className={warrantystyles.rightwrp_warrnty}>
              <h3>
                <AnimatedText text="Downloads" />
              </h3>

              {/* .......download wrp starts............ */}
              {downloadData?.length > 0 ? (
                downloadData?.map((downloadData) => {
                  return (
                    <div
                      className={downloadacstyles.dowmload_titlewrp}
                      key={`downloadID-${downloadData?.id}`}
                    >
                      <div className={downloadacstyles.titledownload}>
                        <h3>{downloadData?.file_title}</h3>
                      </div>
                      <div className={downloadacstyles.downloadbtnicon}>
                        <Link
                          href={
                            downloadData.file_url == ""
                              ? "#"
                              : downloadData.file_url
                          }
                          download
                          target="_blank" // Opens in new tab
                          rel="noopener noreferrer" // Security best practice
                        >
                          <Image
                            width={50}
                            height={50}
                            src="/images/downloadicon.svg"
                            alt="Download"
                          />
                        </Link>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>No downloads available</div>
              )}

              <Pagination
                paginationData={apiData?.data?.pagination}
                setPage={setPage}
              />
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
