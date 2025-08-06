import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Innerbanner from "@/components/shippingAddress/innerbanner/innerbanner";
import Shippingaddress from "@/components/shippingAddress/shippingAddress";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";

export default function ShippingAddress() {
  const [loading, setLoading] = useState(true);

  // if (!checkoutData) {
  //   return <FullScreenLoader isLoading={loading} />;
  // }
  // if (isErrorCheckoutData) {
  //   return <Error />;
  // }
  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "Shipping Address"]} />
      <Innerbanner />
      <Shippingaddress />
    </>
  );
}
