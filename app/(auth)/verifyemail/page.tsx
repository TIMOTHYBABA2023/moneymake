"use client";
import React from "react";

const VerifyEmail = () => {
  return (
    <div className="flex flex-col justify-center items-center">

      <div className="flex flex-col items-center w-[343px] sm:w-[479px] bg-white rounded-3xl gap-10 mt-[200px] p-12">
        <h2 className="text-[#012A4A] text-2xl font-bold">Verify your email</h2>
        <div className="flex flex-col items-center gap-8 w-[310px] sm:w-[383px]">
        <p className="w-[272px] text-center text-sm">Hi there, use the link below to verify <br />
            your email and start enjoying MoneyWay.</p>
        <button className="bg-[#3538CD] text-white py-3 px-4 rounded-md w-[310px] sm:w-[383px]">Verify email</button>
        </div>
           
      </div>
    </div>
  );
};

export default VerifyEmail;
