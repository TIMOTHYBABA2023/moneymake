"use client";
import React from "react";
import Image from "next/image";
import logo_icon from "@/public/assets/images/Logo.svg";
import email_icon from "@/public/assets/images/mail-alt-1.svg";
import contact_icon from "@/public/assets/images/contact_icon.svg";
import phone_icon from "@/public/assets/images/phone_icon.svg";
import password_icon from "@/public/assets/images/lock_icon.svg";
import key_icon from "@/public/assets/images/key-alt.svg";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center m-[48px]">
        <div className="flex items-center gap-4">
          <Image src={logo_icon} alt="Logo_icon" />
          <h1 className="text-[#3538CD] font-semibold sm:font-bold text-[16px] sm:text-[32px] ">MoneyMake</h1>
        </div>

        <h2 className="sm:hidden text-[#012A4A] text-center text-2xl font-semibold mt-[60px] leading-[33.6px] ">
            Get Started with <br /> MoneyMake
          </h2>

        <div className="flex flex-col items-center w-[342px] sm:w-[479px] bg-white rounded-lg sm:rounded-3xl gap-10 mt-8 sm:mt-[80px] p-4 sm:p-12">
          <h2 className="hidden sm:block text-[#012A4A] text-2xl font-bold">
            Get Started with MoneyMake
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col w-[310px] sm:w-[383px] gap-2">
              <label className="font-semibold text-sm">First Name</label>
              <div className="flex border px-4 py-3 rounded-md gap-2 ">
                <Image src={contact_icon} alt="Email_icon" />
                <input
                  type="text"
                  placeholder="Type your first name"
                  className="w-full outline-none text-[#98A2B3] text-sm "
                />
              </div>
            </div>
            <div className="flex flex-col w-[310px] sm:w-[383px] gap-2">
              <label className="font-semibold text-sm">Last Name</label>
              <div className="flex border px-4 py-3 rounded-md gap-2 ">
                <Image src={contact_icon} alt="Email_icon" />
                <input
                  type="text"
                  placeholder="Type your last name"
                  className="w-full outline-none text-[#98A2B3] text-sm "
                />
              </div>
            </div>
            <div className="flex flex-col w-[310px] sm:w-[383px] gap-2">
              <label className="font-semibold text-sm">Email</label>
              <div className="flex border px-4 py-3 rounded-md gap-2 ">
                <Image src={email_icon} alt="Email_icon" />
                <input
                  type="text"
                  placeholder="Type your email"
                  className="w-full outline-none text-[#98A2B3] text-sm "
                />
              </div>
            </div>
            <div className="flex flex-col w-[310px] sm:w-[383px] gap-2">
              <label className="font-semibold text-sm">Phone Number</label>
              <div className="flex border px-4 py-3 rounded-md gap-2 ">
                <Image src={phone_icon} alt="Email_icon" />
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full outline-none text-[#98A2B3] text-sm "
                />
              </div>
            </div>
            <div className="flex flex-col w-[310px] sm:w-[383px] gap-2">
              <label className="font-semibold text-sm">Password</label>
              <div className="flex border px-4 py-3 rounded-md gap-2 ">
                <Image src={password_icon} alt="Email_icon" />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-full outline-none text-[#98A2B3] text-sm "
                />
              </div>
            </div>
            <div className="flex flex-col w-[310px] sm:w-[383px] gap-2">
              <label className="font-semibold text-sm">Confirm Password</label>
              <div className="flex border px-4 py-3 rounded-md gap-2 ">
                <Image src={password_icon} alt="Email_icon" />
                <input
                  type="text"
                  placeholder="Confirm your password"
                  className="w-full outline-none text-[#98A2B3] text-sm "
                />
              </div>
            </div>
            <div className="flex flex-col w-[310px] sm:w-[383px] gap-2">
              <label className="font-semibold text-sm">Pin</label>
              <div className="flex border px-4 py-3 rounded-md gap-2 ">
                <Image src={key_icon} alt="Key_icon" />
                <input
                  type="text"
                  placeholder="Enter pin"
                  className="w-full outline-none text-[#98A2B3] text-sm "
                />
              </div>
            </div>
          </div>
          <button className="bg-[#3538CD] font-semibold text-white py-3 px-4 rounded-md w-[310px] sm:w-[383px]">
            Sign Up
          </button>
            <p className="text-[#101828] hidden sm:block text-sm">
              Already have an account?
              <a href="/login" className="text-[#3538CD] text-sm font-semibold pl-1">
                Login
              </a>
            </p>
          
        </div>
        <div>
            <p className="text-[#101828] sm:hidden mt-[52px] text-sm">
              Already have an account?
              <Link href="/login" className="text-[#3538CD] text-sm font-semibold pl-1">
                Login
              </Link>
            </p>
          </div>
      </div>
    </div>
  );
};

export default Signup;
