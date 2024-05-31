/* eslint-disable @next/next/no-img-element */
import dateFormater from "@/util/dateFormat";
import Link from "next/link";
import { RecordModel } from "pocketbase";
import React from "react";
import { motion } from "framer-motion";

const RecentPostItem = ({ post }: { post: RecordModel }) => {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="border-b border-[#dedede] pb-[23px] dark:border-[#999]"
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
        className="flex items-center gap-x-[22px]"
      >
        <div className="min-w-fit overflow-hidden rounded-[20px]">
          <img src={post.image} alt="" className="h-[100px] w-[100px]" />
        </div>
        <div className="pl-[22px]">
          <h4 className="line-clamp-2 font-jost text-head6 font-medium">
            {post.title}
          </h4>
          <div className="mt-[10px] flex flex-wrap items-center gap-x-1 font-open-sans text-[18px] text-[#666a82] dark:text-[#999] sm:gap-x-[20px]">
            <p className="text-nowrap">{dateFormater(post.created)}</p>
            <div className="h-[5px] w-[5px] rounded-full bg-primary-01"></div>
            <p>{post.category}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default RecentPostItem;
