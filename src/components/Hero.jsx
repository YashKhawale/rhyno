import { ReactTyped, Typed } from "react-typed";
import group from "../assets/SE03Max/black_front_view.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-n-2 dark:bg-n-9 dark:text-n-3 duration-300 relative">
      <div className="container min-h-[620px] flex border-b border-b-n-8">
        <div className="w-full flex flex-col md:flex-row justify-center items-center">
          <div className="flex-1 ">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={group}
              width={500}
              height={500}
              alt="bike"
              className="relative max-h-[640px] z-10 sm:scale-100 xl:scale-125"
            />
          </div>

          <div className="flex-1 flex flex-col space-y-6 items-center md:translate-x-6 lg:translate-x-0">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:text-3xl text-2xl font-semibold text-center"
            >
              “Let's Elevate Your Ride Experience With Rhyno
              <br />
              Where Superiority Meets <br />
              <ReactTyped
                strings={["Style.", "Elegance.", "Minimalism.", "Comfort."]}
                typeSpeed={80}
                backSpeed={90}
                loop
                className="md:text-3xl text-2xl font-semibold text-n-8/70 dark:text-n-5"
              ></ReactTyped>
              "
            </motion.p>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-n-9 text-n-6 dark:bg-n-6 dark:text-n-9 border-[1.5px] border-n-8 dark:border-none text-sm md:text-base lg:text-lg font-semibold px-4 py-2 rounded-md hover:bg-n-1 hover:text-n-9 dark:hover:bg-n-1 w-fit transition-colors duration-300 shadow-xl"
            >
              <Link to={"/payment"}>Pre-book</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
