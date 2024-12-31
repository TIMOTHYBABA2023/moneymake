"use client";
import React from "react";
import Link from "next/link";

const ConfirmEmail = () => {
  return (
    <div className="flex flex-col justify-center items-center">

      <div className="flex flex-col items-center w-[343px] sm:w-[479px] bg-white rounded-3xl gap-10 mt-[200px] p-12">
        <h2 className="text-[#012A4A] text-2xl font-bold">Check your email</h2>
        <div className="flex flex-col items-center gap-8 w-[310px] sm:w-[383px]">
        <p className="w-[272px] sm:w-[345px] text-center text-sm">We sent a password reset link to your email. Please click the link to reset your password.</p>
        <p className="text-[#101828]">Don’t received an email? <span className="text-[#3538CD] font-semibold">Click to Resend</span></p>
        <button className="bg-[#3538CD] font-semibold text-white py-3 px-4 rounded-md w-[310px] sm:w-[383px]"><Link href="/login">Back to Login</Link></button>
        </div>
           
      </div>
    </div>
  );
};

export default ConfirmEmail;
