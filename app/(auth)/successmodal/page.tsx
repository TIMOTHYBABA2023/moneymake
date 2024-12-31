"use client";
import React from "react";
import Image from "next/image";
import success_icon from "@/public/assets/images/Success.svg";
import Link from "next/link";

const SuccessModal = () => {
  return (
    <div className="flex flex-col justify-center items-center">

      <div className="flex flex-col items-center w-[342px] sm:w-[479px] bg-white rounded-3xl gap-2 sm:gap-10 mt-[200px] p-12">
        <Image src={success_icon} alt="success_icon" />
        <div className="flex flex-col items-center gap-6 w-[288px] sm:w-[383px]">
        <h2 className="text-[#012A4A] text-2xl font-bold">Successful</h2>
        <p className="w-[345px] text-center text-sm text-[#101828]">Your password has been changed <br className="sm:hidden" /> successfully. <br className="hidden sm:block"/> Login to access your account</p>
        <button className="bg-[#3538CD] font-semibold text-white py-3 px-4 rounded-md w-[242px] sm:w-[383px]"><Link href="/login">Continue to Login</Link></button>
        </div>
           
      </div>
    </div>
  );
};

export default SuccessModal;