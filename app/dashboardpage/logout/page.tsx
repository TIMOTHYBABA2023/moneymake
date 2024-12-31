import React from "react";

const LogoutModal = () => {
  return (
    <div className="w-full max-w-[590px] px-4 flex justify-center items-center">
      <div className="w-full flex flex-col gap-6 bg-white py-4">
        <p className="pl-4 font-semibold text-[#101828]">Logout confirmation</p>
        <hr className="border-[1px]" />
        <p className="px-4 text-[#21334F] text-sm">
          Are you sure you want to logout from your account?
        </p>
        <div className="flex gap-6 px-4 justify-end">
          <p className="py-3 px-6 hover:bg-[#3538CD] hover:text-white text-sm cursor-pointer rounded-[4px]">No</p>
          <p className="py-3 px-6 hover:bg-[#3538CD] hover:text-white text-sm cursor-pointer rounded-[4px]">Yes</p>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
