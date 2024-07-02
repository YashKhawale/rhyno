import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Compare = () => {
  return (
    <div className="bg-n-2 dark:bg-n-9 dark:text-n-3 sm:min-h-[600px]">
      <div className="container pb-12 border-b border-n-8">
        <div className="py-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl text-center text-n-8/70 dark:text-n-6 font-medium"
          >
            Comparison
          </motion.h1>
        </div>
        <div className="flex items-center flex-col">
          <motion.table
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-full w-full text-center"
          >
            <thead>
              <tr className="font-medium font-lato">
                <th className="p-0 bg-n-5/80 dark:bg-n-8/70">
                  <h2>Specification</h2>
                </th>
                <th className="p-0 bg-n-5/80 dark:bg-n-8/70">
                  <h2>Rhyno SE03 Lite</h2>
                </th>
                <th className="p-0 bg-n-5/80 dark:bg-n-8/70">
                  <h2>Rhyno SE03</h2>
                </th>
                <th className="p-0 bg-n-5/80 dark:bg-n-8/70">
                  <h2>Rhyno SE03 Max</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Battery</th>
                <td>1.8Kwh</td>
                <td>2.7Kwh</td>
                <td>2.7Kwh</td>
              </tr>
              <tr>
                <th>Battery features</th>
                <td>
                  <ul className="translate-x-1 md:translate-x-6 lg:translate-x-1">
                    <li>LFP with 1500 cycles</li>
                    <li>Active Balancing</li>
                    <li>Waterproof (IP67)</li>
                  </ul>
                </td>
                <td>
                  <ul className="translate-x-1 md:translate-x-6 lg:translate-x-1">
                    <li>LFP with 1500 cycles</li>
                    <li>Active Balancing</li>
                    <li>Waterproof (IP67)</li>
                  </ul>
                </td>
                <td>
                  <ul className="translate-x-1 md:translate-x-6 lg:translate-x-1">
                    <li>LFP with 1500 cycles</li>
                    <li>Active Balancing</li>
                    <li>Waterproof (IP67)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Battery warranty</th>
                <td>3 Years</td>
                <td>3 Years</td>
                <td>3 Years</td>
              </tr>
              <tr>
                <th>Charging time</th>
                <td>3 hours (12A)</td>
                <td>4 hours (12A)</td>
                <td>4 hours (12A)</td>
              </tr>
              <tr>
                <th>Motor</th>
                <td>1500W</td>
                <td>1500W</td>
                <td>2000W</td>
              </tr>
              <tr>
                <th>Max speed</th>
                <td>55 km/h</td>
                <td>55 km/h</td>
                <td>65 km/h</td>
              </tr>
              <tr>
                <th>Warranty on electronics</th>
                <td>1 year</td>
                <td>1 year</td>
                <td>1 year</td>
              </tr>
              <tr>
                <th>Max range (@30km/h)</th>
                <td>100 km</td>
                <td>150 km</td>
                <td>120 km</td>
              </tr>
              <tr>
                <th>Max range (@45km/h)</th>
                <td>90 km</td>
                <td>110 km</td>
                <td>100 km</td>
              </tr>
              <tr>
                <th>Max range (@full speed)</th>
                <td>60 km</td>
                <td>90 km</td>
                <td>80 km</td>
              </tr>
              <tr>
                <th>Other key benefits</th>
                <td>
                  <ul className="translate-x-1 md:translate-x-6 lg:translate-x-1">
                    <li>Fire-safe battery</li>
                    <li>Range prediction</li>
                    <li>Comfortable ride</li>
                    <li>Stable and safe</li>
                  </ul>
                </td>
                <td>
                  <ul className="translate-x-1 md:translate-x-6 lg:translate-x-1">
                    <li>Fire-safe battery</li>
                    <li>Range prediction</li>
                    <li>Comfortable ride</li>
                    <li>Stable and safe</li>
                  </ul>
                </td>
                <td>
                  <ul className="translate-x-1 md:translate-x-6 lg:translate-x-1">
                    <li>Fire-safe battery</li>
                    <li>Range prediction</li>
                    <li>Comfortable ride</li>
                    <li>Stable and safe</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </motion.table>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-n-8 text-n-4 dark:bg-n-4 dark:text-n-8 hover:bg-n-4 hover:text-n-8 dark:hover:bg-n-8 dark:hover:text-n-5 dark:border-n-6 border border-n-8 px-4 py-1 sm:text-lg md:text-xl lg:text-2xl rounded-md transition-colors tracking-wide"
          >
            <Link to={"/products"}>Explore</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
