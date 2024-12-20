"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Dashboard_icon from "@/public/assets/images/dashboard icon.svg";
import Airtime_icon from "@/public/assets/images/buy airtime icon.svg";
import Tranfer_icon from "@/public/assets/images/transfer icon.svg";
import Wallet_icon from "@/public/assets/images/wallet icon.svg";
import Payment_icon from "@/public/assets/images/payment icon.svg";
import logo from "@/public/assets/images/Logo.svg";
import burger_icon from "@/public/assets/images/burger_icon.svg";
import close_icon from "@/public/assets/images/close_icon.svg";
import Notification_icon from "@/public/assets/images/Notification icon.svg";
import Navbar_bell_icon from "@/public/assets/images/navbar bell icon.svg";
import Navbar_image_icon from "@/public/assets/images/navbar image icon.svg";
import Shield_exclamation from "@/public/assets/images/shield-exclamation.svg";
import Contact_account_icon from "@/public/assets/images/contact_account icon.svg";
import Logout_icon from "@/public/assets/images/logout icon.svg";


type SidebarProps = {
  activeSection: "dashboard" | "transfer" | "wallet" | "payment" | "airtime" | "notification";
  setActiveSection: (section: SidebarProps["activeSection"]) => void;
};

const Navbar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [openNavItems, setOpenNavItems] = useState(false);
  const [hideProfileModal, setHideProfileModal] = useState(false);

  return (
    <div className="w-full bg-white">
      <nav className="lg:flex items-center w-full justify-between">
        <div className="w-full py-4 px-8">
          <div className="w-full flex justify-between items-center">
            <div className="lg:hidden flex flex-wrap justify-around items-center gap-2">
              <Image src={logo} alt="logo" className="h-[auto] w-[40px]" />
              <h1 className="font-bold text-[16px] text-[#3538CD] ">
                MoneyMake
              </h1>
            </div>
            <div className="lg:hidden">
              <div className="">
                {!openNavItems && (
                  <Image
                    src={burger_icon}
                    alt="burger_icon"
                    onClick={() => setOpenNavItems(!openNavItems)}
                  />
                )}
                {openNavItems && (
                  <Image
                    src={close_icon}
                    alt="close_icon"
                    onClick={() => setOpenNavItems(!openNavItems)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex px-8 place-self-end gap-8">
            <div className="flex">
              <Image src={Navbar_bell_icon} alt="Navbar_bell_icon" />
            </div>
            <div className="flex">
              <div
                className="flex items-center gap-2"
                onClick={() => setHideProfileModal(!hideProfileModal)}
              >
                <Image src={Navbar_image_icon} alt="Navbar_image_icon" />
                <p className="text-[#012A4A] font-medium">Timtrixz</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="flex lg:hidden flex-col bg-white items-center w-full justify-around py-2">
        {openNavItems && (
          <div className="flex flex-col w-[80%] text-[#101828] p-8 gap-8 text-sm">
            <nav className="flex flex-col gap-8">
              <ul className="flex flex-col gap-4">
                <li
                  onClick={() => {setActiveSection("dashboard")
                    setOpenNavItems(!openNavItems)}
                  }
                  className={`w-[80%] flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                    activeSection === "dashboard"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}
                >
                  <Image src={Dashboard_icon} alt="Dashboard Icon" />
                  <p>Dashboard</p>
                </li>
                <li
                  onClick={() => setActiveSection("airtime")}
                  className={`w-[80%] flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                    activeSection === "airtime"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}
                >
                  <Image src={Airtime_icon} alt="Dashboard Icon" />
                  <p>Buy Airtime</p>
                </li>
                <li
                  onClick={() => {setActiveSection("payment")
                    setOpenNavItems(!openNavItems)}
                  }
                  className={`w-[80%] flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                    activeSection === "payment"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}
                >
                  <Image src={Payment_icon} alt="Payment Icon" />
                  <p>Pay Bill</p>
                </li>
                <li
                  onClick={() => {setActiveSection("transfer")
                    setOpenNavItems(!openNavItems)
                  }}
                  className={`w-[80%] flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                    activeSection === "transfer"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}
                >
                  <Image src={Tranfer_icon} alt="Transfer Icon" />
                  <p>Transfer</p>
                </li>
                <li
                  onClick={() => {setActiveSection("wallet")
                    setOpenNavItems(!openNavItems)
                  }}
                  className={`w-[80%] flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                    activeSection === "wallet"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}
                >
                  <Image src={Wallet_icon} alt="Wallet Icon" />
                  <p>Fund Wallet</p>
                </li>
                <li
                  onClick={() => {setActiveSection("notification")
                    setOpenNavItems(!openNavItems)
                  }}
                  className={`w-[80%] flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                    activeSection === "notification"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200"
                  }`}
                >
                  <Image src={Notification_icon} alt="Notification_icon" />
                  <p>Notification</p>
                </li>
              </ul>
              <div className="flex flex-col p-2 gap-4">
                <p className="text-[#98A2B3]">OTHERS</p>
                <div className="flex flex-col gap-4">
                  <p className="flex gap-4">
                    {" "}
                    <Image
                      src={Contact_account_icon}
                      alt="Contact_account_icon"
                    />{" "}
                    Account
                  </p>
                  <p className="flex gap-4">
                    {" "}
                    <Image
                      src={Shield_exclamation}
                      alt="Shield_exclamation"
                    />{" "}
                    Security
                  </p>
                </div>
              </div>
            </nav>
            <hr className="border-[#DADADA] w-full" />

            <div className="w-[90%] self-center">
              <div className="flex justify-center bg-[#EEF4FF] py-2 px-6 items-center gap-2">
                <Image src={Logout_icon} alt="Logout_icon" className="" />
                <p className="text-[#3538CD] text">Logout</p>
              </div>
            </div>
          </div>
        )}
      </nav>

      {hideProfileModal && (
        <div className="hidden lg:flex absolute top-16 right-8 bg-white shadow-lg rounded-md p-4 w-30 z-50">
          <div className="w-full flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <Image src={Navbar_image_icon} alt="Navbar_image_icon" />
              <p className="text-[#012A4A] font-semibold flex flex-col">
                Timtrixz{" "}
                <span className="text-[#98A2B3] text-sm">
                  Timtrixzengineer@gmail.com
                </span>
              </p>
            </div>
            <hr className="w-full" />
            <div className="w-[98%] flex flex-col gap-8 my-4">
              <p className="flex gap-4">
                {" "}
                <Image
                  src={Contact_account_icon}
                  alt="Contact_account_icon"
                />{" "}
                Account
              </p>
              <p className="flex gap-4">
                {" "}
                <Image src={Shield_exclamation} alt="Shield_exclamation" />{" "}
                Security
              </p>
              <p className="flex gap-4">
                {" "}
                <Image src={Logout_icon} alt="Logout_icon" /> Logout
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
