"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/Logo.svg";
import Dashboard_icon from "@/public/assets/images/dashboard icon.svg";
import Tranfer_icon from "@/public/assets/images/transfer icon.svg";
import Wallet_icon from "@/public/assets/images/wallet icon.svg";
import Payment_icon from "@/public/assets/images/payment icon.svg";
import Logout_icon from "@/public/assets/images/logout icon.svg";

type SidebarProps = {
  activeSection: string;
  setActiveSection: (
    section: "dashboard" | "transfer" | "wallet" | "payment"
  ) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
}) => {
  return (
    <div className="h-full w-full">
      <aside className="sidebar flex flex-col gap-10 ">
        <div className="flex items-center gap-3">
          <div className="h-[30px] w-[30px]">
            <Image src={Logo} alt="Logo" />
          </div>
          <h1 className="text-[#3538CD] font-semibold sm:font-semibold">
            MoneyMake
          </h1>
        </div>
        <nav className="">
          <ul className="flex flex-col gap-4">
            <li
              onClick={() => setActiveSection("dashboard")}
              className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                activeSection === "dashboard"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              <Image src={Dashboard_icon} alt="Dashboard Icon" />
              <p>Dashboard</p>
            </li>
            <li
              onClick={() => setActiveSection("payment")}
              className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                activeSection === "payment"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              <Image src={Payment_icon} alt="Payment Icon" />
              <p>Payments</p>
            </li>
            <li
              onClick={() => setActiveSection("wallet")}
              className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                activeSection === "wallet"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              <Image src={Wallet_icon} alt="Wallet Icon" />
              <p>Fund Wallet</p>
            </li>
            <li
              onClick={() => setActiveSection("transfer")}
              className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                activeSection === "transfer"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              <Image src={Tranfer_icon} alt="Transfer Icon" />
              <p>Transfer</p>
            </li>
          </ul>
        </nav>
      </aside>
      <hr className="border-[#DADADA]" />

      <div className="m-10">
        <div className="flex justify-center items-center gap-2">
          <Image src={Logout_icon} alt="Logout_icon" />
          <p className="text-[#3538CD]">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
