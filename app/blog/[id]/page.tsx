/* eslint-disable @next/next/no-img-element */
"use client";
import onePost from "@/lib/onePost";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";

const SingleBlog = ({ params }: { params: { slug: string } }) => {
  const [post, setPost] = useState<RecordModel>();

  const getResult = async () => {
    try {
      const res = await onePost(params.slug);
      res && setPost(res);
    } catch (erorr) {
      console.log(erorr);
    }
  };

  useEffect(() => {
    getResult();
  });

  return (
    <div className="text-primary-03 dark:bg-primary-03 dark:text-white">
      <div className="container">
        <div className="grid grid-cols-3 pb-[150px] pt-[104px] ">
          <div className="col-span-2 flex flex-col gap-y-[27px] pr-[48px]">
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-y-[50px] pr-[48px]">
            <div className="rounded-[30px] bg-white drop-shadow-[0_28px_57px_rgba(190,190,190,0.25)] dark:bg-secondry-06 dark:drop-shadow-[0_28px_10px_rgba(70,70,70,0.05)]"></div>
            <div className="rounded-[30px] bg-white drop-shadow-[0_28px_57px_rgba(190,190,190,0.25)] dark:bg-secondry-06 dark:drop-shadow-[0_28px_10px_rgba(70,70,70,0.05)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
