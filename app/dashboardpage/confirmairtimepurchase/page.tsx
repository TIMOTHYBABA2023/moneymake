import React from "react";
import Image from "next/image";
import Transaction_icon from "@/public/assets/images/Transaction icon.svg";

const ConfirmAirtimePurchase = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90%] flex flex-col items-center gap-8 bg-white py-8 mt-10 text-[#101828]">
        <p className="font-semibold text-[#101828]">Confirm Transaction</p>
        <hr/>

        <div className="w-[90%] flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <p className="text-[#98A2B3] text-sm">Amount</p>
              <p className="text-2xl font-semibold">N1,000</p>
            </div>
            <div>
              <Image src={Transaction_icon} alt="Transaction_icon" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-[#98A2B3] text-sm">To</p>
              <p className="text-2xl font-semibold">07034358766</p>
            </div>
          </div>
          <div className="w-full bg-[#F9FAFB] flex flex-col p-4 gap-8">
            <div className="w-full text-sm flex justify-between">
              <p>Package:</p>
              <p>MTN Data / 6GB</p>
            </div>
            <div className="w-full text-sm flex justify-between">
              <p>Network:</p>
              <p>MTN</p>
            </div>
          </div>
        </div>
        <button className="text-white font-semibold text-sm py-3 w-[86%] bg-[#3538CD] rounded-md">Buy</button>
      </div>
    </div>
  );
};

export default ConfirmAirtimePurchase;
