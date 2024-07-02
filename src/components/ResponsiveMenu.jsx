import { FaUserCircle } from "react-icons/fa";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "-left-full"} 
      absolute top-0 z-50 bg-n-4/90 dark:bg-n-12/95 backdrop-blur-sm h-screen w-[75%] md:hidden rounded-r-xl shadow-2xl flex flex-col justify-between px-6 transition-all duration-300 py-6`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1 className="text-lg font-semibold tracking-wide">Hello User</h1>
            <h2 className="p-0 dark:text-n-6 font-poppins font-medium">
              Premium User
            </h2>
          </div>
        </div>
        {/* Links */}
        <nav className="pt-14 pl-3">
          <ul className="list-none flex flex-col gap-6">
            {navLinks.map((data) => (
              <li key={data.id}>
                <Link
                  className="text-lg font-medium tracking-wide"
                  to={data.link}
                  // onClick={(showMenu = false)}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Footer */}
      <div>
        <h1>
          <div>&copy; RhynoEv Pvt. Ltd.</div>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
