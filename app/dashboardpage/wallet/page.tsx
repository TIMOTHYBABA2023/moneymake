'use client'
import React from "react";

const Wallet: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
       <div className="w-full flex flex-col items-center">
       <h1 className="self-center font-semibold text-[#101828] my-6">Fund Wallet</h1>

              <div className="w-[90%] bg-white p-4 rounded-lg">
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
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Select"
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
          </div>
    </div>
  );
};

export default Wallet;
