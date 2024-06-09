/* eslint-disable @next/next/no-img-element */
"use client";
import getPostById from "@/api/getPostById";
import { responsePostById } from "@/types/responsePostById";
import dateFormater from "@/util/dateFormat";
import React, { SetStateAction, useEffect, useState } from "react";
import { IoCalendarOutline, IoPersonOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import PostComment from "@/components/postComment";
import Comments from "@/components/comments";
import { commentRes } from "@/types/getCommentsByPostIdRes";
import getCommentByPostId from "@/api/getCommentsByPostId";
import getCookie from "@/util/getCookie";

const logos = [
  {
    id: 1,
    icon: <FaFacebook />,
    href: "#",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    href: "#",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    href: "#",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    href: "#",
  },
];

const SingleBlog = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState<responsePostById>();
  const [comments, setComments] = useState<commentRes>();
  const [isAdmin, setIsAdmin] = useState("");

  const getPost = async (param: string) => {
    try {
      const res = await getPostById(param);
      res && setPost(res);
    } catch (erorr) {
      console.log(erorr);
    }
  };

  const getComment = async (param: string) => {
    try {
      const response = await getCommentByPostId(param);
      response && setComments(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost(params.id);
    const admin = getCookie("isAdmin");
    admin && setIsAdmin(admin);
  }, [params.id]);

  useEffect(() => {
    getComment(params.id);
  }, [params.id]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="rounded-[30px] bg-white pb-12 dark:bg-secondry-06"
      >
        <div className="w-full">
          <img
            src={post?.image}
            alt=""
            className="h-full w-full rounded-t-[30px]"
          />
          <div className="mt-[27px] flex gap-x-[28px] font-open-sans text-head6 text-[#7d7d7d] dark:text-[#aaa]">
            <p className="flex items-center gap-x-[10px] px-8">
              <IoCalendarOutline />
              {dateFormater(post?.created ?? new Date().toString())}
            </p>
            <p className="flex items-center gap-x-[10px]">
              <IoPersonOutline />
              Admin
            </p>
          </div>
        </div>
        <div className="list-disc px-8">
          <div
            dangerouslySetInnerHTML={{ __html: post?.title! }}
            className="font-jost text-head2 font-medium hover:text-primary-01"
          ></div>
          <div
            dangerouslySetInnerHTML={{ __html: post?.desc! }}
            className=" font-open-sans text-head6 text-[#606060] dark:text-white"
          ></div>
          <div
            dangerouslySetInnerHTML={{ __html: post?.content! }}
            className="list-disc font-open-sans text-head6 text-[#606060] dark:text-white"
          ></div>
        </div>
      </motion.div>
      <div className="post-gradient hidden">
        <div className="post-inner pl-[32px]"></div>
      </div>
      <div className="border-b border-t border-[#f4f2f0] px-8 dark:border-[#777]">
        <div className="flex justify-between py-[19px]">
          <p className="font-jost text-head4 font-medium">Share</p>
          <div className="flex items-center gap-x-[54px]">
            {logos.map((logo) => (
              <Link href={logo.href} key={logo.id}>
                {logo.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-8 pt-[55px]">
        <h3 className="font-jost text-head2 font-semibold">Leave A Comments</h3>
        <div className="pt-[46px]">
          <PostComment
            postId={params.id}
            onsave={setComments as React.Dispatch<SetStateAction<commentRes>>}
          />
        </div>
      </div>
      <div>
        <h3 className="font-jost text-head2 font-semibold">Comments</h3>
        {comments && <Comments comments={comments} ad={isAdmin} />}
      </div>
    </>
  );
};

export default SingleBlog;
