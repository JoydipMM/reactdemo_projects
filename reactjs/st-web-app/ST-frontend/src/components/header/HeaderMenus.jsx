import { NavLink } from "react-router-dom";

export default function HeaderMenus() {

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <ul className="header_menus">
      {menuLinks.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu_link active_menu_item" : "menu_link"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
