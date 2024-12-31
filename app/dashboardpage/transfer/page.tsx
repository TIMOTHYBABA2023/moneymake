'use client'
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { banks as BankDetails } from "@/public/bankDetails"
import Selectnetwork from "@/public/assets/images/selection_arrowdown.svg";
import Search_icon from "@/public/assets/images/search_icon.svg";
import Firstbank_icon from "@/public/assets/images/firstbank_icon.svg";
import GtBank_icon from "@/public/assets/images/gtbank_icon.svg";
import FCMB_icon from "@/public/assets/images/fcmbbank_icon.svg";
import Polaris_icon from "@/public/assets/images/polaris_bank.svg";
import Link from "next/link";


const Transfer: React.FC = () => {
  const [selectedTransfer, setSelectedTransfer] = useState("local");
  const [selectedBank, setSelectedBank] = useState<typeof BankDetails[0] | null>(null);
  const [openSelectionOption, setOpenSelectionOption] = useState(false);
  

  const handleBankSelect = (bank: typeof BankDetails[0]) => {
    setSelectedBank(bank);
  };

  const handleTransferChange = (type: "local" | "other" | "beneficiary") => {
    setSelectedTransfer(type);
  };
 
  return (
    <div className="w-full flex max-w-[900px]  flex-col items-center">
      <div className="font-bold text-2xl text-[#101828] my-6">
      {selectedTransfer === "local" && (<h1>Transfer</h1>)}
      {selectedTransfer === "other" && (<h1>Other Banks</h1>)}
      {selectedTransfer === "beneficiary" && (<h1>Beneficiary</h1>)}
      </div>
    <div className="w-[90%] bg-white p-4">
      {/* Transfer Type Buttons */}
      <div className="flex justify-between border-b-2 text-gray-600 mb-6">
        <div
          onClick={() => handleTransferChange("local")}
          className={`cursor-pointer text-center py-2 flex-1 ${
            selectedTransfer === "local"
              ? "text-blue-600 border-b-4 border-blue-600"
              : "text-gray-600"
          }`}
        >
          Local Transfer
        </div>
        <div
          onClick={() => handleTransferChange("other")}
          className={`cursor-pointer text-center py-2 flex-1 ${
            selectedTransfer === "other"
              ? "text-blue-600 border-b-4 border-blue-600"
              : "text-gray-600"
          }`}
        >
          Other Bank Transfer
        </div>
        <div
          onClick={() => handleTransferChange("beneficiary")}
          className={`hidden sm:block cursor-pointer text-center py-2 flex-1 ${
            selectedTransfer === "beneficiary"
              ? "text-blue-600 border-b-4 border-blue-600"
              : "text-gray-600"
          }`}
        >
          Beneficiary
        </div>
      </div>

      {/* Local Transfer Form */}
      {selectedTransfer === "local" && (
        <div className="bg-white p-6 rounded-lg">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">Account Number</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter account number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">Amount</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter an amount"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">Pin</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter pin"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">Description</label>
              <textarea
              rows={4}
                className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Write a short description"
              ></textarea>
            </div>
           
            <Link href="/dashboardpage/confirmtransaction"
              className="w-full py-3 px-4 text-center bg-[#3538CD] text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Continue
            </Link>
          </form>
        </div>
      )}

      {/* Other Bank Transfer Form */}
      {selectedTransfer === "other" && (
        <div className="bg-white p-6 rounded-lg">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">Amount</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter an amount"
              />
            </div>
            <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#012A4A]">Bank</label>
            <div className="flex flex-col gap-2">
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
                <div className="w-full flex gap-4 items-center px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <Image src={Search_icon} alt="Search_icon" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full focus:outline-none"
                  />
                </div>
                <ul className="flex flex-col gap-8 py-4 text-[#101828] text-sm">
                  <li
                    className="flex gap-6 items-center"
                    onClick={() => setOpenSelectionOption(!openSelectionOption)}
                  >
                    <Image src={Firstbank_icon} alt="Firstbank_icon" /> First Bank
                  </li>
                  <li
                    className="flex gap-6 items-center"
                    onClick={() => setOpenSelectionOption(!openSelectionOption)}
                  >
                    <Image src={GtBank_icon} alt="GtBank_icon" />
                    Guaranty Trust Bank
                  </li>
                  <li
                    className="flex gap-6 items-center"
                    onClick={() => setOpenSelectionOption(!openSelectionOption)}
                  >
                    <Image src={Polaris_icon} alt="Polaris_icon" />
                    Polaris Bank
                  </li>
                  <li
                    className="flex gap-6 items-center"
                    onClick={() => setOpenSelectionOption(!openSelectionOption)}
                  >
                    <Image src={FCMB_icon} alt="FCMB_icon" />
                    First City Monument Bank
                  </li>
                </ul>
              </div>
            )}
          </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">Account Number</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter account number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">Pin</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter pin"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">Description</label>
              <textarea
              rows={4}
                className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Write a short description"
              ></textarea>
            </div>
           
            <Link href="/dashboardpage/confirmtransaction"
              type="submit"
              className="w-full py-3 px-4 text-center bg-[#3538CD] text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Continue
            </Link>
          </form>
        </div>
      )}


      {/* Other Bank Transfer Form */}
      {selectedTransfer === "beneficiary" && (
        <div className="bg-white text-[#000000] text-sm p-6 flex flex-col items-center">
          <div className="w-[90%] flex flex-col gap-4">
<div className="flex justify-between items-center">
  <div>
    <p>Abdullahi Steven</p>
    <p>0023456723</p>
    </div>
  <div>Other Bank</div>
</div>
<div className="flex justify-between">
  <div>
    <p>Mary Johnson</p>
    <p>0023456723</p>
    </div>
  <div>Local transfer</div>
</div>
<div className="flex justify-between">
  <div>
    <p>Gaius Udeme</p>
    <p>0023456723</p>
    </div>
  <div>Other Bank</div>
</div>
<div className="flex justify-between">
  <div>
    <p>John Olawale</p>
    <p>0023456723</p>
    </div>
  <div>Local transfer</div>
</div>
          </div>
        </div>
      )}
    </div>

    </div>
  );
};

export default Transfer;
