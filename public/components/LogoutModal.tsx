import React from "react";

const LogoutModal = () => {
  return (
    <div className="mt-8 bg-red-600 py-4 flex justify-center">
      <div className="flex flex-col gap-6">
        <p className="pl-4 font-semibold text-[#101828]">Logout confirmation</p>
        <hr />
        <p className="pl-4 text-[#21334F]">
          Are you sure you want to logout from your account?
        </p>
        <div className="w-full flex gap-6 self-end">
          <div className="text-[#FCFCFC] py-4 px-6 flex items-center justify-center">
            <p className="text-[#21334F] text-sm">No</p>
          </div>
          <div className="text-[#FCFCFC] bg-red-500 py-4 px-6 flex items-center justify-center">
            <p>Yes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
