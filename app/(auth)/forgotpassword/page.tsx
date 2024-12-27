"use client";
import React from "react";
import Image from "next/image";
import Logo_icon from "@/public/assets/images/Logo.svg";
import Email_icon from "@/public/assets/images/mail-alt-1.svg";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center gap-4 mt-12">
        <Image src={Logo_icon} alt="Logo_icon" />
        <h1 className="text-[#3538CD] font-bold text-[32px] ">MoneyMake</h1>
      </div>
      <div className="flex flex-col items-center w-[343px] sm:w-[479px] bg-white rounded-3xl gap-10 m-4 mt-[80px] p-12">
        <h2 className="text-[#012A4A] text-2xl font-bold">Forgot Password</h2>
        <div className="flex flex-col gap-2">
            <p className="text-sm">Enter the email associated with your account and we’ll send an email with instruction to reset your password</p>
          <div className="flex flex-col w-[310px] sm:w-[383px] gap-2">
            <label className="font-semibold">Email</label>
            <div className="flex border px-4 py-3 rounded-md gap-2 ">
              <Image src={Email_icon} alt="Email_icon" />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full outline-none text-[#98A2B3] text-sm "
              />
            </div>
          </div>
        </div>
        <button className="bg-[#3538CD] font-semibold text-white py-3 px-4 rounded-md w-[310px] sm:w-[383px]">Reset Password</button>


        <div className="">
          <a href="/auth/login" className="text-[#3538CD]">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
