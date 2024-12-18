import React from "react";
import Image from "next/image";
import Success_icon from "@/public/assets/images/Success.svg";
import Share_icon_blue from "@/public/assets/images/share_icon_blue.svg";

const Successfultransaction = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-8 pt-[100px]">
          <div className="w-[90px] h-[90px]">
            <Image
              src={Success_icon}
              alt="Success_icon"
              className="w-full h-full"
            />
          </div>
          <p className="font-bold text-2xl text-[#101828]">Successful</p>
          <p className="text-[#98A2B3] text-sm text-center">
            Your transaction was made successful
          </p>
        </div>
        <div className="bg-[#E0EAFF] flex gap-2 py-3 w-[90%] rounded-md justify-center mt-[150px]">
          <p className="text-[#3538CD] text-sm font-semibold">Share receipt</p>
          <Image src={Share_icon_blue} alt="Share_icon_blue" />
        </div>
        <div className="flex gap-2 py-3 w-[90%] bg-[#F2F4F7] rounded-md justify-center mt-4 mb-[100px]">
          <p className="text-[#101828] text-sm">Close</p>
        </div>
      </div>
    </div>
  );
};

export default Successfultransaction;
