import styles from "./SectionLoader.module.css";
const SectionLoader = ({ height = "500px" }) => {
  return (
    <div className={styles.loaderContainer} style={{ height }}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default SectionLoader;
