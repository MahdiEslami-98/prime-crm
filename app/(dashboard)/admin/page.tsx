/* eslint-disable @next/next/no-img-element */
"use client";
import getUserInfo from "@/api/getUserInfo";
import Button from "@/components/button";
import Spinner from "@/components/spinner";
import { userInfoRes } from "@/types/userInfoRes";
import getCookie from "@/util/getCookie";
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [user, setUser] = useState<userInfoRes>();
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async (id: string) => {
    try {
      const res = await getUserInfo(id);
      setUser(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userId = getCookie("userId");
    userId && getUser(userId);
    setIsLoading(false);
    console.log(userId);
  }, []);

  console.log(user);
  return (
    <div className="h-full">
      {isLoading && (
        <div className="flex h-full items-center justify-center bg-[#e0e0e0] text-[#1e293b]">
          <Spinner />
        </div>
      )}
      <div className="container h-full text-primary-03">
        {!isLoading && (
          <div className="flex flex-col gap-y-6 px-4 py-8">
            <div className="flex flex-row-reverse items-center justify-between gap-x-8">
              <img src="/images/3201587-200.png" alt="" />
              <p className="text-4xl font-bold">
                Welcome back, {user?.username} 👋
              </p>
            </div>
            <div className="">
              <div>
                <Button
                  text="New Post +"
                  color="bg-primary-03"
                  className="px-8 py-4 font-jost font-semibold text-white"
                />
              </div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
