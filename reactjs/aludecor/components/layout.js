import styles from "../styles/Layout.module.css";
import Footer from "./footer";
import Header from "./header";

export default function Layout({
  children,
  primaryData,
  secondaryData,
  footerMenuData,
  footerData
}) {
  return (
    <>
      <Header primaryMenu={primaryData} secondaryMenu={secondaryData} />
      <main className={styles.main}>{children}</main>
      <Footer footerMenuData={footerMenuData} footer={footerData} />
    </>
  );
}
