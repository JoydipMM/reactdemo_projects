import shippingContentstyles from "@/components/shippingAddress/shippingAddress.module.css";
import AnimatedText from "../Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { apiFetcher } from "@/helper/apiFetcher";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
export default function ShippingProductDetails() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  const { query } = router; // This gets all query parameters from the URL
  // Ensure product_id is a string and handle missing query param
  const product_Id =
    typeof query.product_Id === "string" ? query.product_Id : "";
  //console.log("session", session);

  useEffect(() => {
    if (!product_Id || !session) return;

    const fetchData = async () => {
      if (!session?.user?.token || isLoading) return;

      setIsLoading(true);
      const toastId = toast.loading("Loading downloads...");

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_IMAGE_URL}order/checkout`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${session.user.token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              product_id: product_Id
            })
          }
        );

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        setData(data);
        setProductData(data.data.content);
        setIsLoading(false);
      } catch (error) {
        toast.error(`Download failed: ${error.message || "Network error"}`);
      } finally {
        setIsLoading(false);
        toast.dismiss(toastId);
      }
    };
    fetchData();
  }, [session]);
  //console.log("data", productData);
  return (
    <div className={shippingContentstyles.shipprgt}>
      <h2>
        <AnimatedText text="Product details" />
      </h2>
      {productData && (
        <div className={shippingContentstyles.contarea}>
          <div className="sipimg">
            <Image
              fill={true}
              src={productData?.product?.thumbnail?.url}
              alt=""
            />
          </div>
          <div className="sipcont">
            <h3>
              <AnimatedText text={productData?.product?.title} />
            </h3>
            <div className={shippingContentstyles.stararea}>
              <div className="starareas">
                {Array.from({
                  length: Math.ceil(`${productData?.product?.rating}`)
                }).map((_, index) => {
                  const getRating = productData?.product?.rating;
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
              <div className="startxt">
                {productData?.product?.category
                  .map((cat) => cat.name.replace(" Products", ""))
                  .join("/")}
              </div>
            </div>
            <p>{productData?.product?.description}</p>
            <button className="common-btn" type="submit">
              {" "}
              <label>
                {" "}
                Complete Order{" "}
                <Image
                  width={34}
                  height={16}
                  src="/images/arrow-right.svg"
                  alt=""
                />
              </label>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
