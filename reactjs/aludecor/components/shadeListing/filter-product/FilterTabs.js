"use client";
export default function FilterTabs({ activeTab, handleTabClick, styles }) {
  const tabs = [
    "Product Type",
    "Application",
    "Shades/Assembly System",
    "Features"
  ];

  return (
    <div className={styles.gallistname}>
      <ul>
        {tabs.map((tabName) => (
          <li
            key={tabName}
            onClick={() => handleTabClick(tabName)}
            className={activeTab === tabName ? styles.activeTab : ""}
          >
            {tabName}
          </li>
        ))}
      </ul>
    </div>
  );
}
