"use client";
import React from "react";
import Image from "next/image";
import Logo_icon from "@/public/assets/images/Logo.svg";
import Email_icon from "@/public/assets/images/mail-alt-1.svg";
import Key_icon from "@/public/assets/images/key-alt.svg";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center gap-4 mt-12">
        <Image src={Logo_icon} alt="Logo_icon" />
        <h1 className="text-[#3538CD] font-semibold sm:font-bold text-[32px] ">MoneyMake</h1>
      </div>

      <h2 className="sm:hidden text-[#012A4A] text-2xl font-semibold mt-[60px] mb-8">Hi, Welcome back</h2>
      
      <div className="flex flex-col items-center w-[343px] sm:w-[479px] bg-white sm:rounded-3xl rounded-lg gap-8 sm:gap-10 sm:mt-[80px] p-4 sm:p-12 mx-[16px]">
        <h2 className="hidden sm:block text-[#012A4A] text-2xl font-bold">Hi, Welcome Back</h2>
        <div className="flex flex-col gap-8 sm:gap-2">
          <div className="flex flex-col w-[310px] sm:w-[383px] gap-2">
            <label className="font-semibold text-sm">Email</label>
            <div className="flex border px-4 py-3 rounded-md gap-2 ">
              <Image src={Email_icon} alt="Email_icon" />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full outline-none text-[#98A2B3] text-sm "
              />
            </div>
          </div>
          <div className="flex flex-col w-[310px] sm:w-[383px] gap-2">
            <label className="font-semibold text-sm">Password</label>
            <div className="flex border px-4 py-3 rounded-md gap-2 ">
              <Image src={Key_icon} alt="Key_icon" />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full outline-none text-[#98A2B3] text-sm "
              />
            </div>
            <a className="text-[#1570EF] text-sm self-end sm:self-start" href="">Forgot password?</a>
          </div>
        </div>
        <button className="bg-[#3538CD] w-[310px] font-semibold text-white py-3 px-4 rounded-md sm:w-[383px]">Login</button>


        <div className="">
          <p className="hidden sm:block text-[#101828]">Don't have a account? <a href="" className="text-[#3538CD]">Create account</a></p>
        </div>
      </div>
      <div className="sm:hidden mt-[52px]">
          <p className="text-[#101828] text-sm">Don't have a account? <a href="" className="text-[#3538CD] font-semibold text-sm">Create account</a></p>
        </div>
    </div>
  );
};

export default Login;
