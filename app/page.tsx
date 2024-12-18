"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/images/Logo.svg";
import logo_40 from "@/public/assets/images/logo 40.svg";
import man_image from "@/public/assets/images/guy_image.svg";
import keeping_secrecy from "@/public/assets/images/keeping secrecy.svg";
import convenient_transaction from "@/public/assets/images/convenient transaction.svg";
import free_transaction from "@/public/assets/images/free transaction.svg";
import security_guaranteed from "@/public/assets/images/security guaranteed.svg";
import card_cash from "@/public/assets/images/Card To Cash Transaction.svg";
import lady_image from "@/public/assets/images/lady image.svg";
import email_icon from "@/public/assets/images/mail-alt-1.svg";
import white_logo from "@/public/assets/images/logo white.svg";
import facebook from "@/public/assets/images/Facebook.svg";
import twitter from "@/public/assets/images/Twitter.svg";
import linkedin from "@/public/assets/images/linkedin.svg";
import google from "@/public/assets/images/google.svg";
import burger_icon from "@/public/assets/images/burger_icon.svg";
import close_icon from "@/public/assets/images/close_icon.svg";



export default function Home() {
  const [openNavItems, setOpenNavItems] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <nav className="hidden lg:flex items-center w-full justify-around m-4 ">
        <div className="flex items-center gap-4 ">
          <Image src={logo} alt="logo" />
          <h1 className="font-bold text-2xl text-[#3538CD] ">MoneyMake</h1>
        </div>
        <div className="flex gap-8"></div>

        <div className="hidden lg:flex justify-between text-[#101828] gap-8 text-sm">
          <a href="" className="hover:text-[#3538CD]">
            Home
          </a>
          <a href="" className="hover:text-[#3538CD]">
            Features
          </a>
          <a href="" className="hover:text-[#3538CD]">
            About
          </a>
          <a href="" className="hover:text-[#3538CD]">
            Contact Us
          </a>
        </div>
        <div className="hidden lg:flex gap-8">
          <button className="text-[#101828] text-sm ">Login</button>
          <button className="bg-[#3538CD] text-white rounded-md py-3 px-4">
            Create an account
          </button>
        </div>
      </nav>
      <nav className="flex lg:hidden flex-col bg-white items-center w-full justify-around py-2">
        <div className="flex flex-col w-full">
          <div className="flex justify-around w-full items-center gap-10">
            <div className="flex justify-around items-center gap-4">
              <Image src={logo_40} alt="logo" />
              <h1 className="font-semibold text-[16px] text-[#3538CD] ">
                MoneyMake
              </h1>
            </div>

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

        {openNavItems && (
          <div className="flex flex-col w-full text-[#101828] mx-4 my-[24px] p-8 bg-white gap-8 text-sm">
            <a href="" className="hover:text-[#3538CD]">
              Home
            </a>
            <a href="" className="hover:text-[#3538CD]">
              Features
            </a>
            <a href="" className="hover:text-[#3538CD]">
              About
            </a>
            <a href="" className="hover:text-[#3538CD]">
              Contact Us
            </a>
            <a href="" className="text-[#101828] text-sm hover:text-[#3538CD]">
              Login
            </a>
            <button className="bg-[#3538CD] text-white rounded-md py-3 px-4">
              Create an account
            </button>
          </div>
        )}
      </nav>
      <section className=" w-full">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col sm:w-[80%] xl:w-[90%] sm:items-center md:flex-row gap-10 xl:gap-[10%] w-[90%] mt-8 xl:m-[85px]">
            <div className="flex flex-col md:w-[80%] xl:w-[51%] gap-4 md:gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-[32px] md:text-[28px] lg:text-[40px] xl:text-[58px] xl:py-4 font-bold leading-[44.8px] xl:leading-[81.2px]">
                  Quick and easy payment platform for all your transactions
                </h1>
                <p className="text-sm md:w-[95%] lg:w-[80%] xl:w-[50%]">
                  Save and manage all your transaction in one place, easy
                  payment anytime & anyday.
                </p>
              </div>
              <div className="bg-[#3538CD] sm:w-[50%] md:w-[70%] xl:w-[25%] rounded-md py-3 mb-4 flex justify-center gap-4">
                <span className="text-white text-sm font-semibold">
                  Create an account
                </span>
              </div>
            </div>
            <div className="">
              <Image src={man_image} alt="man_image" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="bg-white flex flex-col items-center">
          <div className="py-8 flex flex-col md:flex-row md:w-[90%] items-center gap-8">
            <div className="flex flex-col w-[95%] md:w-[70%] gap-8">
              <p className="w-[90%] md:w-[100%] leading-[33.6px] lg:leading-[56px] flex text-2xl md:text-[32px] sm:text-center md:text-left lg:text-[40px] text-[#3538CD] font-bold ">
                Get the convenience of transacting with our services
              </p>
              <p className=" text-[14px] flex flex-wrap lg:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                eget ipsum, sed praesent.
              </p>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              <div className="flex flex-col gap-2 w-full text-sm items-center">
                <div className="flex flex-wrap justify-around w-full">
                  <div className="min-w-[167px] h-[152px] p-8 flex flex-col items-center lg:gap-4">
                    <Image src={keeping_secrecy} alt="keeping secret image" />
                    <p className="text-center">
                      Keeping <br /> secrecy
                    </p>
                  </div>
                  <div className="min-w-[167px] h-[152px] p-8 flex flex-col items-center lg:gap-4">
                    <Image
                      src={convenient_transaction}
                      alt="keeping secret image"
                    />
                    <p className="text-center ">
                      Convenient <br /> transaction
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-around w-full">
                  <div className="min-w-[167px] h-[152px] p-8 flex flex-col items-center lg:gap-4">
                    <Image
                      src={free_transaction}
                      alt="free_transaction image"
                    />
                    <p className="text-center">
                      Free <br /> transaction
                    </p>
                  </div>
                  <div className="min-w-[167px] h-[152px] p-8 flex flex-col items-center lg:gap-4">
                    <Image
                      src={security_guaranteed}
                      alt="security_guaranteed image"
                    />
                    <p className="text-center ">
                      Security <br />
                      guaranteed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full text-white bg-[#101828] ">
        <div className="w-full lg:w-[90%] flex flex-col-reverse lg:flex-row lg:justify-center items-center pt-8 lg:gap-[10%]">
          <div className="w-[90%] flex justify-center items-center xl:w-[512px] xl:w-[50%] ">
            <Image src={card_cash} alt="card_cash" />
          </div>
          <div className="w-[90%] lg:w-[60%] xl:w-[445px] md:text-center  gap-2">
            <h1 className="font-bold text-2xl lg:text-[30px] xl:text-[40px] leading-[33.6px] xl:leading-[56px] lg:pb-4">
              Choose how you want to make transfers
            </h1>
            <p className="text-sm leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eget ipsum, sed praesent.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-col lg:flex-row items-center lg:px-[5%] lg:my-[40px] lg:gap-[5%]">
          <div className="flex flex-col w-[95%] md:w-[70%]  gap-8 mt-6 lg:gap-12">
            <div className="w-full">
              <h2 className="font-bold text-2xl md:text-[30px] lg:text-[40px] text-[#3538CD] leading-[33.6px] lg:leading-[56px]">
                How it works
              </h2>
              <p className="text-sm text-[#012A4A] lg:w-[75%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                eget ipsum, sed praesent.
              </p>
            </div>
            <div className="lg:w-[392px] flex flex-col gap-8">
              <div className="flex flex-col gap-3 lg:gap-4">
                <div className="flex  flex-col">
                  <p className="text-sm text-[#3538CD]">STEP ONE</p>
                  <p className="text-[#012A4A] text-sm lg:text-2xl font-semibold lg:font-bold">
                    Sign in or Sign up your account
                  </p>
                </div>
                <p className="text-[#012A4A] text-sm lg:w-[363px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget ipsum, sed praesent.
                </p>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="flex  flex-col">
                  <p className="text-sm text-[#3538CD]">STEP TWO</p>
                  <p className="text-[#012A4A] text-sm lg:text-2xl font-semibold lg:font-bold">
                    Click transfer on your dashboard
                  </p>
                </div>
                <p className="text-[#012A4A] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget ipsum, sed praesent.
                </p>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="flex  flex-col">
                  <p className="text-sm text-[#3538CD]">STEP THREE</p>
                  <p className="text-[#012A4A] text-sm lg:text-2xl font-semibold lg:font-bold">
                    Select your desire bank and send
                  </p>
                </div>
                <p className="text-[#012A4A] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget ipsum, sed praesent.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[80%] md:flex py-6 md:justify-center">
            <Image src={lady_image} alt="lady_image" />{" "}
          </div>
        </div>
      </section>

      <section className="flex flex-col bg-white w-full">
        <div className="flex flex-col items-center lg:gap-12 lg:my-[60px] lg:mx-[100px]">
          <div className="flex flex-col items-center w-[90%] gap-2 lg:w-[594px]">
            <h1 className="text-[#3538CD] font-bold text-2xl lg:text-[40px] leading-[33.6px] lg:leading-[56px]">
              Hear from our customers
            </h1>
            <p className="text-sm text-[#012A4A] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eget ipsum, sed praesent.
            </p>
          </div>
          <div className="flex flex-col w-[90%] items-center lg:flex-row flex-wrap py-6 gap-8">
            <div className="max-w-[343px] flex flex-col gap-6 p-4 lg:py-8 lg:px-6 bg-[#F9FAFB] lg:w-[374px]">
              <p className="font-semibold">Adekola Johnson</p>
              <p className="text-sm lg:self-center text-[#012A4A]">
                Lorem ipsum dolor sit amet, consectetur elit adipiscing elit.
                Feugiat eget ipsum, sed ipsum praesent. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="max-w-[343px] flex flex-col gap-6 p-4 lg:py-8 lg:px-6 bg-[#F9FAFB] lg:w-[374px]">
              <p className="font-semibold">Adekola Johnson</p>
              <p className="text-sm self-center text-[#012A4A]">
                Lorem ipsum dolor sit amet, consectetur elit adipiscing elit.
                Feugiat eget ipsum, sed ipsum praesent. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="max-w-[343px] flex flex-col flex-wrap gap-6 p-4 lg:py-8 lg:px-6 bg-[#F9FAFB] lg:w-[374px]">
              <p className="font-semibold">Adekola Johnson</p>
              <p className="text-sm self-center text-[#012A4A]">
                Lorem ipsum dolor sit amet, consectetur elit adipiscing elit.
                Feugiat eget ipsum, sed ipsum praesent. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit
              </p>
            </div>

            <div className="max-w-[343px] flex flex-col gap-6 p-4 lg:py-8 lg:px-6 bg-[#F9FAFB] lg:w-[374px]">
              <p className="font-semibold">Adekola Johnson</p>
              <p className="text-sm self-center text-[#012A4A]">
                Lorem ipsum dolor sit amet, consectetur elit adipiscing elit.
                Feugiat eget ipsum, sed ipsum praesent. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="max-w-[343px] flex flex-col gap-6 p-4 lg:py-8 lg:px-6 bg-[#F9FAFB] lg:w-[374px]">
              <p className="font-semibold">Adekola Johnson</p>
              <p className="text-sm self-center text-[#012A4A]">
                Lorem ipsum dolor sit amet, consectetur elit adipiscing elit.
                Feugiat eget ipsum, sed ipsum praesent. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="max-w-[343px] flex flex-col gap-6 p-4 lg:py-8 lg:px-6 bg-[#F9FAFB] lg:w-[374px]">
              <p className="font-semibold">Adekola Johnson</p>
              <p className="text-sm self-center text-[#012A4A]">
                Lorem ipsum dolor sit amet, consectetur elit adipiscing elit.
                Feugiat eget ipsum, sed ipsum praesent. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:h-[431px] w-full bg-[#3538CD] p-8 flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col gap-12 w-[90%] lg:w-[573px]">
          <div className="text-white text-center flex flex-col gap-8">
            <h1 className="text-2xl leading-[33.6px] lg:text-[40px] font-bold lg:leading-[56px]">
              Subscribe on our Newsletter
            </h1>
            <p className="text-sm sm:w-[60%] lg:w-full self-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in
              orci quis eleifend id. Adipiscing cras scelerisque aliquet nisi,
              velit, aliquam tortor vestibulum.
            </p>
          </div>
          <div className="flex justify-center gap-1">
            <div className="flex bg-white border px-4 py-3 rounded-md gap-2 w-[383px]">
              <Image src={email_icon} alt="Email_icon" />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full outline-none bg-transparent text-[#98A2B3] text-sm "
              />
            </div>
            <button className="bg-[#D0D5DD] w-[178px] text-[#101828] text-sm font-semibold rounded-md">
              Subscribe
            </button>
          </div>
        </div>
        <p className="text-white w-[90%] text-center">
          We will never spam you. Only useful mails with promo and events
        </p>
      </section>

      <footer className="w-full ">
        <div className="">
          <div className="bg-[#101828] text-white flex flex-col lg:justify-center lg:flex-row lg:items-center lg:gap-[10%] py-8">
            <div className="flex flex-col sm:items-center gap-[15px] p-4">
              <div className="flex gap-4 items-center">
                <Image src={white_logo} alt="white_logo" />
                <h1 className="font-bold text-2xl leading-[33.6px]">
                  MoneyMake
                </h1>
              </div>
              <div className="text-sm">© 2022 All rights reserved</div>
            </div>
            <div className="flex flex-col sm:items-center lg:gap-[35px] text-sm lg:items-center p-4">
              <div className="flex flex-col lg:flex-row sm:items-center justify-around gap-6">
                <a href="" className="">
                  Home
                </a>
                <a href="" className="">
                  About Us
                </a>
                <a href="" className="">
                  Features
                </a>
                <a href="" className="">
                  Contact Us
                </a>
              </div>
              <div className="flex flex-col sm:items-center lg:flex-row lg:w-[388px] justify-around mt-4 gap-6">
                <a href="" className="">
                  Privacy Policy
                </a>
                <a href="" className="">
                  Terms of conditions
                </a>
                <a href="" className="">
                  Legal
                </a>
                <a href="" className="">
                  Help
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:items-center lg:items-end gap-[31px] lg:w-[137px] p-4">
              <div className="flex  gap-2">
                <Image src={facebook} alt="facebook" />
                <Image src={twitter} alt="twitter" />
                <Image src={linkedin} alt="linkedin" />
                <Image src={google} alt="google" />
              </div>
              <div className="text-sm">English version</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
