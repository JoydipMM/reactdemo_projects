import clientstyles from "@/components/Home/client/client.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";


export default function ClientSay() {

  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <h2 className="centertie"><span>What Our Clients Say</span>
            <AnimatedText text="Voices of Trust and Excellence" />
          </h2>
          <div className={clientstyles.client_wrp}>
            <div className={clientstyles.client_box}>
              <div className={clientstyles.categry_box}>Architects and Designers</div>
              <div className={clientstyles.contentbox}>"Aludecor's wide range of textures and finishes allowed me to bring my bold design concepts to life. The panels are not just aesthetically pleasing but also incredibly reliable."</div>

              <div className={clientstyles.namebox}>
                <Image src="/images/clientprofile.svg" alt="Clientprofile" width={60} height={60} />
                <div className={clientstyles.namebox_title}>
                  – Ar. Priya Kapoor, Lead Architect, <span>Urban Spaces Studio</span>
                </div>
              </div>
            </div>

            <div className={clientstyles.client_box}>
              <div className={clientstyles.categry_box}>NGOs</div>
              <div className={clientstyles.contentbox}>"Aludecor's wide range of textures and finishes allowed me to bring my bold design concepts to life. The panels are not just aesthetically pleasing but also incredibly reliable."</div>

              <div className={clientstyles.namebox}>
                <Image src="/images/clientprofile.svg" alt="Clientprofile" width={60} height={60} />
                <div className={clientstyles.namebox_title}>
                  Ravi Mehra, Project Manager, <span>Ravi Mehra, Project Manager, BuildPro Constructions</span>
                </div>
              </div>
            </div>

            <div className={clientstyles.client_box}>
              <div className={clientstyles.categry_box}>community leaders</div>
              <div className={clientstyles.contentbox}>"Aludecor's wide range of textures and finishes allowed me to bring my bold design concepts to life. The panels are not just aesthetically pleasing but also incredibly reliable."</div>

              <div className={clientstyles.namebox}>
                <Image src="/images/clientprofile.svg" alt="Clientprofile" width={60} height={60} />
                <div className={clientstyles.namebox_title}>
                  – Ar. Priya Kapoor, Lead Architect, <span>Urban Spaces Studio</span>
                </div>
              </div>
            </div>

            <div className={clientstyles.client_box}>
              <div className={clientstyles.categry_box}>Builders and Contractors</div>
              <div className={clientstyles.contentbox}>"Aludecor's wide range of textures and finishes allowed me to bring my bold design concepts to life. The panels are not just aesthetically pleasing but also incredibly reliable."</div>

              <div className={clientstyles.namebox}>
                <Image src="/images/clientprofile.svg" alt="Clientprofile" width={60} height={60} />
                <div className={clientstyles.namebox_title}>
                  Ravi Mehra, Project Manager, <span>Ravi Mehra, Project Manager, BuildPro Constructions</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}