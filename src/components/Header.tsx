import { useEffect, useState } from "react";
import { getMenuInfo } from "../helpers/wp";
import { NavLink } from "react-router-dom";
import { type Menu } from "../types";

export default function Header() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<Menu[]>([]);

  useEffect(() => {
    getMenuInfo("navbar")
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl 2xl:max-w-8xl relative">
        <nav className="flex md:justify-between pt-4 pb-4 md:px-10 px-4 gap-18 md:gap-0  w-full z-50 top-0 absolute">
          <div className="md:flex-1 z-50">
            <a
              href="/"
              className="flex z-50">
              <img
                className=" md:h-13 h-11 logo mx-auto"
                src={`${domain}wp-content/uploads/2025/10/logo_footer.png`}
                alt="Logo Idear Eventos"
              />
            </a>
          </div>
          <div className="hidden md:flex flex-2 justify-end">
            <ul
              id="desktop-menu"
              className="items-center justify-center hidden text-sm 2xl:text-base md:flex gap-10 fancy-menu font-verdana-regular text-white">
              {menuItems.map((item, index) => {
                let relativePath = new URL(item.permalink).pathname;
                if (relativePath.includes("wp")) {
                  relativePath = relativePath.replace("/wp", "");
                }

                return (
                  <li key={index}>
                    <NavLink
                      className={({ isActive }: { isActive: boolean }) =>
                        `${
                          isActive && window.location.pathname === relativePath ? "activeMenu" : ""
                        } font-verdana-regular pb-1 relative`
                      }
                      to={relativePath}>
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navbar md:hidden absolute">
            <div className={`${menuOpen ? "open" : ""} container nav-container`}>
              <div
                className="hamburger-lines"
                onClick={toggleMenu}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="menu-items">
                <ul
                  id="mobile-menu"
                  className="items-center justify-center md:hidden text-sm  gap-4 fancy-menu uppercase font-verdana-regular text-black">
                   {menuItems.map((item, index) => {
                    let relativePath = new URL(item.permalink).pathname;
                    if (relativePath.includes("wp")) {
                      relativePath = relativePath.replace(
                        "/test3",
                        ""
                      );
                    }

                    return (
                      <li key={index}>
                        <NavLink
                          className={({ isActive }: { isActive: boolean }) =>
                            `${
                              isActive &&
                              window.location.pathname === relativePath
                                ? "activeMenu"
                                : ""
                            } font-object-regular pb-1 relative `
                          }
                          to={relativePath}
                          onClick={closeMenu}
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="spacer-fixed md:hidden"></div>
      </div>
    </header>
  );
}
