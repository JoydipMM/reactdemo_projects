import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import MobMenu from "./mobmenu";
import HeaderMegaMenu from "./HeaderMegaMenu/HeaderMegamenu"
import { X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useRouter } from "next/router";

import AccountMenu from "./accountMenu/accountMenu";

export default function Header({ primaryMenu, secondaryMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  //console.log("secondaryMenu", secondaryMenu);
  const allPrimaryMenuData = primaryMenu?.data;
  const allPrimaryMenus = allPrimaryMenuData?.menus;

  const allSecondaryMenuData = secondaryMenu?.data;
  const allSecondaryMenus = allSecondaryMenuData?.menus;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 54) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";
    link.type = "text/css";
    link.crossOrigin = "anonymous"; // Optional
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Aludecor</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        /> */}
      </Head>

      <header
        className={`${styles.header} ${isScrolled ? "fixed" : "notfixed"}`}
      >
        <div className={styles.topbar}>
          <ul>
            {allSecondaryMenus.map((allSecondaryMenu, index) => {
              const secondaryChilds = allSecondaryMenu?.children;
              const totalsecondaryChildCount = secondaryChilds.length;
              //  console.log("secondaryChildCount", totalsecondaryChildCount);
              return (
                <li
                  key={`secondaryItem-${index}`}
                  className={totalsecondaryChildCount > 0 ? "dropitem" : null}
                >
                  <Link href={allSecondaryMenu.url || "/"}>
                    {allSecondaryMenu.title || "Untitled"}
                  </Link>
                  {totalsecondaryChildCount > 0 ? (
                    <div className="dropdown">
                      <ul>
                        {secondaryChilds.map((secondaryChild, index) => (
                          <li key={`secondmenu-${index}`}>
                            <Link href={secondaryChild.url || "#"}>
                              {secondaryChild.title || "Untitled"}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.container}>
          <div className={styles.secondmenubar}>
            <div className={styles.logoarea}>
              <Link href={"/"}>
                <Image
                  fill={true}
                  src="/images/logo.svg"
                  alt="logo"
                  title="logo"
                />
              </Link>
              <div className={styles.bordertop}></div>
            </div>

            <div className="right-part">
              <div className="main_menu_sec">
                <HeaderMegaMenu/>
              </div>
              <Link
                href="/contactus?requestform=1"
                className="common-btn newbtn"
              >
                <label>
                  Request a quote
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                  />
                </label>
              </Link>
              <div className="bordertop"></div>
              <Link
                href="#"
                onClick={() => setIsOpen(true)}
                className="search-btn"
              >
                <label>Search</label>
                <Image
                  width={22}
                  height={22}
                  src="/images/search-normal.svg"
                  alt=""
                />
              </Link>
              <div className="bordertop"></div>
              <AccountMenu />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="search-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="search-box"
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {/* Close Button */}
                <button
                  className="close-button"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="close-icon" />
                </button>

                {/* Search Input */}
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="search-input"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
