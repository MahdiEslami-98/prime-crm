import React from "react";
import { motion } from "framer-motion";

const CategoryItem = ({ category }: { category: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="border-b-2 border-dashed border-[#dedede] pb-[23px] dark:border-[#999]"
    >
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        className=" font-open-sans text-head6"
      >
        {category}
      </motion.p>
    </motion.div>
  );
};

export default CategoryItem;
