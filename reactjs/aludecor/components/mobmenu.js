import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MobMenu = ({ pMenu, sMenu }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Controls the menu visibility
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track which submenu is open
  const [openSubSubMenu, setOpenSubSubMenu] = useState(null); // Track third-level submenu state

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index); // Toggle the submenu
  };

  const handleToggleSubSubMenu = (index) => {
    setOpenSubSubMenu(openSubSubMenu === index ? null : index); // Toggle the third-level submenu
  };

  const handleCloseMenu = () => {
    setMenuOpen(false); // Close the menu
  };
  const allPrimaryMobileData = pMenu?.data;
  const allPrimaryMobileMenus = allPrimaryMobileData?.menus;

  const allSecondaryMobileData = sMenu?.data;
  const allSecondaryMenusMenus = allSecondaryMobileData?.menus;

  return (
    <div>
      <div className="hamburger" onClick={handleToggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={handleCloseMenu}>
          &times;
        </button>
        <ul className="menu-items">
          {allPrimaryMobileMenus?.map((allPrimaryMobileMenu, index) => {
            const primaryMobilechildCount =
              allPrimaryMobileMenu?.children || []; // Ensure it's always an array
            const totalMobileChildCount = primaryMobilechildCount.length;

            return totalMobileChildCount > 0 ? (
              <li key={`priMobile-${index}`}>
                {" "}
                {/* Moved key to parent element */}
                <button
                  onClick={() => handleToggleSubMenu(index)}
                  className="menu-item"
                >
                  {allPrimaryMobileMenu.title}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-down.svg"
                    alt="arrow-down"
                  />
                </button>
                {openSubMenu === index && (
                  <ul
                    className={`submenu ${openSubMenu === index ? "open" : ""}`}
                  >
                    {primaryMobilechildCount?.map(
                      (allPrimaryInnerMobileMenu, innerIndex) => {
                        const primaryInnerMobilechildren =
                          allPrimaryInnerMobileMenu?.children || [];
                        const totalInnerMobileChildCount =
                          primaryInnerMobilechildren.length;

                        return totalInnerMobileChildCount > 0 ? (
                          <li key={`childLevel1-${innerIndex}`}>
                            <button
                              onClick={() =>
                                handleToggleSubSubMenu(`1${innerIndex}`)
                              }
                              className="menu-item"
                            >
                              {allPrimaryInnerMobileMenu.title}
                              <Image
                                width={34}
                                height={16}
                                src="/images/arrow-down.svg"
                                alt="arrow-down"
                              />
                            </button>

                            {openSubSubMenu === `1${innerIndex}` && (
                              <ul
                                className={`submenu ${openSubSubMenu === `1${innerIndex}` ? "open" : ""}`}
                              >
                                {primaryInnerMobilechildren?.map(
                                  (primaryInnerMobilechild, childIndex) => (
                                    <li key={`innerChildPrimary-${childIndex}`}>
                                      <Link
                                        href={
                                          primaryInnerMobilechild.url || "/"
                                        }
                                      >
                                        {primaryInnerMobilechild.title ||
                                          "undefined"}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        ) : (
                          <li key={`childLevel1-${innerIndex}`}>
                            <Link
                              className="menu-item"
                              href={allPrimaryInnerMobileMenu.url || "/"}
                            >
                              {allPrimaryInnerMobileMenu.title || "undefined"}
                            </Link>
                          </li>
                        );
                      }
                    )}
                  </ul>
                )}
              </li>
            ) : (
              <li key={`priMobile-${index}`}>
                <span className="menu-item">
                  {allPrimaryMobileMenu.title || "undefined"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobMenu;
