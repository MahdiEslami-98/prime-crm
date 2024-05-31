"use client";
import React, { useEffect, useRef, useState } from "react";
import Input from "../input";
import Button from "../button";
import addComment from "@/api/addComment";
import { revalidateTag } from "next/cache";
import Toast from "@/components/Toast";
import clearToast from "@/util/clearToast";
import { commentRes } from "@/types/getCommentsByPostIdRes";

const PostComment = ({
  postId,
  onsave,
}: {
  postId: string;
  onsave: React.Dispatch<React.SetStateAction<commentRes>>;
}) => {
  const saveInput = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    status: "",
  });
  const [valid, setValid] = useState({
    name: false,
    email: false,
    website: false,
    message: false,
  });
  const [isError, setIsError] = useState({
    name: false,
    email: false,
    website: false,
    message: false,
  });

  const changeName = (value: string) => {
    setName(value);
    if (value && value.length > 2) {
      setValid((prev) => ({
        ...prev,
        name: true,
      }));
      setIsError((prev) => ({
        ...prev,
        name: false,
      }));
    } else {
      setValid((prev) => ({
        ...prev,
        name: false,
      }));
      setIsError((prev) => ({
        ...prev,
        name: true,
      }));
    }
  };

  const changeEmail = (value: string) => {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setEmail(value);
    if (value && value.match(validEmail)) {
      setValid((prev) => ({
        ...prev,
        email: true,
      }));
      setIsError((prev) => ({
        ...prev,
        email: false,
      }));
    } else {
      setValid((prev) => ({
        ...prev,
        email: false,
      }));
      setIsError((prev) => ({
        ...prev,
        email: true,
      }));
    }
  };

  const changeWebsite = (value: string) => {
    setWebsite(value);
    if (value && value.length > 5) {
      setValid((prev) => ({
        ...prev,
        website: true,
      }));
      setIsError((prev) => ({
        ...prev,
        website: false,
      }));
    } else {
      setValid((prev) => ({
        ...prev,
        website: false,
      }));
      setIsError((prev) => ({
        ...prev,
        website: true,
      }));
    }
  };

  const changeMessage = (value: string) => {
    setMessage(value);
    if (value && value.length > 10) {
      setValid((prev) => ({
        ...prev,
        message: true,
      }));
      setIsError((prev) => ({
        ...prev,
        message: false,
      }));
    } else {
      setValid((prev) => ({
        ...prev,
        message: false,
      }));
      setIsError((prev) => ({
        ...prev,
        message: true,
      }));
    }
  };

  const OnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valid.name && valid.email && valid.website && valid.message) {
      if (saveInput.current?.checked) {
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ name, email, website }),
        );
      }
      setLoading(true);
      try {
        addComment({
          fullname: name,
          email,
          website,
          message,
          postId,
        });
        setShowToast({
          show: true,
          message: "Comment added successfully",
          status: "text-[#50C878]",
        });
        onsave((prev) => ({
          ...prev,
          items: [
            ...(prev.items ?? []),
            {
              fullname: name,
              email,
              website,
              message,
              postId,
              created: new Date().toString(),
              id: Math.random().toString(),
              updated: new Date().toString(),
              collectionId: "comments",
              collectionName: "comments",
            },
          ],
        }));
      } catch (error) {
      } finally {
        setTimeout(() => {
          setLoading(false);
          setMessage("");
          setValid((prev) => ({
            ...prev,
            message: false,
          }));
        }, 1000);
        clearToast(setShowToast);
      }
    } else {
      setShowToast({
        show: true,
        message: "Please fill all the fields",
        status: "text-[#ff4545]",
      });
      clearToast(setShowToast);
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    if (Object.keys(userInfo).length > 0) {
      saveInput.current!.checked = true;
      setName(userInfo.name);
      setEmail(userInfo.email);
      setWebsite(userInfo.website);
      setValid((prev) => ({
        ...prev,
        name: true,
        email: true,
        website: true,
      }));
    }
  }, []);
  return (
    <form className="flex flex-col gap-y-[41px]" onSubmit={(e) => OnSubmit(e)}>
      <div className="flex w-full flex-col gap-y-[29px]">
        <div className="flex w-full flex-col items-center gap-x-[21px] lg:flex-row">
          <div className="flex w-full flex-col">
            <label
              htmlFor="name"
              className="font-open-sans text-head6 font-semibold"
            >
              Fullname *
            </label>
            <Input
              id="name"
              onChange={(e) => changeName(e.target.value)}
              value={name}
              className="mt-[17px] rounded-[20px] border border-[#d3d3d3] px-8 py-8 font-open-sans text-head6 outline-0 dark:border-[#888] dark:bg-secondry-06"
              placeholder="John David"
            />
            <p
              className={`${isError.name ? "" : "invisible"} text-[#ee6b6e] dark:text-[#f69697]`}
            >
              Name should be at least 3 characters
            </p>
          </div>
          <div className="flex w-full flex-col">
            <label
              htmlFor="email"
              className="font-open-sans text-head6 font-semibold"
            >
              Your Email *
            </label>
            <Input
              id="email"
              onChange={(e) => changeEmail(e.target.value)}
              value={email}
              className="mt-[17px] rounded-[20px] border border-[#d3d3d3] px-8 py-8 font-open-sans text-head6 outline-0 dark:border-[#888] dark:bg-secondry-06"
              placeholder="example@yourmail.com"
            />
            <p
              className={`${isError.email ? "" : "invisible"} text-[#ee6b6e] dark:text-[#f69697]`}
            >
              Email should be in valid format
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <label
            htmlFor="website"
            className="font-open-sans text-head6 font-semibold"
          >
            Website*
          </label>
          <Input
            id="website"
            onChange={(e) => changeWebsite(e.target.value)}
            value={website}
            className="mt-[17px] rounded-[20px] border border-[#d3d3d3] px-8 py-8 font-open-sans text-head6 outline-0 dark:border-[#888] dark:bg-secondry-06"
            placeholder="your website address here"
          />
          <p
            className={`${isError.website ? "" : "invisible"} text-[#ee6b6e] dark:text-[#f69697]`}
          >
            Website should be at least 5 characters
          </p>
        </div>
        <div>
          <label
            htmlFor="message"
            className="font-open-sans text-head6 font-semibold"
          >
            Message*
          </label>
          <textarea
            name=""
            id="message"
            value={message}
            rows={6}
            onChange={(e) => changeMessage(e.target.value)}
            placeholder="hello there, i would like to talk about how to ..."
            className="mt-[17px] w-full resize-none rounded-[20px] border border-[#d3d3d3] px-8 py-8 font-open-sans text-head6 outline-0 dark:border-[#888] dark:bg-secondry-06"
          ></textarea>
          <p
            className={`${isError.message ? "" : "invisible"} text-[#ee6b6e] dark:text-[#f69697]`}
          >
            Message should be at least 10 characters
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Input type="checkbox" id="remember" ref={saveInput} />
        <label htmlFor="remember" className="font-open-sans] pl-2">
          save my name, email, and website in this browser for the next time I
          comment
        </label>
      </div>
      <div>
        <Button
          color="bg-primary-03"
          text={loading ? "Please wait ..." : "Post Comment"}
          type="submit"
          className="w-full bg-primary-03 px-[28px] py-[14px] font-jost text-head6 font-semibold text-white ring-1 ring-primary-03 transition-colors duration-200 hover:bg-white hover:text-primary-03 dark:bg-primary-04 dark:text-primary-03 dark:ring-2 dark:ring-primary-04 dark:hover:bg-white dark:hover:text-primary-04 sm:w-fit"
        />
      </div>
      <Toast
        message={showToast.message}
        showToast={showToast.show}
        status={showToast.status}
      />
    </form>
  );
};

export default PostComment;
