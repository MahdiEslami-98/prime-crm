"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CategoryItem from "@/components/categoryItem";
import RecentPostItem from "@/components/recentPostItem";
import getPosts from "@/api/getPosts";
import { posts } from "@/types/postsResponse";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<posts>();
  const path = usePathname();

  const getResult = async () => {
    try {
      const res = await getPosts();
      res && setPosts(res);
    } catch (erorr) {
      console.log(erorr);
    }
  };

  useEffect(() => {
    getResult();
  }, []);
  return (
    <div className="text-primary-03 dark:bg-primary-03 dark:text-white">
      <div className="absolute right-0 top-[30%] z-10">
        <img src="/images/Background.png" alt="" />
      </div>
      <div className="container">
        {path === "/blog" ? (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="pb-[161px] pt-[107px] text-center"
          >
            <h2 className="font-jost text-head2 font-semibold">Our Journal</h2>
            <p className="font-open-sans text-head6">
              Get the latest articles from our journal, writing, discuss and
              share
            </p>
          </motion.div>
        ) : (
          <div className="pt-[107px]"></div>
        )}
        <div className="grid grid-cols-3 pb-[38px]">
          <div className="col-span-2 flex flex-col gap-y-[50px] pr-[50px]">
            {children}
          </div>
          <div className="flex flex-col gap-y-[50px]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="z-20 w-full rounded-[30px] bg-white px-[34px] py-[46px] drop-shadow-[0_28px_16px_rgba(190,190,190,0.25)] dark:bg-secondry-06 dark:drop-shadow-[0_28px_57px_rgba(70,70,70,0.15)]"
            >
              <div className="flex flex-col gap-y-[19px]">
                <h3 className="font-jost text-head2 font-semibold">
                  Recent Post
                </h3>
                {posts?.items &&
                  posts?.items.map((post) => (
                    <RecentPostItem key={post.id} post={post} />
                  ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="z-20 w-full rounded-[30px] bg-white px-[39px] py-[58px] drop-shadow-[0_28px_16px_rgba(190,190,190,0.25)] dark:bg-secondry-06 dark:drop-shadow-[0_28px_57px_rgba(70,70,70,0.15)]"
            >
              <div className="flex flex-col gap-y-5">
                <h3 className="font-jost text-head2 font-semibold">
                  Categories
                </h3>
                {posts?.items &&
                  posts.items.map((post) => (
                    <CategoryItem key={post.id} category={post.category} />
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
