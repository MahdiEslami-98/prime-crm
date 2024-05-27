/* eslint-disable @next/next/no-img-element */
"use client";
import pb from "@/lib/pocketBase";
import { posts } from "@/types/postsResponse";
import Link from "next/link";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState, Fragment } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState<RecordModel[]>([]);

  const getPosts = async () => {
    try {
      const records = await pb.collection("posts").getFullList({
        sort: "created",
      });
      setPosts(records);
    } catch (erorr) {
      console.log(erorr);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="text-primary-03 dark:bg-primary-03 dark:text-white">
      <div className="container">
        <div className="pb-[161px] pt-[107px] text-center">
          <h2 className="font-jost text-head2 font-semibold">Our Journal</h2>
          <p className="font-open-sans text-head6">
            Get the latest articles from our journal, writing, discuss and share
          </p>
        </div>
        <div className="grid grid-cols-3 pb-[38px]">
          <div className="col-span-2 flex flex-col gap-y-[50px] pr-[50px]">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.id}`}
                key={post.id}
                className="w-full overflow-hidden rounded-t-[30px]"
              >
                <div>
                  <img src={post.image} alt="" />
                </div>
                <div className="flex flex-col gap-y-[32px] bg-white px-[32px] py-[38px] drop-shadow-[0_28px_57px_rgba(190,190,190,0.25)] dark:bg-secondry-01">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-y-[50px]">
            <div className="w-full rounded-[30px]"></div>
            <div className="w-full rounded-[30px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
