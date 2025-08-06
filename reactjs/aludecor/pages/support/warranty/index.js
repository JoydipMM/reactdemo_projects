import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Warranty from "@/components/warranty/warranty";

export default function Support() {
    return (
        <>
        <Breadcrumb pagehierarchy={["Support"  ]} />
        <Warranty/>
        </>
    );
}