'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Eye_icon from "@/public/assets/images/eye_icon.svg"

const SecuritySettings = () => {
     const [selectedSetting, setSelectedSetting] = useState("password");

    
      const handleTransferChange = (type: "password" | "transaction_pin") => {
        setSelectedSetting(type);
      };
  return (
    <div className='flex flex-col items-center pt-8'><p className='text-[#101828] font-semibold py-4'>Security Settings</p>
          <div className="w-[94%] flex flex-col rounded-md bg-white max-w-lg mx-auto px-2 pb-4">
              {/* Setting Type Buttons */}
              <div className="self-center w-[95%] flex border-b-2 border-[#DADADA] justify-between mb-6">
                <div
                  onClick={() => handleTransferChange("password")}
                  className={`cursor-pointer text-sm text-center py-2 flex-1 ${
                    selectedSetting === "password"
                      ? "text-[#3538CD] border-b-4 border-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  Change Password
                </div>
                <div
                  onClick={() => handleTransferChange("transaction_pin")}
                  className={`cursor-pointer text-sm  text-center py-2 flex-1 ${
                    selectedSetting === "transaction_pin"
                      ? "text-[#3538CD] border-b-4 border-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  Change Transaction Pin
                </div>
              </div>
        
              {/* Change Password Form */}
              {selectedSetting === "password" && (
                <div className="bg-white px-4 rounded-lg">
                    <p className='w-[95%] text-sm text-[#98A2B3] pb-4'>Password must contain atleast 1 letter, 1 number, and 1 symbol. Minimum lenght is 
                    8 characters</p>
                  <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#012A4A]">Old Password</label>
                      <div className=' relative flex'>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <Image src={Eye_icon} alt='Eye_icon' className='absolute right-5 top-3'/>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#012A4A]">New Password</label>
                      <div className=' relative flex'>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <Image src={Eye_icon} alt='Eye_icon' className='absolute right-5 top-3'/>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#012A4A]">Confirm Password</label>
                      <div className=' relative flex'>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <Image src={Eye_icon} alt='Eye_icon' className='absolute right-5 top-3'/>
                      </div>
                    </div>
                   
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-[#3538CD] text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                      Update
                    </button>
                  </form>
                </div>
              )}
        
              {/* Change Pin form Form */}
              {selectedSetting === "transaction_pin" && (
                <div className="bg-white px-4 rounded-lg">
                    <p className='w-[95%] text-sm text-[#98A2B3] pb-4'>Minimum lenght is 4 characters</p>
                  <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#012A4A]">Old Pin</label>
                      <div className=' relative flex'>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <Image src={Eye_icon} alt='Eye_icon' className='absolute right-5 top-3'/>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#012A4A]">New Pin</label>
                      <div className=' relative flex'>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <Image src={Eye_icon} alt='Eye_icon' className='absolute right-5 top-3'/>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#012A4A]">Confirm Pin</label>
                      <div className=' relative flex'>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <Image src={Eye_icon} alt='Eye_icon' className='absolute right-5 top-3'/>
                      </div>
                    </div>
                   
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-[#3538CD] text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                      Update
                    </button>
                  </form>
                </div>
              )}
            </div>
    </div>
  )
}

export default SecuritySettings;