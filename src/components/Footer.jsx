import playstore from "../assets/appstore/playstore.svg";
import appstore from "../assets/appstore/appstore.svg";
import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const AppStoreBanner = () => {
  return (
    <div className="bg-n-8 text-n-3 dark:bg-n-2 dark:text-n-9 font-medium">
      <div className="container border-b border-n-8">
        <div className="py-10 flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="flex w-full justify-evenly border-b border-n-1 dark:border-n-8">
              <div>
                <ul className="list-none space-y-4 text-sm md:text-lg">
                  <li>
                    <Link
                      to="/contact"
                      className="hover:text-n-3/70 dark:hover:text-n-9/70"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      className="hover:text-n-3/70 dark:hover:text-n-9/70"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/rhyno-wheels/"
                      className="hover:text-n-3/70 dark:hover:text-n-9/70"
                    >
                      Carrer
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-sm md:text-xl">
                  Get started with our app
                </div>
                <div className="flex gap-2 -translate-y-6">
                  <a href="#">
                    <img
                      src={playstore}
                      alt="playstore"
                      className="w-[100px] md:w-[150px]"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={appstore}
                      alt="appstore"
                      className="w-[100px] md:w-[150px]"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full pt-4">
              <div className="w-full flex justify-evenly lg:flex-row flex-col items-center gap-6 lg:gap-0 text-sm md:text-xl">
                <div>&copy; RhynoEv Pvt. Ltd.</div>
                <div className="flex items-center justify-center gap-4 text-center">
                  <a
                    href="#"
                    className="hover:text-n-3/70 dark:hover:text-n-9/70"
                  >
                    Privacy policy
                  </a>
                  |
                  <a
                    href="#"
                    className="hover:text-n-3/70 dark:hover:text-n-9/70"
                  >
                    Refund policy
                  </a>
                  |
                  <a
                    href="#"
                    className="hover:text-n-3/70 dark:hover:text-n-9/70"
                  >
                    Website policy
                  </a>
                </div>
                <div className="text-lg md:text-2xl flex gap-4">
                  <a
                    href="https://www.instagram.com/rhyno.in?igsh=a2dtdW4zMnB4cmJs"
                    className="hover:text-n-3/70 dark:hover:text-n-9/70"
                  >
                    <RiInstagramLine className="shadow-sm" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/rhyno-wheels/"
                    className="hover:text-n-3/70 dark:hover:text-n-9/70"
                  >
                    <RiLinkedinBoxFill className="shadow-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
