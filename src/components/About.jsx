import { ABOUT_US } from "../constants";
import logo from "../assets/MainLogo2.png";
import logo2 from "../assets/logo2.png";
import { motion } from "framer-motion";

const About = ({ theme }) => {
  return (
    <div className="bg-n-2 dark:bg-n-9 dark:text-n-3 sm:min-h-[600px]">
      <div className="container border-b border-n-8 lg:pb-4 pt-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-6 text-4xl text-center text-n-8/70 dark:text-n-6 font-medium"
          >
            About Us
          </motion.h1>
        </div>
        <div className="flex flex-wrap mt-6 items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-center">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                src={theme === "dark" ? logo : logo2}
                width={600}
                height={265}
                alt="about"
                className="mb-6"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 mb-8">
            <div className="flex flex-col gap-3 items-center justify-center lg:justify-start">
              {ABOUT_US.map((para) => (
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="tracking-wide text-lg lg:leading-8 md:text-xl dark:text-n-4"
                  key={para.id}
                >
                  {para.para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
