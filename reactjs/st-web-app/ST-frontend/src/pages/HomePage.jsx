import HomeTopBanner from "../components/home/HomeTopBanner";
import HomeAboutSection from "../components/home/HomeAboutSection";
import HomeWhatWeDoSection from "../components/home/HomeWhatWeDoSection";
import HomeKeyBenefitsSection from "../components/home/HomeKeyBenefitsSection";
import HomeImpactSection from "../components/home/HomeImpactSection";
import HomeHowItWorkSection from "../components/home/HomeHowItWorkSection";


export default function HomePage() {
    return (
        <>
        <HomeTopBanner />
        <HomeAboutSection />
        <HomeWhatWeDoSection/>
        <HomeKeyBenefitsSection/>
        <HomeImpactSection/>
        <HomeHowItWorkSection/>



        {/* <h1>Home Page</h1> */}
        {/* <h1>Home Page</h1>
        <button className="common_button">Read more</button>
        <button className="common_button invert">Read more</button> */}


        </>
    )
}