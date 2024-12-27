"use client";
import React, { useState } from "react";
import Sidebar from "@/app/dashboardpage/dashboardsidebar/page";
import Navbar from "@/app/dashboardpage/dashboardnavbar/page";

type Section = 
  | "dashboard"
  | "airtime"
  | "transfer"
  | "wallet"
  | "payment"
  | "notification";

const Layout = ({children}: {children: React.ReactNode}) => {
  const [activeSection, setActiveSection] = useState<Section>("dashboard");

  return (
    <div className="base-container w-full text-black flex flex-col">
      <div className="w-full flex">
        <div className="md:w-[30%] bg-white hidden lg:block md:p-4">        
          <Sidebar />
        </div>
       
        <div className="w-full flex flex-col">
          <div>
            <Navbar />
          </div>
          <div className="w-full max-w-[710px] self-center mt-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;