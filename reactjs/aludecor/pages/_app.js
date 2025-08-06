import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import FullScreenLoader from "@/components/FullScreenLoader/fullscreenloader";
import fetchDataSWR from "@/helper/fetchDataSWR";
import Layout from "@/components/layout";
import { SessionProvider } from "next-auth/react";
import Error from "@/components/error/error";

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3
});

const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap"
});

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Handle route changes with NProgress
  useEffect(() => {
    let routeChangeTimer;
    let initialLoadTimer;

    const handleStart = () => {
      clearTimeout(routeChangeTimer);
      NProgress.start();
      setIsLoading(true);
    };

    const handleComplete = () => {
      clearTimeout(routeChangeTimer);
      routeChangeTimer = setTimeout(() => {
        NProgress.done();
        setIsLoading(false);
      }, 500);
    };

    // Set initial load timer
    initialLoadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      clearTimeout(routeChangeTimer);
      clearTimeout(initialLoadTimer);
      NProgress.remove();
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  // Data fetching
  const { fetchdata: primaryMenuData, isError: isErrorPrimary } = fetchDataSWR(
    "menu?menu_name=primary-menu"
  );
  const { fetchdata: secondaryMenuData, isError: isErrorSecondary } =
    fetchDataSWR("menu?menu_name=secondary-menu");
  const { fetchdata: footerMenuData, isError: isErrorFooter } = fetchDataSWR(
    "menu?menu_name=footer-menu"
  );
  const { fetchdata: footerData, isError: isErrorFooterData } =
    fetchDataSWR("global/footer");

  // Check if all data is loaded
  const isDataLoaded =
    primaryMenuData && secondaryMenuData && footerMenuData && footerData;

  // Show loader while data is loading or route is changing
  if (!isDataLoaded || isLoading) {
    return <FullScreenLoader isLoading={true} />;
  }

  // Handle errors
  if (
    isErrorPrimary ||
    isErrorSecondary ||
    isErrorFooter ||
    isErrorFooterData
  ) {
    return <Error />;
  }

  return (
    <SessionProvider session={pageProps.session}>
      <main className={poppins.className}>
        <Layout
          primaryData={primaryMenuData}
          secondaryData={secondaryMenuData}
          footerMenuData={footerMenuData}
          footerData={footerData}
        >
          <Component {...pageProps} />
        </Layout>
      </main>
    </SessionProvider>
  );
}
