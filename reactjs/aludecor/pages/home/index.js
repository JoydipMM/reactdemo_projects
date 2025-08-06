import Layout from "@/components/layout";
import { React, useEffect, useState, useRef, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhyAludecor from "../../components/Home/whyAludecor/whyAludecor";
import PremiumSolutions from "@/components/Home/premiumSolutions/premiumSolutions";
import Explore from "@/components/Home/exploreMetal/explore";
import OurProjects from "@/components/Home/ourProjects/ourProjects";
import Banner from "@/components/Home/banner/banner";
import DesignSpace from "@/components/Home/designSpace/designSpace";
import Leaders from "@/components/Home/leaders/leaders";
import Tools from "@/components/Home/tools/tools";
import ClientSays from "@/components/Home/client/client";
import Welcome from "@/components/Home/welcome/welcome";
import Sustainability from "@/components/Home/sustainability/sustainability";
import Popularsearches from "@/components/Home/popularSearches/popularSearches";
import Stepinside from "@/components/Home/stepInside/stepInside";
import Productsteps from "@/components/Home/productSteps/productSteps";
import Reason from "@/components/Home/reasonChoose/reason";
import Stay from "@/components/Home/stayInformed/stay";
import fetchDataSWR from "@/helper/fetchDataSWR";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Error from "@/components/error/error";
import SectionLoader from "@/components/SectionLoader/SectionLoader";

export default function Home() {
  const observerRef = useRef(null);
  const sectionRefs = useRef({});
  const [visibleSections, setVisibleSections] = useState({
    hero: true, // Load immediately
    whyAludecor: true,
    leaders: true,
    premiumSolutions: false,
    stayInformed: false,
    explore: false,
    ourProjects: false,
    sustainability: false,
    designSpace: false,
    reasonChoose: false,
    productSteps: false,
    clientSays: false,
    tools: false,
    stepInside: false,
    popularSearches: false
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
  }, []);

  // Register section refs
  const registerSectionRef = useCallback((sectionName, node) => {
    if (node) {
      sectionRefs.current[sectionName] = node;
    }
  }, []);

  // Initialize IntersectionObserver and handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      Object.entries(sectionRefs.current).forEach(([sectionName, node]) => {
        if (node && !visibleSections[sectionName]) {
          const rect = node.getBoundingClientRect();
          const isVisible =
            rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;

          if (isVisible) {
            setVisibleSections((prev) => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section");
            setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
          }
        });
      },
      {
        root: null,
        rootMargin: "100px 0px",
        threshold: 0.1
      }
    );

    observerRef.current = observer;

    // Initial check for visible sections
    handleScroll();

    // Observe all sections except hero
    Object.entries(sectionRefs.current)
      .filter(([name, node]) => node && name !== "hero")
      .forEach(([_, node]) => {
        observer.observe(node);
      });

    // Add scroll listener for initial load
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSections]);

  // Fetch data only for visible sections
  const { fetchdata: welcomeData, isError: isErrorWelcome } = fetchDataSWR(
    visibleSections.hero ? "home/section/hero" : null,
    { revalidateOnFocus: false }
  );

  const { fetchdata: whyAludecorData, isError: isErrorWhyaludecor } =
    fetchDataSWR(
      visibleSections.whyAludecor ? "home/section/why-aludecor" : null,
      { revalidateOnFocus: false }
    );

  const { fetchdata: leaderData, isError: isErrorleader } = fetchDataSWR(
    visibleSections.leaders ? "home/section/leaders" : null,
    { revalidateOnFocus: false }
  );

  const { fetchdata: stayData, isError: isErrorStay } = fetchDataSWR(
    visibleSections.stayInformed ? "home/section/stay-informed" : null,
    { revalidateOnFocus: false }
  );

  const { fetchdata: cpanelData, isError: isErrorCpanel } = fetchDataSWR(
    visibleSections.explore ? "home/section/composite-panels" : null,
    { revalidateOnFocus: false }
  );

  const { fetchdata: projectData, isError: isErrorProject } = fetchDataSWR(
    visibleSections.ourProjects ? "home/section/projects" : null,
    { revalidateOnFocus: false }
  );

  const { fetchdata: sustainData, isError: isErrorsustain } = fetchDataSWR(
    visibleSections.sustainability ? "home/section/sustainability" : null,
    { revalidateOnFocus: false }
  );

  const { fetchdata: chooseData, isError: isErrorChoose } = fetchDataSWR(
    visibleSections.reasonChoose ? "home/section/reason-choose" : null,
    { revalidateOnFocus: false }
  );

  const { fetchdata: clientData, isError: isErrorClient } = fetchDataSWR(
    visibleSections.clientSays ? "home/section/testimonials" : null,
    { revalidateOnFocus: false }
  );

  const { fetchdata: stepData, isError: isErrorStep } = fetchDataSWR(
    visibleSections.stepInside ? "home/section/factory-tour" : null,
    { revalidateOnFocus: false }
  );

  const { fetchdata: popularData, isError: isErrorPopular } = fetchDataSWR(
    visibleSections.popularSearches ? "home/section/popular-searches" : null,
    { revalidateOnFocus: false }
  );

  const { fetchdata: solutionData, isError: isErrorSolution } = fetchDataSWR(
    visibleSections.premiumSolutions ? "home/section/premium-solutions" : null,
    { revalidateOnFocus: false }
  );

  const { fetchdata: productListingData, isError: isErrorProductListing } =
    fetchDataSWR(
      visibleSections.designSpace ? "home/section/product-listing" : null,
      { revalidateOnFocus: false }
    );

  const { fetchdata: productFilterData, isError: isErrorProductFilter } =
    fetchDataSWR(
      visibleSections.productSteps ? "global/product/categories" : null,
      { revalidateOnFocus: false }
    );

  const { fetchdata: toolData, isError: isErrorTool } = fetchDataSWR(
    visibleSections.tools ? "global/tools" : null,
    { revalidateOnFocus: false }
  );

  // Check if initial data is loading
  if (visibleSections.hero && !welcomeData) {
    return <FullScreenLoader isLoading={true} />;
  }

  // Check for errors
  if (
    (visibleSections.hero && isErrorWelcome) ||
    (visibleSections.whyAludecor && isErrorWhyaludecor) ||
    (visibleSections.leaders && isErrorleader) ||
    (visibleSections.stayInformed && isErrorStay) ||
    (visibleSections.explore && isErrorCpanel) ||
    (visibleSections.ourProjects && isErrorProject) ||
    (visibleSections.sustainability && isErrorsustain) ||
    (visibleSections.reasonChoose && isErrorChoose) ||
    (visibleSections.clientSays && isErrorClient) ||
    (visibleSections.stepInside && isErrorStep) ||
    (visibleSections.popularSearches && isErrorPopular) ||
    (visibleSections.premiumSolutions && isErrorSolution) ||
    (visibleSections.designSpace && isErrorProductListing) ||
    (visibleSections.tools && isErrorTool) ||
    (visibleSections.productSteps && isErrorProductFilter)
  ) {
    return <Error />;
  }

  return (
    <>
      {/* Hero Section */}
      <div data-section="hero" ref={(node) => registerSectionRef("hero", node)}>
        <Welcome welData={welcomeData} />
        <Banner bannerData={welcomeData} />
      </div>

      {/* Why Aludecor Section */}
      <div
        data-section="whyAludecor"
        ref={(node) => registerSectionRef("whyAludecor", node)}
      >
        {visibleSections.whyAludecor ? (
          whyAludecorData ? (
            <WhyAludecor whyData={whyAludecorData} />
          ) : (
            <SectionLoader height="800px" />
          )
        ) : (
          <SectionLoader height="800px" />
        )}
      </div>

      {/* Leaders Section */}
      <div
        data-section="leaders"
        ref={(node) => registerSectionRef("leaders", node)}
      >
        {visibleSections.leaders ? (
          leaderData ? (
            <Leaders leaderData={leaderData} />
          ) : (
            <SectionLoader height="600px" />
          )
        ) : (
          <SectionLoader height="600px" />
        )}
      </div>

      {/* Premium Solutions Section */}
      <div
        data-section="premiumSolutions"
        ref={(node) => registerSectionRef("premiumSolutions", node)}
      >
        {visibleSections.premiumSolutions ? (
          solutionData ? (
            <PremiumSolutions solutionData={solutionData} />
          ) : (
            <SectionLoader height="700px" />
          )
        ) : (
          <SectionLoader height="700px" />
        )}
      </div>

      {/* Stay Informed Section */}
      <div
        data-section="stayInformed"
        ref={(node) => registerSectionRef("stayInformed", node)}
      >
        {visibleSections.stayInformed ? (
          stayData ? (
            <Stay stayData={stayData} />
          ) : (
            <SectionLoader height="500px" />
          )
        ) : (
          <SectionLoader height="500px" />
        )}
      </div>

      {/* Explore Section */}
      <div
        data-section="explore"
        ref={(node) => registerSectionRef("explore", node)}
      >
        {visibleSections.explore ? (
          cpanelData ? (
            <Explore cpanelData={cpanelData} />
          ) : (
            <SectionLoader height="650px" />
          )
        ) : (
          <SectionLoader height="650px" />
        )}
      </div>

      {/* Our Projects Section */}
      <div
        data-section="ourProjects"
        ref={(node) => registerSectionRef("ourProjects", node)}
      >
        {visibleSections.ourProjects ? (
          projectData ? (
            <OurProjects projectDataVal={projectData} />
          ) : (
            <SectionLoader height="900px" />
          )
        ) : (
          <SectionLoader height="900px" />
        )}
      </div>

      {/* Sustainability Section */}
      <div
        data-section="sustainability"
        ref={(node) => registerSectionRef("sustainability", node)}
      >
        {visibleSections.sustainability ? (
          sustainData ? (
            <Sustainability sustainData={sustainData} />
          ) : (
            <SectionLoader height="750px" />
          )
        ) : (
          <SectionLoader height="750px" />
        )}
      </div>

      {/* Design Space Section */}
      <div
        data-section="designSpace"
        ref={(node) => registerSectionRef("designSpace", node)}
      >
        {visibleSections.designSpace ? (
          productListingData ? (
            <DesignSpace productListingData={productListingData} />
          ) : (
            <SectionLoader height="600px" />
          )
        ) : (
          <SectionLoader height="600px" />
        )}
      </div>

      {/* Reason Choose Section */}
      <div
        data-section="reasonChoose"
        ref={(node) => registerSectionRef("reasonChoose", node)}
      >
        {visibleSections.reasonChoose ? (
          chooseData ? (
            <Reason chooseData={chooseData} />
          ) : (
            <SectionLoader height="800px" />
          )
        ) : (
          <SectionLoader height="800px" />
        )}
      </div>

      {/* Product Steps Section */}
      <div
        data-section="productSteps"
        ref={(node) => registerSectionRef("productSteps", node)}
      >
        {visibleSections.productSteps ? (
          productFilterData ? (
            <Productsteps productFilterData={productFilterData} />
          ) : (
            <SectionLoader height="700px" />
          )
        ) : (
          <SectionLoader height="700px" />
        )}
      </div>

      {/* Client Says Section */}
      <div
        data-section="clientSays"
        ref={(node) => registerSectionRef("clientSays", node)}
      >
        {visibleSections.clientSays ? (
          clientData ? (
            <ClientSays clientDataVal={clientData} />
          ) : (
            <SectionLoader height="650px" />
          )
        ) : (
          <SectionLoader height="650px" />
        )}
      </div>

      {/* Tools Section */}
      <div
        data-section="tools"
        ref={(node) => registerSectionRef("tools", node)}
      >
        {visibleSections.tools ? (
          toolData ? (
            <Tools toolDataVal={toolData} />
          ) : (
            <SectionLoader height="550px" />
          )
        ) : (
          <SectionLoader height="550px" />
        )}
      </div>

      {/* Step Inside Section */}
      <div
        data-section="stepInside"
        ref={(node) => registerSectionRef("stepInside", node)}
      >
        {visibleSections.stepInside ? (
          stepData ? (
            <Stepinside stepData={stepData} />
          ) : (
            <SectionLoader height="850px" />
          )
        ) : (
          <SectionLoader height="850px" />
        )}
      </div>

      {/* Popular Searches Section */}
      <div
        data-section="popularSearches"
        ref={(node) => registerSectionRef("popularSearches", node)}
      >
        {visibleSections.popularSearches ? (
          popularData ? (
            <Popularsearches popularData={popularData} />
          ) : (
            <SectionLoader height="500px" />
          )
        ) : (
          <SectionLoader height="500px" />
        )}
      </div>
    </>
  );
}
