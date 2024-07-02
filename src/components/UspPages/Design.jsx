import { motion } from "framer-motion";

const Design = () => {
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
            Rugged and Simple Design
          </motion.h1>
        </div>
        <div className="tracking-wide text-xl leading-8 px-12 py-6">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            We've had enough of the EVs looking and feeling like fragile plastic
            toys. Often fading out and shamelessly breaking in minor accidents,
            ending up spending weeks and months at service stations for complex
            repairs. We took a bold step of making something raw, rugged, and
            practical. We kept it so simple that even your trusted local
            mechanic can understand and repair most of it.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Design;
