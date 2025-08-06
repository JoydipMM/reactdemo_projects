import { useState, useEffect, useRef, useCallback } from "react";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Innerbanner from "@/components/Solutions/innerbanner/innerbanner";
import PremiumSolutions from "@/components/Solutions/premiumsolutions/premiumsolutions";
import Projectgallery from "@/components/Solutions/projectgallery/projectgallery";
import Solutioncontent from "@/components/Solutions/solutioncontent/solutioncontent";
import fetchDataSWR from "@/helper/fetchDataSWR";
import SectionLoader from "@/components/SectionLoader/SectionLoader";

export default function Solutions() {
  const observerRef = useRef(null);
  const sectionRefs = useRef({});
  const [visibleSections, setVisibleSections] = useState({
    banner: true, // Load immediately
    premiumSolutions: true,
    solutionContent: true,
    projectGallery: false
  });

  // Section data
  const { fetchdata: solBannerData, isError: isErrorSolBanner } = fetchDataSWR(
    visibleSections.banner ? "global/banner?slug=solutions" : null,
    { revalidateOnFocus: false }
  );
  const { fetchdata: solCarouselData, isError: isErrorSolCarousel } =
    fetchDataSWR(
      visibleSections.premiumSolutions ? "solutions/section/carousel" : null,
      { revalidateOnFocus: false }
    );
  const { fetchdata: solContentData, isError: isErrorSolContent } =
    fetchDataSWR(
      visibleSections.solutionContent
        ? "solutions/section/special-solutions"
        : null,
      { revalidateOnFocus: false }
    );
  const { fetchdata: solGalleryData, isError: isErrorGalleryContent } =
    fetchDataSWR(
      visibleSections.projectGallery ? "global/projects-gallery" : null,
      { revalidateOnFocus: false }
    );

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

    // Observe all sections except banner
    Object.entries(sectionRefs.current)
      .filter(([name, node]) => node && name !== "banner")
      .forEach(([_, node]) => {
        observer.observe(node);
      });

    // Add scroll listener for initial load
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSections]);

  // Check if initial data is loading
  if (visibleSections.banner && !solBannerData) {
    return <FullScreenLoader isLoading={true} />;
  }

  // Check for errors
  if (
    (visibleSections.banner && isErrorSolBanner) ||
    (visibleSections.premiumSolutions && isErrorSolCarousel) ||
    (visibleSections.solutionContent && isErrorSolContent) ||
    (visibleSections.projectGallery && isErrorGalleryContent)
  ) {
    return <>Error loading data.</>;
  }

  return (
    <>
      <Breadcrumb pageName={"Solutions"} />

      {/* Banner Section */}
      <div
        data-section="banner"
        ref={(node) => registerSectionRef("banner", node)}
      >
        {solBannerData ? (
          <Innerbanner bannerSolution={solBannerData} />
        ) : (
          <SectionLoader height="500px" />
        )}
      </div>

      {/* Premium Solutions Section */}
      <div
        data-section="premiumSolutions"
        ref={(node) => registerSectionRef("premiumSolutions", node)}
      >
        {visibleSections.premiumSolutions ? (
          solCarouselData ? (
            <PremiumSolutions carouselData={solCarouselData} />
          ) : (
            <SectionLoader height="700px" />
          )
        ) : (
          <SectionLoader height="700px" />
        )}
      </div>

      {/* Solution Content Section */}
      <div
        data-section="solutionContent"
        ref={(node) => registerSectionRef("solutionContent", node)}
      >
        {visibleSections.solutionContent ? (
          solContentData ? (
            <Solutioncontent solContentData={solContentData} />
          ) : (
            <SectionLoader height="600px" />
          )
        ) : (
          <SectionLoader height="600px" />
        )}
      </div>

      {/* Project Gallery Section */}
      <div
        data-section="projectGallery"
        ref={(node) => registerSectionRef("projectGallery", node)}
      >
        {visibleSections.projectGallery ? (
          solGalleryData ? (
            <Projectgallery solGalleryData={solGalleryData} />
          ) : (
            <SectionLoader height="800px" />
          )
        ) : (
          <SectionLoader height="800px" />
        )}
      </div>
    </>
  );
}
