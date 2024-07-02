import { RxArrowTopRight } from "react-icons/rx";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { USP } from "../constants";
import { Link } from "react-router-dom";

export default function Usp({ theme }) {
  return (
    <>
      <div className="bg-n-2 dark:bg-n-9 dark:text-n-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            style={
              theme === "dark"
                ? {
                    "--swiper-pagination-color": "#F9ED32",
                    "--swiper-pagination-bullet-inactive-color": "#F9ED32",
                    "--swiper-pagination-bottom": "-8px",
                  }
                : {
                    "--swiper-pagination-color": "#131313",
                    "--swiper-pagination-bullet-inactive-color": "#131313",
                    "--swiper-pagination-bottom": "-8px",
                  }
            }
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ dynamicBullets: true }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="w-full py-[50px]"
          >
            <div>
              {USP.map((item) => (
                <SwiperSlide
                  className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] bg-n-13/30 dark:bg-n-14/80 group rounded-2xl shadow-xl"
                  key={item.id}
                >
                  <Link to={item.link}>
                    <div className="flex flex-col py-3 px-3 md:py-5 md:px-5 gap-6 justify-between h-full">
                      <item.icon className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] text-n-9/70 dark:text-n-6/95" />
                      <h1 className="text-xl md:text-2xl lg:text-3xl text-center">
                        {item.title}
                      </h1>
                      <RxArrowTopRight className="group-hover:rotate-45 duration-150 w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] text-n-8 dark:text-n-2/50 group-hover:text-n-1" />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </motion.div>
        <div className="container border-b border-n-8 mt-6" />
      </div>
    </>
  );
}
