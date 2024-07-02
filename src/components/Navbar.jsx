import logo from "../assets/MainLogo2.png";
import logo2 from "../assets/logo2.png";
import { navLinks } from "../constants";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { HiOutlineMenuAlt3, HiOutlineMenuAlt2 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const togglemenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-n-2 dark:bg-n-9 dark:text-n-3">
      <div className="container py-4 pb-4 border-b border-b-neutral-800">
        <div className="flex justify-between items-center">
          <div>
            <Link to={"/"}>
              <img
                src={theme === "dark" ? logo : logo2}
                alt="Logo"
                width={150}
                height={67}
              />
            </Link>
            {}
          </div>
          <div className="hidden md:flex">
            <ul className="flex items-center gap-6 text-xl list-none">
              {navLinks.map((data) => (
                <li key={data.id}>
                  <Link
                    className="inline-block py-4 hover:border-b-2 border-n-14 dark:hover:border-n-5 hover:text-n-9/70 dark:hover:text-n-5 transition-colors duration-300 font-medium"
                    to={data.link}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}

              {/* DarkMode feature implemention */}
              <div className="flex">
                {theme === "dark" ? (
                  <BsSunFill
                    onClick={() => setTheme("light")}
                    className="text-xl cursor-pointer"
                  />
                ) : (
                  <BsFillMoonFill
                    onClick={() => setTheme("dark")}
                    className="text-xl cursor-pointer"
                  />
                )}
              </div>
            </ul>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {/* DarkMode feature implemention */}
            <div className="flex">
              {theme === "dark" ? (
                <BsSunFill
                  onClick={() => setTheme("light")}
                  className="text-xl cursor-pointer"
                />
              ) : (
                <BsFillMoonFill
                  onClick={() => setTheme("dark")}
                  className="text-xl cursor-pointer"
                />
              )}
            </div>
            <div>
              {/* Hamburger Menu */}
              {showMenu ? (
                <HiOutlineMenuAlt2
                  onClick={togglemenu}
                  size={30}
                  className="cursor-pointer transition-all"
                />
              ) : (
                <HiOutlineMenuAlt3
                  onClick={togglemenu}
                  size={30}
                  className="cursor-pointer transition-all"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
