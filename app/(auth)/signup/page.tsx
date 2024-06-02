"use client";
import signupRequest from "@/api/signup";
/* eslint-disable @next/next/no-img-element */
import Toast from "@/components/Toast";
import Button from "@/components/button";
import Input from "@/components/input";
import clearToast from "@/util/clearToast";
import Link from "next/link";
import React, { useState } from "react";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reapeatPassword, setRepeatPassword] = useState("");
  const [isError, setIsError] = useState({
    username: false,
    password: false,
    repeatPassword: false,
  });
  const [valid, setValid] = useState({
    username: false,
    password: false,
    repeatPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState({
    showToast: false,
    message: "",
    status: "",
  });

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
  const repeatPasswordHandler = () => {
    if (password !== reapeatPassword) {
      setValid((prev) => ({
        ...prev,
        repeatPassword: false,
      }));
      setIsError((prev) => ({
        ...prev,
        repeatPassword: true,
      }));
    } else {
      setValid((prev) => ({
        ...prev,
        repeatPassword: true,
      }));
      setIsError((prev) => ({
        ...prev,
        repeatPassword: false,
      }));
    }
  };

  const signup = async (data: {
    username: string;
    password: string;
    passwordConfirm: string;
  }) => {
    try {
      const res = await signupRequest(data);
      setShowToast({
        showToast: true,
        message: `Signup successful`,
        status: "text-[#4ade80]",
      });
    } catch (error) {
      setShowToast({
        showToast: true,
        message: `${(error as Error).message}`,
        status: "text-[#ee6b6e]",
      });
      clearToast(setShowToast);
    }
  };

  const submitSignupHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valid.username && valid.password && valid.repeatPassword) {
      setLoading(true);
      signup({
        username: username,
        password: password,
        passwordConfirm: reapeatPassword,
      });
      e.currentTarget.reset();
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } else if (!valid.username || !valid.password || !valid.repeatPassword) {
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
        <img src="/images/Logo.png" alt="" />
        <p className="font-jost text-head2 font-bold">Prime CRM</p>
      </div>
      <div className="flex h-[80%] w-full flex-col justify-center px-8 sm:mx-auto sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[70%]">
        <p className="mb-8 font-jost text-head3 font-semibold">Signup</p>
        <form
          className="flex flex-col gap-y-6"
          onSubmit={(e) => submitSignupHandler(e)}
        >
          <div className=" flex w-full flex-col gap-y-1">
            <label htmlFor="username">Username</label>
            <Input
              onBlur={usernameHandler}
              onChange={(e) => setUsername(e.target.value.trim())}
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
          <div className="flex w-full flex-col gap-y-1">
            <label htmlFor="username">Password</label>
            <Input
              type="password"
              onBlur={passwordHandler}
              onChange={(e) => setPassword(e.target.value)}
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
          <div className="flex w-full flex-col gap-y-1">
            <label htmlFor="repeatpass">Repeat Password</label>
            <Input
              type="password"
              onBlur={repeatPasswordHandler}
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={reapeatPassword}
              id="repeatpass"
              className="rounded-lg border border-[#ccc] px-4 py-2 font-open-sans outline-none"
            />
            <p
              className={`${isError.repeatPassword ? "visible" : "invisible"} text-[12px] text-[#ee6b6e]`}
            >
              *Should be same as password
            </p>
          </div>
          <div className="flex w-full flex-col text-white">
            <Button
              text={loading ? "Please wait..." : "Sign up"}
              color="bg-primary-03"
              type="submit"
              className="py-3"
            />
          </div>
        </form>

        <div className="mt-6 flex items-center font-open-sans text-head6">
          <p>{"Already have an account?"}</p>
          <Link href={"/login"} className="ml-2 underline">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
