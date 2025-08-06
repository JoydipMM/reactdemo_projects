import ProjectsRelated from "@/components/metalDetailsPage/projectsRelated/projectsRelated";
import relprdstyles from "../relProduct/relProduct.module.css";

export default function RelProduct({ projectData }) {
  return (
    <>
      <section className={`${relprdstyles.prddetwrp} topadding_bottom`}>
        <ProjectsRelated projectData={projectData} />
      </section>
    </>
  );
}
