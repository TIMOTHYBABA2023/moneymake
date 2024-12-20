"use client";
import React from "react";
import Image from "next/image";
import Arrow_right_icon from "@/public/assets/images/arrow right icon.svg";
import Internet_icon from "@/public/assets/images/internet_icon.svg";
import TV_icon from "@/public/assets/images/tv-icon.svg";
import Electricity_icon from "@/public/assets/images/electricity_icon.svg";

const Payment: React.FC = () => {
  return (
    <div className="w-full max-w-[790px] flex flex-col items-center">
      <div className="w-[90%] flex flex-col items-center">
        <div className="w-full flex flex-col">
          <h5 className="text-center text-[#101828] font-semibold my-8">Pay Bills</h5>
          <div className="flex flex-col gap-10 bg-white py-6 px-8  pb-[98px]">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <Image src={Internet_icon} alt="Internet_icon" />
                <p>Internet</p>
              </div>
              <Image src={Arrow_right_icon} alt="Arrow_right_icon" />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <Image src={TV_icon} alt="TV_icon" />
                <p>Tv</p>
              </div>
              <Image src={Arrow_right_icon} alt="Arrow_right_icon" />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <Image src={Electricity_icon} alt="Electricity_icon" />
                <p>Electricity</p>
              </div>
              <Image src={Arrow_right_icon} alt="Arrow_right_icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
