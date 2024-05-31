/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "@/components/button";
import Link from "next/link";
import { IoCalendarOutline, IoPersonOutline } from "react-icons/io5";
import { RecordModel } from "pocketbase";
import dateFormater from "@/util/dateFormat";

const PostCard = ({ post }: { post: RecordModel }) => {
  return (
    <Link href={`/blog/${post.id}`} className="w-full rounded-t-[30px]">
      <div className="overflow-hidden rounded-t-[30px]">
        <img src={post.image} alt="" />
      </div>
      <div className="flex flex-col gap-y-[32px] bg-white px-[32px] py-[38px]  drop-shadow-[0_28px_57px_rgba(190,190,190,0.25)] dark:bg-secondry-01 dark:text-white dark:drop-shadow-[0_28px_16px_rgba(70,70,70,0.15)]">
        <div className="flex gap-x-[28px] font-open-sans text-head6 text-[#7d7d7d] dark:text-white">
          <p className="flex items-center gap-x-[10px] ">
            <IoCalendarOutline />
            {dateFormater(post.created)}
          </p>
          <p className="flex items-center gap-x-[10px]">
            <IoPersonOutline />
            Admin
          </p>
        </div>
        <div>
          <h3 className="line-clamp-2 h-[115px] font-jost text-head3 font-medium hover:text-primary-01 sm:text-head2">
            {post.title}
          </h3>
          <p className="line-clamp-2 pt-1 font-open-sans text-base text-[#7d7d7d] dark:text-white sm:text-head6">
            {post.desc}
          </p>
        </div>
        <div>
          <Button
            text="Read more"
            color="bg-primary-03"
            className="px-[42px] py-[14px] text-head6 font-semibold text-white hover:bg-secondry-04 hover:text-primary-03 dark:bg-[#aaa] dark:text-primary-03 dark:hover:bg-secondry-04 dark:hover:text-primary-03"
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
