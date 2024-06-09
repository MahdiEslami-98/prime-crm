"use client";
import loginRequest from "@/api/login";
import Toast from "@/components/Toast";
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";
import Input from "@/components/input";
import Logo from "@/components/logo";
import clearToast from "@/util/clearToast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState({ username: false, password: false });
  const [valid, setValid] = useState({ username: false, password: false });
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState({
    showToast: false,
    message: "",
    status: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);

  const usernameHandler = () => {
    if (username.length < 3) {
      setValid((prev) => ({
        ...prev,
        username: false,
      }));
      setIsError((prev) => ({
        ...prev,
        username: true,
      }));
    } else {
      setValid((prev) => ({
        ...prev,
        username: true,
      }));
      setIsError((prev) => ({
        ...prev,
        username: false,
      }));
    }
  };

  const passwordHandler = () => {
    const validPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
    if (validPass.test(password)) {
      setValid((prev) => ({
        ...prev,
        password: true,
      }));
      setIsError((prev) => ({
        ...prev,
        password: false,
      }));
    } else {
      setValid((prev) => ({
        ...prev,
        password: false,
      }));
      setIsError((prev) => ({
        ...prev,
        password: true,
      }));
    }
  };

  const login = async (data: { identity: string; password: string }) => {
    try {
      const response = await loginRequest(data);
      setShowToast({
        showToast: true,
        message: "Login successful",
        status: "text-[#50C878]",
      });
      clearToast(setShowToast);
      response.record.isAdmin ? router.push("/admin") : router.push("/");
    } catch (error) {
      setShowToast({
        showToast: true,
        message: `${(error as Error).message}`,
        status: "text-[#ee6b6e]",
      });
      clearToast(setShowToast);
    }
  };

  const submitLoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valid.password && valid.username) {
      setLoading(true);
      login({ identity: username, password: password });
      e.currentTarget.reset();
      setLoading(false);
    } else if (!valid.password || !valid.username) {
      setShowToast({
        showToast: true,
        message: "Please fill all the fields correctly",
        status: "text-[#ee6b6e]",
      });
      clearToast(setShowToast);
    }
  };

  return (
    <>
      <Toast
        message={showToast.message}
        status={showToast.status}
        showToast={showToast.showToast}
      />
      <div className="flex items-center gap-x-2 px-8 pt-8">
        <Logo />
      </div>
      <div className="flex h-[80%] w-full flex-col justify-center px-8 sm:mx-auto sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[70%]">
        <p className="mb-8 font-jost text-head3 font-semibold">Login</p>
        <form
          onSubmit={(e) => submitLoginHandler(e)}
          className="flex flex-col gap-y-6"
        >
          <div className=" flex w-full flex-col gap-y-2">
            <label htmlFor="username">Username</label>
            <Input
              onChange={(e) => setUsername(e.target.value.trim())}
              onBlur={usernameHandler}
              value={username}
              id="username"
              className="w-full rounded-lg border border-[#ccc] px-4 py-2 font-open-sans outline-none"
            />
            <p
              className={`${isError.username ? "visible" : "invisible"} text-[12px] text-[#ee6b6e]`}
            >
              *Username must be at least 3 characters
            </p>
          </div>
          <div className="flex w-full flex-col gap-y-2">
            <label htmlFor="username">Password</label>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value.trim())}
              onBlur={passwordHandler}
              value={password}
              id="username"
              className="rounded-lg border border-[#ccc] px-4 py-2 font-open-sans outline-none"
            />
            <p
              className={`${isError.password ? "visible" : "invisible"} text-[12px] text-[#ee6b6e]`}
            >
              *Password should be 8 char and contain uppercase, lowercase,
              number and special character
            </p>
          </div>
          <div className="flex w-full flex-col text-white">
            <Button
              text={loading ? "Please wait..." : "Login"}
              color="bg-primary-03"
              type="submit"
              className="py-3"
            />
          </div>
        </form>

        <div className="mt-6 flex items-center font-open-sans text-head6">
          <p>{"Don't have an account?"}</p>
          <Link href={"/signup"} className="ml-2 underline">
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
