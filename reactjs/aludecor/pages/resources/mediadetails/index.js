import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Innerbanner from "@/components/mediaDetails/innerbanner/innerbanner";
import MediaDetails from "@/components/mediaDetails/mediaDetails/mediaDetails";

export default function MediaPageDetails() {
    return (
        <>
            <Breadcrumb pagehierarchy={["Resources", "Media", "mediaDetails"]} />
            <Innerbanner />
            <MediaDetails />
        </>
    );
}