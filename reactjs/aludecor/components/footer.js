import SubscribeForm from "./subscribebox";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer({ footerMenuData, footer }) {
  const [visible, setVisible] = useState(false);
  const allFooterMenuData = footerMenuData?.data;
  const allFooterData = footer?.data?.content;

  const allFooterMenus = allFooterMenuData?.menus;
  const allFooterSocialDatas = allFooterData?.social;
  // console.log("allFooterSocialDatas", allFooterSocialDatas);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="subscribe-area">
            <h3>Stay Updated. Stay Inspired.</h3>
            <div className="subscribe-input">
              <SubscribeForm />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footwrap">
            <div className="foot-address">
              <div className="foot-logo">
                <Image
                  width={240}
                  height={97}
                  src="/images/footer/footer-logo.svg"
                  alt="footer-logo"
                />
              </div>
              <p>{allFooterData?.about}</p>
              <div className="foot-social">
                <ul>
                  {allFooterSocialDatas.map((allFooterSocialData) => (
                    <li
                      key={`socialId-${allFooterSocialData?.id || Math.random()}`}
                    >
                      <Link href={allFooterSocialData?.social_link}>
                        <Image
                          width={24}
                          height={24}
                          src={allFooterSocialData?.icon_url}
                          alt={allFooterSocialData?.icon_alt || "social-menu"}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="foot-link">
              <h4>Quick Links</h4>
              <ul>
                {allFooterMenus.map((allFooterMenu, index) => (
                  <li key={allFooterMenu.id || Math.random()}>
                    <Link href={allFooterMenu.url}>{allFooterMenu.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="foot-contact">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <Image
                    width={22}
                    height={22}
                    src="/images/footer/location.svg"
                    alt="location"
                  />
                  {allFooterData?.address}
                </li>
                <li>
                  <Image
                    width={22}
                    height={22}
                    src="/images/footer/call-calling.svg"
                    alt="call-calling"
                  />
                  <Link href={`tel:${allFooterData?.phone}`}>
                    {allFooterData?.phone}
                  </Link>
                </li>
                <li>
                  <Image
                    width={22}
                    height={22}
                    src="/images/footer/send.svg"
                    alt="send"
                  />{" "}
                  <Link href={`mailto:${allFooterData?.email}`}>
                    {" "}
                    {allFooterData?.email}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footerbottom-con">
            <div className="copyright">
              Aludecor © {new Date().getFullYear()} All Rights Reserved
            </div>
            <div className="footbottom-link">
              <ul>
                <li>
                  <Link href={"/"}> Privacy policy</Link>
                </li>
                <li>
                  <Link href={"/"}> Terms of Use</Link>
                </li>
                <li>
                  <Link href={"/"}> Cookie Policy</Link>
                </li>
                <li>
                  <Link href={"/"}> Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "2rem",
          backgroundColor: "#2F3192",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: visible ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000
        }}
      >
        ↑
      </button>
    </footer>
  );
}
