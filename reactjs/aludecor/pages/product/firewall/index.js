import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import InnerBannerfireWall from "@/components/fireWall/innerbanner/innerbanner";
import Benefits from "@/components/fireWall/keyBenefits/keybenefits";
import Safety from "@/components/fireWall/fireSafety/firesafety";
import WhatFirewall from "@/components/fireWall/whatFireWall/whatfirewall";
import WhyFirewall from "@/components/fireWall/whyFireWall/whyfirewall";
import Certification from "@/components/residentialSolutions/certification/certification";
import Certificate from "@/components/fireWall/certification/certification";
import Protect from "@/components/fireWall/protect/protect";
import Performance from "@/components/fireWall/performance/performance";
import Lab from "@/components/fireWall/lab/lab";
import Production from "@/components/fireWall/production/production";
import Testimonials from "@/components/fireWall/testimonials/testimonials";
import ChooseFirewall from "@/components/fireWall/chooseFirewall/choosefirewall";
import Faq from "@/components/acpLouvers/faq/faq";
import fetchDataSWR from "@/helper/fetchDataSWR";
import { useState } from "react";
import Error from "@/components/error/error";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";

export default function FireWall() {
  const [loading, setLoading] = useState(true);

  const { fetchdata: bannerData, isError: isErrorBannerData } = fetchDataSWR(
    "global/banner?slug=firewall"
  );
  const { fetchdata: informationData, isError: isErrorInformationData } =
    fetchDataSWR("products/firewall/information");
  const { fetchdata: faqData, isError: isErrorFaqData } = fetchDataSWR(
    "products/firewall/faqs"
  );
  const { fetchdata: safetyData, isError: isErrorSafetyData } = fetchDataSWR(
    "products/firewall/why-fire-safety"
  );
  const { fetchdata: firewallData, isError: isErrorFirewallData } =
    fetchDataSWR("products/firewall/what-is-firewall");
  const { fetchdata: whySaferData, isError: isErrorWhySaferData } =
    fetchDataSWR("products/firewall/why-safer");
  const { fetchdata: certificateData, isError: isErrorCertificateData } =
    fetchDataSWR("solutions/post/commercial/certificate");
  const { fetchdata: protectsData, isError: isErrorProtectsData } =
    fetchDataSWR("products/firewall/firewall-protects");
  const { fetchdata: performanceData, isError: isErrorPerformancesData } =
    fetchDataSWR("products/firewall/fire-performance");
  const { fetchdata: testingData, isError: isErrorTestingData } = fetchDataSWR(
    "products/firewall/lab-testing"
  );
  const { fetchdata: projectsData, isError: isErrorprojectsData } =
    fetchDataSWR("products/firewall/projects");
  const { fetchdata: testimonialData, isError: isErrorTestimonialData } =
    fetchDataSWR("products/firewall/testimonial");
  const { fetchdata: advertisementData, isError: isErrordvertisementData } =
    fetchDataSWR("products/firewall/advertisement");
  if (
    isErrorBannerData ||
    isErrorInformationData ||
    isErrorFaqData ||
    isErrorSafetyData ||
    isErrorFirewallData ||
    isErrorWhySaferData ||
    isErrorCertificateData ||
    isErrorProtectsData ||
    isErrorPerformancesData ||
    isErrorTestingData ||
    isErrorprojectsData ||
    isErrorTestimonialData ||
    isErrordvertisementData
  ) {
    return <Error />;
  }
  if (
    !bannerData ||
    !informationData ||
    !faqData ||
    !safetyData ||
    !firewallData ||
    !whySaferData ||
    !certificateData ||
    !protectsData ||
    !performanceData ||
    !testingData ||
    !projectsData ||
    !testimonialData ||
    !advertisementData
  ) {
    return <FullScreenLoader isLoading={loading} />;
  }

  return (
    <>
      <Breadcrumb pagehierarchy={["Product", "Firewall"]} />
      <InnerBannerfireWall bannerData={bannerData} />
      <Benefits informationData={informationData} />
      <Safety safetyData={safetyData} />
      <WhatFirewall firewallData={firewallData} />
      <WhyFirewall whySaferDataVal={whySaferData} />
      {/* <Certificate /> */}
      <Certification certificateData={certificateData} />
      <Protect protectsData={protectsData} />
      <Performance performanceData={performanceData} />
      <Lab testingData={testingData} />
      <Production projectsData={projectsData} />
      <Testimonials testimonialData={testimonialData} />
      <ChooseFirewall advertisementData={advertisementData} />
      <Faq faqData={faqData} />
    </>
  );
}
