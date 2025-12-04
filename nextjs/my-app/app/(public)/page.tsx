import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="common_container">


        <div className="section_heading_group margin_bottom_120">
          <h1 className="section_heading"><i>What</i>  you’ll leave London with</h1>
          <p className="section_heading_para">Not just notes - you leave with decisions made, plans built and tools your team can use the next day.</p>
        </div>

        <div style={{width:"100%", height:"30px", backgroundColor:"red"}}>fghfgh</div>
        <p>What matters is bookings, not impressions. In this lab, you'll design a paid social campaign for your property: pick platforms, build audience.What matters is bookings, not impressions. In this lab, you'll design a paid social campaign for your property: pick platforms, build audience.What matters is bookings, not impressions. In this lab, you'll design a paid social campaign for your property: pick platforms, build audience.</p>
        <h2 className="text-5xl">fsdfsdf fdsfsdf dgdfgdfg ....................</h2>
        <br/>
        <br/>
        <br/>

        <div style={{ width:'100%', display:'flex', flexWrap:'wrap', gap:'15px' }}>
          <button className="hsd_button"><span>Explore all sessions</span><Image src="/icons/green60-next-arrow.svg" width={14} height={14} alt="arrow_right" /></button>
          <button className="hsd_button line_button"><span>Explore all sessions</span><Image src="/icons/green60-next-arrow.svg" width={14} height={14} alt="arrow_right" /></button>
        </div>

      </div>

    </>
  );
}
