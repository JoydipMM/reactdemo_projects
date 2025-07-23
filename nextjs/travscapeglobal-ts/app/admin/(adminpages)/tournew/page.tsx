import Link from "next/link";
import TourList from "../../Components/TourList";


const page = () => {
    return(<>
    
    new tour list
    <Link href={"/admin/tournew/add/"} >Add New Tour</Link>

    <TourList/>

    </>)
}

export default page;