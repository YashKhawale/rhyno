import { ImagesSE03, SE03 } from "../../constants";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const se03 = ({ theme }) => {
  return (
    <div className="bg-n-2 dark:bg-n-9 dark:text-n-3">
      <div className="container border-b border-n-8 py-6">
        <div className="pt-12 pb-16 flex justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl text-center text-n-8/70 dark:text-n-6 font-medium pb-2 border-b border-n-13/20 dark:border-n-2/20"
          >
            Rhyno SE03
          </motion.h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 flex items-center justify-center md:-translate-x-3"
          >
            <Swiper
              style={
                theme === "dark"
                  ? {
                      "--swiper-navigation-color": "#F9ED32",
                      "--swiper-pagination-color": "#fff",
                      "--swiper-pagination-bullet-inactive-color": "#fff",
                    }
                  : {
                      "--swiper-navigation-color": "#000",
                      "--swiper-pagination-color": "#000",
                      "--swiper-pagination-bullet-inactive-color": "#000",
                    }
              }
              spaceBetween={30}
              zoom={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-full pb-[50px] mb-6"
            >
              {ImagesSE03.map((item) => (
                <SwiperSlide
                  className="flex justify-center items-center text-center"
                  key={item.id}
                >
                  <div>
                    <img
                      src={item.image}
                      alt={item.image}
                      className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-1/2 flex items-center justify-center text-center md:translate-x-3"
          >
            <table className="shadow-xl">
              <thead>
                <tr>
                  <th className="bg-n-5/80 dark:bg-n-8/70">
                    <h2 className="text-lg lg:text-2xl">Specification</h2>
                  </th>
                  <th className="bg-n-5/80 dark:bg-n-8/70">
                    <h2 className="text-lg lg:text-2xl">Rhyno SE03</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                {SE03.map((specification, index) => (
                  <>
                    <tr key={specification.id}>
                      <th className="text-sm lg:text-xl px-4 bg-n-1 dark:bg-n-9/50">
                        {specification.specification}
                      </th>
                      <td className="px-2">
                        {index === 1 || index === 10 ? (
                          <ul>
                            {specification.value.map((item) => (
                              <li>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          specification.value
                        )}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </motion.div>
          <div className="pt-6 lg:pt-12 pb-3 md:pb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-n-8 text-n-6 hover:bg-n-6 hover:text-n-8 dark:bg-n-5 dark:hover:bg-n-4 transition-colors px-3 py-2 dark:text-n-9 rounded-md text-base md:text-xl shadow-xl font-semibold"
            >
              <Link to={"/payment"}>Buy Now</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default se03;
