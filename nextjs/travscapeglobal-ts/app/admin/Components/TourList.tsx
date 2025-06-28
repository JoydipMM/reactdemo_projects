import Link from "next/link";
import Image from "next/image";

const getData = async () =>{
    try {
        const fetchResponse = await fetch("http://localhost:3000/api/demoapi",{
            cache: "no-store"
        });


        if(!fetchResponse.ok){
            throw new Error("Failed to fetch");
        }
        return fetchResponse.json()
    } catch (error) {
        console.log("Data fetch error", error);
        
    }
}

const TourList = async () => {

    const {tours} = await getData();
    //console.log("data -------", tours);
  return (
    <div>
        {tours.map((tour:any, index:any)=>
        <div key={index}>
            <h3>{tour.title}</h3>
            <p>{tour.description}</p>
            {typeof tour.thumbimage === "string" && tour.thumbimage.trim() !== "" && (<Image src={tour.thumbimage} width={100} height={100} alt="image" />)}
            <Link href={`/admin/tournew/${tour._id}`}>Update</Link>
            </div>
            
        )}
    </div>
  )
}

export default TourList
