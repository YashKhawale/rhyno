import { Link } from "react-router-dom";
import { PRODUCTLIST } from "../constants";
import { motion } from "framer-motion";

const ProductList = () => {
  return (
    <div className="bg-n-2 dark:bg-n-9 dark:text-n-3" id="products">
      <div className="container pb-16 border-b border-n-8">
        <div className="py-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl text-center text-n-8/70 dark:text-n-6 font-medium"
          >
            Products
          </motion.h1>
        </div>
        <div className="flex flex-wrap">
          {PRODUCTLIST.map((product) => (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5, delay: product.id / 4 }}
              className="w-full lg:w-1/3 flex justify-center pb-8 lg:pb-0"
              key={product.id}
            >
              <div className="flex flex-col w-[80%] bg-n-1 dark:bg-n-14 items-center rounded-3xl pb-4 shadow-lg">
                <h2 className="text-n-9 dark:text-n-4 text-2xl tracking-wider">
                  {product.name}
                </h2>
                <div className="relative">
                  <img
                    src={product.img}
                    width={400}
                    height={300}
                    alt={product.name}
                  />
                  <div className="w-full bg-n-1/95 h-full top-0 absolute hover:scale-[85%] transition duration-300 opacity-0 hover:opacity-100 flex items-center justify-center text-n-9 rounded-xl">
                    <ul className="text-2xl font-medium">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                      {/* <li>Fire-safe battery</li>
                      <li>Range prediction</li>
                      <li>Comfortable ride</li>
                      <li>Stable and safe</li> */}
                    </ul>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="bg-n-8 text-n-1 hover:bg-n-2 hover:text-n-9 dark:bg-n-6 dark:text-n-9 dark:hover:bg-n-9 dark:hover:text-n-6 px-4 py-1 font-semibold font-lato text-lg rounded-md transition-colors border border-n-9 dark:hover:border-n-5 shadow-lg">
                    <Link to={product.link}>Explore</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
