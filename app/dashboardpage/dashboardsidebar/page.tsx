"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/Logo.svg";
import Dashboard_icon from "@/public/assets/images/dashboard icon.svg";
import Tranfer_icon from "@/public/assets/images/transfer icon.svg";
import Wallet_icon from "@/public/assets/images/wallet icon.svg";
import Payment_icon from "@/public/assets/images/payment icon.svg";
import Logout_icon from "@/public/assets/images/logout icon.svg";

type Section =
  | "dashboard"
  | "airtime"
  | "transfer"
  | "wallet"
  | "payment"
  | "notification";

const Sidebar: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<Section>("dashboard");

  return (
    <div className="w-full min-h-[1024px]">
      <aside className="sidebar flex flex-col items-center gap-10 mb-10">
        <div className="flex items-center gap-3 self-center mt-4">
          <div className="h-[30px] w-[30px]">
            <Image src={Logo} alt="Logo" />
          </div>
          <h1 className="text-[#3538CD] font-semibold sm:font-semibold">
            MoneyMake
          </h1>
        </div>
        <nav>
          <ul className="flex flex-col items-center gap-4 ">
            <Link
              href="/dashboardpage"
              onClick={() => setActiveNavItem("dashboard")}
              className={`flex items-center gap-2 py-2 px-8 rounded-md cursor-pointer ${
                activeNavItem === "dashboard"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              <li className="flex items-center gap-2 p-2">
                <Image src={Dashboard_icon} alt="Dashboard Icon" />
                <p>Dashboard</p>
              </li>
            </Link>
            <Link
              href="/dashboardpage/payment"
              onClick={() => setActiveNavItem("payment")}
              className={`flex items-center gap-2 py-2 px-8 rounded-md cursor-pointer ${
                activeNavItem === "payment"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              <li className="flex items-center gap-2 p-2">
              <Image src={Payment_icon} alt="Payment Icon" />
                <p>Payments</p>
              </li>
            </Link>
            <Link
              href="/dashboardpage/wallet"
              onClick={() => setActiveNavItem("wallet")}
              className={`flex items-center gap-2 py-2 px-8 rounded-md cursor-pointer ${
                activeNavItem === "wallet"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              <li className="flex items-center gap-2 p-2">
              <Image src={Wallet_icon} alt="Wallet_icon" />
                <p>Fund Wallet</p>
              </li>
            </Link>
            <Link
              href="/dashboardpage/transfer"
              onClick={() => setActiveNavItem("transfer")}
              className={`flex items-center gap-2 py-2 px-8 rounded-md cursor-pointer ${
                activeNavItem === "transfer"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
            >
              <li className="flex items-center gap-2 p-2">
              <Image src={Tranfer_icon} alt="Tranfer_icon" />
                <p>Transfer</p>
              </li>
            </Link>
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
