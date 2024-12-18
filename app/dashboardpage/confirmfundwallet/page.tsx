import React from "react";
import Image from "next/image";
import ConfirmFundTransfer_icon from "@/public/assets/images/confirmation_icon.svg";

const FundWalletConfirmation = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center mt-[50px] mb-6 ">
        <p className="text-[#101828] mt-2 mb-4 font-semibold">
          Confirm Transaction
        </p>

        <div className="w-[90%] bg-white rounded-lg flex flex-col items-center py-4">
          <div className="w-[90%] rounded-md bg-[#FFFAEB] border border-[#772917] py-3 pl-2">
            <div className="flex text-sm text-[#772917] items-start gap-2">
              <Image src={ConfirmFundTransfer_icon} alt="Confirmation_icon" />
              <p>
                Please confirm transaction details before clicking send as any
                transaction made would be at owner’s descretion, it cannot be
                reversed.
              </p>
            </div>
          </div>
          <div className="w-[90%] flex flex-col self-start mt-10 pl-4 gap-6">
            <div className="">
              <p className="text-[#98A2B3] text-sm ">Account Name</p>
              <p className="text-[#101828] font-semibold">Adetutu Oluwasegun</p>
            </div>
            <div className="">
              <p className="text-[#98A2B3] text-sm ">Account Number</p>
              <p className="text-[#101828] font-semibold">9389339393</p>
            </div>
            <div className="">
              <p className="text-[#98A2B3] text-sm ">Amount</p>
              <p className="text-[#101828] font-semibold">&#x20A6;60,000</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#3538CD] text-white py-3 rounded-md w-[90%] mt-[100px] mb-4">
            <button>Send Money</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundWalletConfirmation;
