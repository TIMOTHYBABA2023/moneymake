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

  const handleTransferChange = (type: "local" | "other") => {
    setSelectedTransfer(type);
  };
 
  return (
    <div>
    <div className="w-full bg-white max-w-lg mx-auto p-4">
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
      </div>

      {/* Local Transfer Form */}
      {selectedTransfer === "local" && (
        <div className="bg-white p-6 rounded-lg shadow-md">
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
        <div className="bg-white p-6 rounded-lg shadow-md">
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
    </div>

    </div>
  );
};

export default Transfer;
