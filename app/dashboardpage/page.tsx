'use client'
import React from "react";
import Sidebar from "@/app/dashboardpage/dashboardsidebar/page";
import Navbar from "@/app/dashboardpage/dashboardnavbar/page";
import Dashboard from "@/app/dashboardpage/dashboard/page";
import Transfer from "@/app/dashboardpage/transfer/page";
import Wallet from "@/app/dashboardpage/wallet/page";
import Payment from "@/app/dashboardpage/payment/page";
import { useState } from "react";

type Section =
  | "dashboard"
  | "airtime"
  | "transfer"
  | "wallet"
  | "payment"
  | "notification";

const BasePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("dashboard");

  return (
    <div className="base-container w-full text-black flex">
      <div className="w-full flex">
        <div className="md:w-[30%] bg-white hidden lg:block md:p-4">        
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection}/>
        </div>
       
        <div className="w-full">
        <div>
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
            <main className="w-full flex flex-col items-center mt-8">
              <div className="w-full flex flex-col items-center">
                  {activeSection === "dashboard" && <Dashboard />}
                  {activeSection === "transfer" && <Transfer />}
                  {activeSection === "wallet" && <Wallet/>}
                  {activeSection === "payment" && <Payment />}
              </div>
            </main>
        </div>
      </div>
    </div>
  );
};

export default BasePage;
