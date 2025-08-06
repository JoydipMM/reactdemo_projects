import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import certificatesstyles from "@/components/recognition/certificates/certificates.module.css";
import Image from "next/image";
import "react-tabs/style/react-tabs.css";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Achivement({ achievementsData }) {
  const allAchieveData = achievementsData?.data?.content;
  const achievements = allAchieveData?.achievements;
  return (
    <>
      <section className={`${certificatesstyles.Expl_metalmpwr} commonpadding`}>
        <div className="container">
          <div className={`${certificatesstyles.achivment}`}>
            <div className={`${certificatesstyles.achivmentlft}`}>
              <h2>
                <AnimatedText text={allAchieveData?.heading} />
              </h2>
              <h3>{allAchieveData?.subheading}</h3>
            </div>
            <div className={`${certificatesstyles.achivmentrgt}`}>
              {achievements &&
                achievements.map((achievement, index) => {
                  return (
                    <div
                      className={`${ourprojectsstyles.prj_innerbox} ${certificatesstyles.prj_innerboxs}`}
                      key={`achievementId-${index}`}
                    >
                      <div
                        className={`${ourprojectsstyles.prj_innerbox_overlay} ${certificatesstyles.prj_innerbox_overlays}`}
                      >
                        <Image
                          src={achievement?.icon?.url}
                          alt="Link"
                          width={100}
                          height={100}
                        />
                        <div
                          className={`${ourprojectsstyles.prj_overltitle} ${certificatesstyles.prj_overltitles}`}
                        >
                          {achievement?.number}
                        </div>
                        <div
                          className={`${ourprojectsstyles.prj_overltxt} ${certificatesstyles.prj_overltxts}`}
                        >
                          {achievement?.information}
                        </div>
                      </div>
                      <Image
                        src={achievement?.background?.url}
                        alt="resources"
                        fill={true}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
