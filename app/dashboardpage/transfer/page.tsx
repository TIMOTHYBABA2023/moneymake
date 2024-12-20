'use client'
import React from "react";
import { useState } from "react";
import { banks as BankDetails } from "@/public/bankDetails"


const Transfer: React.FC = () => {
  const [selectedTransfer, setSelectedTransfer] = useState("local");
  const [selectedBank, setSelectedBank] = useState<typeof BankDetails[0] | null>(null);

  const handleBankSelect = (bank: typeof BankDetails[0]) => {
    setSelectedBank(bank);
  };

  const handleTransferChange = (type: "local" | "other" | "beneficiary") => {
    setSelectedTransfer(type);
  };
 
  return (
    <div className="w-full flex max-w-[900px] flex-col items-center">
      <div className="font-bold text-2xl text-[#101828] my-6">
      {selectedTransfer === "local" && (<h1>Transfer</h1>)}
      {selectedTransfer === "other" && (<h1>Other Banks</h1>)}
      {selectedTransfer === "beneficiary" && (<h1>Beneficiary</h1>)}
      </div>
    <div className="w-[90%] bg-white p-4">
      {/* Transfer Type Buttons */}
      <div className="flex justify-between mb-6">
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
           
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#3538CD] text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Continue
            </button>
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
      <div className="relative">
        <button
          className="w-full flex items-center justify-between px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none"
        >
          {selectedBank ? (
            <div className="flex items-center gap-2">
              {/* <img
                src={selectedBank.image}
                alt={selectedBank.name}
                className="w-6 h-6"
              /> */}
            </div>
          ) : (
            <span>Select a bank</span>
          )}
          <svg
            className="w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <ul className="absolute mt-1 w-full bg-white border border-[#98A2B3] rounded-md shadow-lg z-10">
          {BankDetails.map((bank) => (
            <li
              key={bank.id}
              className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 cursor-pointer"
              onClick={() => handleBankSelect(bank)}
            >
              {/* <img src={bank.image} alt={bank.name} className="w-6 h-6" /> */}
              <span>{bank.name}</span>
            </li>
          ))}
        </ul>
      </div>
              {/* <label className="text-sm font-semibold text-[#012A4A]">Bank</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Select"
              /> */}
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
           
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#3538CD] text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Continue
            </button>
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
