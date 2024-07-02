import { motion } from "framer-motion";

const LfpBattery = () => {
  return (
    <div className="bg-n-2 dark:bg-n-9 dark:text-n-3 min-h-[768px] md:mt-[100px]">
      <div className="container py-16">
        <div className="py-12 pb-16 flex justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl text-center text-n-8/70 dark:text-n-6 font-medium pb-2 border-b border-n-13/20 dark:border-n-2/20"
          >
            LFP Battery
          </motion.h1>
        </div>
        <div className="tracking-wide text-xl leading-8 px-12 py-6">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
            renowned for their safety features—eliminating the risk of fire
            associated with other Lithium batteries. These batteries boast a
            broader temperature range, ideal for the diverse Indian climate. Our
            technology enhances Rhyno's longevity, complemented by an Active
            Balancing Smart Battery Management System (BMS) for extended life
            and reduced maintenance. Each battery undergoes rigorous
            waterproofing tests according to IP76 standards. But it doesn't stop
            there—our technology goes the extra mile in ensuring the battery's
            lasting durability. Connect with us to discover the thoughtful
            engineering behind our batteries!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default LfpBattery;
