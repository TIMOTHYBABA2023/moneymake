"use client";
import React from "react";
import Image from "next/image";
import Logo_icon from "@/public/assets/images/Logo.svg";
import key_icon from "@/public/assets/images/key-alt.svg";

const ResetPassword = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="flex items-center gap-4">
          <Image src={Logo_icon} alt="Logo_icon" />
          <h1 className="text-[#3538CD] font-bold text-[32px] ">MoneyMake</h1>
        </div>
  <h2 className="sm:hidden text-[#012A4A] text-2xl font-semibold mt-[60px] mb-8">
            Reset Password
          </h2>

          <div className="flex flex-col items-center w-[343px] sm:w-[479px] bg-white sm:rounded-3xl rounded-lg gap-8 sm:gap-10 sm:mt-[80px] p-4 sm:p-12 mx-[16px]">
          <h2 className="hidden sm:block text-[#012A4A] text-2xl font-bold">
            Reset Password
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col w-[310px] sm:w-[383px]  gap-2">
              <label className="font-semibold">New Password</label>
              <div className="flex border px-4 py-3 rounded-md gap-2 ">
                <Image src={key_icon} alt="key_icon" />
                <input
                  type="text"
                  placeholder="Enter your new password"
                  className="w-full outline-none text-[#98A2B3] text-sm "
                />
              </div>
            </div>
            <div className="flex flex-col w-[310px] sm:w-[383px]  gap-2">
              <label className="font-semibold">Confirm Password</label>
              <div className="flex border px-4 py-3 rounded-md gap-2 ">
                <Image src={key_icon} alt="Key_icon" />
                <input
                  type="text"
                  placeholder="Confirm password"
                  className="w-full outline-none text-[#98A2B3] text-sm "
                />
              </div>
            </div>
          </div>
          <button className="bg-[#3538CD] font-semibold text-white py-3 px-4 rounded-md w-[310px] sm:w-[383px]">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
