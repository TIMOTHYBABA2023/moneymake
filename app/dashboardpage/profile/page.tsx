import React from "react";
import Image from "next/image";
import Default_background_icon from "@/public/assets/images/default background_icon.svg";
import Upload_image_icon from "@/public/assets/images/image upload icon.svg";

const Profile = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <h1 className="self-center font-semibold text-[#101828] my-6">
          Profile
        </h1>

        <div className="w-[90%] bg-white p-4 rounded-lg">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="relative flex flex-col items-center mb-10">
                <Image src={Default_background_icon} alt="Default_background_icon" />
                <Image src={Upload_image_icon} alt="Upload_image_icon" className="absolute top-11" />
              </div>
              
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border text-[#98A2B3] border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Adetutu"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border text-[#98A2B3] border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Oluwasegun"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">
                Address
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border text-[#98A2B3] border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="15, Mosobolaji street, Illupeju, Lagos"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border text-[#98A2B3] border-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="08100810081"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#012A4A]">
                Email
              </label>
              <input
                type="text"
                className="w-full bg-[#EAECF0] px-4 py-3 text-[#98A2B3] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="adetutuoluwasegun@gmail.com"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#3538CD] text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
