import { IoLocationSharp, IoMailOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { motion } from "framer-motion";
// import { CONTACT } from "../constants";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Contact = () => {
  return (
    <div className="bg-n-2 dark:bg-n-9 dark:text-n-3 lg:pb-[120px] lg:pt-[100px]">
      <div className="container py-12">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-4 text-4xl text-center text-n-8/70 dark:text-n-6 font-medium"
          >
            Contact Us
          </motion.h1>
        </div>
        <div className="flex flex-wrap flex-col gap-12 py-16 lg:py-28 pl-4 tracking-wide">
          <div>
            <motion.div
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-3 items-center"
            >
              <IoLocationSharp size={30} className="dark:text-n-5" />
              <h1 className="text-2xl font-medium ">Location</h1>
            </motion.div>
            <motion.div
              variants={container(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg p-0 pl-16 dark:text-n-3/70 pt-2"
            >
              Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
              Raisan, Gandhinagar, Gujarat, India
            </motion.div>
          </div>
          <div>
            <motion.div
              variants={container(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-3 items-center"
            >
              <IoIosCall size={30} className="dark:text-n-5" />
              <h1 className="text-2xl font-medium">Mobile No.</h1>
            </motion.div>
            <motion.div
              variants={container(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg p-0 pl-16 dark:text-n-3/70  pt-2"
            >
              +91-9023987528
            </motion.div>
          </div>
          <div>
            <motion.div
              variants={container(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-3 items-center"
            >
              <IoMailOutline size={30} className="dark:text-n-5" />
              <h1 className="text-2xl font-medium">Mail</h1>
            </motion.div>
            <motion.div
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg p-0 pl-16 cursor-pointer hover:underline dark:text-n-3/70  pt-2"
            >
              <a href="mailto:info@rhyno.in">info@rhyno.in</a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
