import AboutSolvingSection from "../components/about/AboutSolvingSection";
import AboutTopBanner from "../components/about/AboutTopBanner";
import AboutVissionMissionSection from "../components/about/AboutVissionMissionSection";
import AboutWhatToSaySection from "../components/about/AboutWhatToSaySection";
import AboutWhySection from "../components/about/AboutWhySection";
import AboutWideSection from "../components/about/AboutWideSection";
import GetStartedSection from "../components/common/GetStartedSection";

export default function AboutPage() {
    return (
        <>
        <AboutTopBanner />
        <AboutWideSection />
        <AboutVissionMissionSection/>
        <AboutWhySection/>
        <AboutSolvingSection/>
        <AboutWhatToSaySection/>
        <GetStartedSection/>
        </>
    )
}