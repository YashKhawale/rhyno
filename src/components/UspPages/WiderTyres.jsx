import { motion } from "framer-motion";

const WiderTyres = () => {
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
            Wider Tyres
          </motion.h1>
        </div>
        <div className="tracking-wide text-xl leading-8 px-12 py-6">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Now, say goodbye to skidding and embrace the leaning turns!
            Featuring first-of-its-kind, 9.5-inch wider tyres that make this
            machine an enormous beast that ensures stability on different
            terrains such as wet roads, mud, and sand.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default WiderTyres;
