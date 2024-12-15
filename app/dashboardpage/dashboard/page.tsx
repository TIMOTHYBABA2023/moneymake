"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import burger_icon from "@/public/assets/images/burger_icon.svg";
import close_icon from "@/public/assets/images/close_icon.svg";
import Wallet_plus_icon from "@/public/assets/images/wallet-plus icon.svg";
import Wallet_clone_icon from "@/public/assets/images/clone icon.svg";
import Send_icon from "@/public/assets/images/send icon.svg";
import Chart_icon from "@/public/assets/images/Chart.svg";
import Filter_icon from "@/public/assets/images/filter_icon.svg";
import Gtbank_icon from "@/public/assets/images/gtbank_icon.svg";
import Firstbank_icon from "@/public/assets/images/firstbank_icon.svg";
import Fcmbbank_icon from "@/public/assets/images/fcmbbank_icon.svg";
import arrowup_icon from "@/public/assets/images/arrow-up-right.svg";
import arrowdown_icon from "@/public/assets/images/arrow-down-left.svg";
import logo from "@/public/assets/images/Logo.svg";


const Dashboard: React.FC = () => {
    const [openNavItems, setOpenNavItems] = useState(false);
  
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex w-[90%] flex-col">
        <h2 className="text-[#101828] font-bold text-2xl mb-4">Dashboard</h2>
        <div className="flex flex-wrap gap-6">
        <div className="w-full max-w-[343px] rounded-3xl bg-[#3538CD] p-4">
          <div className="flex items-center justify-center gap-8 text-white">
            <Image src={Wallet_plus_icon} alt="Wallet_plus_icon" />
            <div className="flex flex-col gap-2">
              <div>
                <p>Account balance</p>
                <p className="font-bold  text-2xl">&#x20A6; 60,000</p>
              </div>

              <div>
                <p className="text-[#FAC515]">Wema Bank</p>
                <div className="flex gap-4">
                  <p>9389339393</p>
                  <Image src={Wallet_clone_icon} alt="Wallet_clone_icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[343px] rounded-3xl bg-[#FEFDF0] p-4">
          <div className="w-[80%] flex items-center justify-center gap-8 text-black">
            <Image src={Send_icon} alt="send_icon" />
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-sm">Amount Spent</p>
                <p className="font-bold  text-2xl text-[#101828]">&#x20A6; 65,000</p>
              </div>

              <div>
                <p className="text-[#101828] text-sm">Monthly percentage</p>
                <div className="flex gap-4 text-[#B93815] text-sm">
                  <p>0.5% - 2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="w-[90%] my-10">
        <Image src={Chart_icon} alt="Chart_icon" />
      </div>
      <div className="w-[90%] flex flex-col ">
        <div className="w-[100%] bg-white flex flex-col items-center gap-8 p-4">
          <div className="w-[90%] flex justify-between">
            <p className="font-semibold text-sm text-[#012A4A]">Transaction History</p>
            <div className="flex bg-[#EAECF0] py-2 px-4 rounded-[32px] gap-2">
              <Image src={Filter_icon} alt="Filter_icon" />
              <p>Filter</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex justify-between ">
              <div className="flex gap-6 items-center">
                <div>
                  <Image src={Gtbank_icon} alt="Gtbank_icon" />
                </div>
                <div>
                  <p className="text-[#101828] text-sm">Victor Abimbola</p>
                  <p className="text-[#98A2B3] text-sm">Money for others</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <p className="text-[#98A2B3] text-sm">4/11/2022 <span>4:46PM</span></p>
                  <p className="text-[#34A853] text-sm">&#x20A6;2,000.00</p>
                </div>
                <div>
                  <Image src={arrowdown_icon} alt="arrowdown_icon" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between ">
              <div className="flex gap-6 items-center">
                <div>
                  <Image src={Firstbank_icon} alt="Firstbank_icon" />
                </div>
                <div>
                  <p className="text-[#101828] text-sm">Victor Abimbola</p>
                  <p className="text-[#98A2B3] text-sm">Others</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <p className="text-[#98A2B3] text-sm">4/11/2022 <span>4:46PM</span></p>
                  <p className="text-[#B42318] text-sm">&#x20A6;2,000.00</p>
                </div>
                <div>
                  <Image src={arrowup_icon} alt="arrowup_icon" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between ">
              <div className="flex gap-6 items-center">
                <div>
                  <Image src={Fcmbbank_icon} alt="Fcmbbank_icon" />
                </div>
                <div>
                  <p className="text-[#101828] text-sm">Victor Abimbola</p>
                  <p className="text-[#98A2B3] text-sm">Food</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <p className="text-[#98A2B3] text-sm">4/11/2022 <span>4:46PM</span></p>
                  <p className="text-[#34A853] text-sm">&#x20A6;2,000.00</p>
                </div>
                <div>
                  <Image src={arrowdown_icon} alt="arrowdown_icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
