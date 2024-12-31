"use client";
import React from "react";
import Image from "next/image";
import Bank_image from "@/public/assets/images/gtbank_icon.svg";
import Share_icon from "@/public/assets/images/share_icon.svg";
import Download_icon from "@/public/assets/images/download_icon.svg";

const Transactiondetailsmodal = () => {
  return (
    <div className="w-full p-4 bg-white">
      <div className=" flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[#98A2B3]">You sent cash to</p>
            <div className="flex gap-1 items-center">
              <Image src={Bank_image} alt="Bank_image" />{" "}
              <span className="text-[#101828] font-semibold text-sm">GTB</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#98A2B3]">Amount</p>
            <p className="font-semibold">&#x20A6;2,000.00</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#98A2B3]">Transaction reference</p>
            <p className="font-semibold">NER8364726352</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#98A2B3]">Date</p>
            <p className="font-semibold">2022-11-4 4:36PM</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#98A2B3]">Status</p>
            <p className="font-semibold">Successful</p>
          </div>
        </div>
        <div className="flex gap-1">
            <div className="flex gap-1 py-2 px-4 rounded-md justify-center items-center text-[#34A853] border border-[#34A853]">
                <p className="text-sm">Share Receipt</p>
               <Image src={Share_icon} alt="Share_icon"/>
            </div>
            <div className="flex gap-1 py-2 px-4 rounded-md justify-center items-center border border-[#D0D5DD] text-[#667085]">
                <p className="text-sm">Download image</p>
                <Image src={Download_icon} alt="Download_icon"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Transactiondetailsmodal;
