"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { banks as BankDetails } from "@/public/bankDetails";
import Selectnetwork from "@/public/assets/images/selection_arrowdown.svg";
import MTN_icon from "@/public/assets/images/MTN icon.svg";
import Airtel_icon from "@/public/assets/images/Airtel.svg";
import Glo_icon from "@/public/assets/images/Glo icon.svg";
import Etisalat_icon from "@/public/assets/images/9Mobile icon.svg";

const BuyAirtime: React.FC = () => {
  //   const [selectedNetwork, setSelectedNetwork] = useState("MTN");
  const [openSelectionOption, setOpenSelectionOption] = useState(false);

  //   const handleNetworkChange = (type: "MTN" | "Glo" | "Airtel" | "9Mobile") => {
  //     setSelectedNetwork(type);
  //   };
  return (
    <div className="w-full ">
      <div className="w-full flex flex-col items-center">
        <p className="text-[#101828] font-semibold my-6">
          Buy Airtime on-the-go!
        </p>
        <form className="w-[90%] p-4 rounded-lg bg-white flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#012A4A]">
              Amount
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter an amount"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#012A4A]">
              Network
            </label>
            <div className="relative flex">
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Select"
              />
              <span
                className="absolute right-5 top-3"
                onClick={() => setOpenSelectionOption(!openSelectionOption)}
              >
                <Image src={Selectnetwork} alt="Selectnetwork" />{" "}
              </span>
            </div>
            {openSelectionOption && (
              <div>
                <ul className="flex flex-col gap-8">
                  <li
                    className="flex gap-6"
                    onClick={() => setOpenSelectionOption(!openSelectionOption)}
                  >
                    <Image src={MTN_icon} alt="MTN_icon" /> MTN
                  </li>
                  <li
                    className="flex gap-6"
                    onClick={() => setOpenSelectionOption(!openSelectionOption)}
                  >
                    <Image src={Glo_icon} alt="Glo_icon" />
                    Glo
                  </li>
                  <li
                    className="flex gap-6"
                    onClick={() => setOpenSelectionOption(!openSelectionOption)}
                  >
                    <Image src={Airtel_icon} alt="Airtel_icon" />
                    Airtel
                  </li>
                  <li
                    className="flex gap-6"
                    onClick={() => setOpenSelectionOption(!openSelectionOption)}
                  >
                    <Image src={Etisalat_icon} alt="Etisalat_icon" />
                    9Mobile
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#012A4A]">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter phone number"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#3538CD] text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyAirtime;
