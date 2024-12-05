import Image from "next/image";
import logo from "@/public/assets/images/Logo 64.svg";
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

export default function Home() {
  return (
    <div className="flex flex-col text-black items-center">
      <nav className="flex items-center w-full justify-around mt-4 ">
        <div className="flex items-center gap-4 ">
          {" "}
          <Image src={logo} alt="logo" />
          <h1 className="font-bold text-2xl text-[#3538CD] ">MoneyMake</h1>
        </div>
        <div className="flex gap-8"></div>

        <div className="flex justify-between text-[#101828] gap-8 text-sm">
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
        <div className="flex gap-8">
          <button className="text-[#101828] text-sm ">Login</button>
          <button className="bg-[#3538CD] text-white rounded-md py-3 px-4">
            Create an account
          </button>
        </div>
      </nav>

      <div className="flex w-full h-[700px]">
        <div className="flex flex-col w-[605px] gap-8 ml-[100px] mt-[100px]">
          <div className="flex   flex-col gap-8">
            <h1 className="text-[#101828] font-bold text-[58px] width-[605px] leading-[81.2px] ">
              Quick and easy payment platform for all you transactions
            </h1>
            <p className="text-[#667085] w-[511px] text-2xl ">
              Save and manage all your transaction in one place, easy payment
              anytime & anyday.
            </p>
          </div>
          <button className="bg-[#3538CD] w-[178px] text-white text-sm font-semibold rounded-md py-3 px-4">
            Create an account
          </button>
        </div>
        <div className="mt-[85px] ml-[109px]">
          <Image src={man_image} alt="man_image" />
        </div>
      </div>

      <section className="mt-[80px] w-full bg-white h-[494px] flex justify-center items-center">
        <div className="flex justify-center mt-[80px] gap-[230px]">
          <div className="w-[416px] self-center ">
            <p className=" leading-[56px] text-[40px] text-[#3538CD] font-bold ">
              Get the convenience of transacting with our services
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eget ipsum, sed praesent.
            </p>
          </div>
          <div className=" flex flex-col h-[343px] gap-[30px] justify-between ">
            <div className="w-[438px] h-[152px] flex gap-[100px]">
              <div className="flex flex-col justify-center items-center w-[167px] gap-4">
                <Image src={keeping_secrecy} alt="keeping secret image" />
                <p className="text-center">
                  Keeping <br /> secrecy
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[171px] gap-4">
                <Image
                  src={convenient_transaction}
                  alt="keeping secret image"
                />
                <p className="text-center ">
                  Convenient <br /> transaction
                </p>
              </div>
            </div>
            <div className="w-[438px] h-[152px] flex gap-[100px]">
              <div className="flex flex-col items-center justify-center w-[167px] gap-4">
                <Image src={free_transaction} alt="keeping secret image" />
                <p className="text-center ">
                  Free <br /> transaction
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[171px] gap-4">
                <Image src={security_guaranteed} alt="keeping secret image" />
                <p className="text-center">
                  Security <br />
                  guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[430px] text-white bg-[#101828] ">
        <div className="flex justify-between items-center mt-[80px] mx-[152px] h-[270px]">
          <div className="h-full w-[512px] ">
            <Image src={card_cash} alt="" />{" "}
          </div>
          <div className="w-[445px]">
            <h1 className="font-bold text-[40px] leading-[56px]  h-[112px] ">
              Choose how you want to make transfers
            </h1>
            <p className="text-sm leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eget ipsum, sed praesent.
            </p>
          </div>
        </div>
      </section>
      <section className="h-[829px] w-full">
        <div className="flex items-center h-[669px] my-[80px] mx-[100px] gap-[196px] ">
          <div className="flex flex-col w-[502px] h-[554px] gap-12">
            <div className="w-full">
              <h2 className="font-bold text-[40px] text-[#3538CD] leading-[56px]">
                How it works
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                eget ipsum, sed praesent.
              </p>
            </div>
            <div className="w-[392px] flex flex-col gap-8">
              <div className="flex flex-col gap-4 ">
                <div className="flex  flex-col">
                  <p className="text-sm text-[#3538CD]">STEP ONE</p>
                  <h2 className="text-[#012A4A] text-2xl font-bold">
                    Sign in or Sign up your account
                  </h2>
                </div>
                <p className="text-[#012A4A] text-sm w-[363px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget ipsum, sed praesent.
                </p>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="flex  flex-col">
                  <p className="text-sm text-[#3538CD]">STEP TWO</p>
                  <h2 className="text-[#012A4A] text-2xl font-bold">
                    Click transfer on your dashboard
                  </h2>
                </div>
                <p className="text-[#012A4A] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget ipsum, sed praesent.
                </p>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="flex  flex-col">
                  <p className="text-sm text-[#3538CD]">STEP THREE</p>
                  <h2 className="text-[#012A4A] text-2xl font-bold">
                    Select your desire bank and send
                  </h2>
                </div>
                <p className="text-[#012A4A] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget ipsum, sed praesent.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={lady_image} alt="lady_image" />{" "}
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-white w-full ">
        <div className="flex flex-col items-center gap-12 h-[556px] my-[60px] mx-[100px]">
          <div className="flex flex-col items-center w-[594px]">
            <h1 className="text-[#3538CD] font-bold text-[40px] leading-[56px] ">
              Hear from our customers
            </h1>
            <p className="text-sm text-[#012A4A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eget ipsum, sed praesent.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-5">
              <div className="flex flex-col gap-6 py-8 px-6 bg-[#F9FAFB] w-[374px]">
                <p className="">Adekola Johnson</p>
                <p className="text-sm self-center text-[#012A4A]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </div>
              <div className="flex flex-col gap-6 py-8 px-6 bg-[#F9FAFB] w-[374px]">
                <p className="">Adekola Johnson</p>
                <p className="text-sm self-center text-[#012A4A]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </div>
              <div className="flex flex-col gap-6 py-8 px-6 bg-[#F9FAFB] w-[374px]">
                <p className="">Adekola Johnson</p>
                <p className="text-sm self-center text-[#012A4A]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-6 py-8 px-6 bg-[#F9FAFB] w-[374px]">
                <p className="">Adekola Johnson</p>
                <p className="text-sm self-center text-[#012A4A]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </div>
              <div className="flex flex-col gap-6 py-8 px-6 bg-[#F9FAFB] w-[374px]">
                <p className="">Adekola Johnson</p>
                <p className="text-sm self-center text-[#012A4A]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </div>
              <div className="flex flex-col gap-6 py-8 px-6 bg-[#F9FAFB] w-[374px]">
                <p className="">Adekola Johnson</p>
                <p className="text-sm self-center text-[#012A4A]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[431px] w-full bg-[#3538CD] flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col gap-12 w-[573px]">
          <div className="text-white text-center flex flex-col gap-8">
            <h1 className=" text-[40px] font-bold leading-[56px]">
              Subscribe on our Newsletter
            </h1>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in
              orci quis eleifend id. Adipiscing cras scelerisque aliquet nisi,
              velit, aliquam tortor vestibulum.
            </p>
          </div>
          <div className="flex gap-1">
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
        <p className="text-white">
          We will never spam you. Only useful mails with promo and events
        </p>
      </section>
      <footer className="w-full h-[261px] bg-[#101828] text-white flex items-center px-[100px] gap-[228px]">
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-4 items-center">
            <Image src={white_logo} alt="white_logo" />
            <h1 className="font-bold text-2xl leading-[33.6px]">MoneyMake</h1>
          </div>
          <div className="text-sm">© 2022 All rights reserved</div>
        </div>
        <div className="flex flex-col gap-[35px] w-[388px] text-sm">
          <div className="flex justify-around self-center w-[331px]">
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
          <div className="flex justify-around">
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
        <div className="flex flex-col gap-[31px] w-[137px]">
          <div className="flex gap-2">
            <Image src={facebook} alt="facebook" />
            <Image src={twitter} alt="twitter" />
            <Image src={linkedin} alt="linkedin" />
            <Image src={google} alt="google" />
          </div>
          <div className="text-sm self-end">English version
          </div>
        </div>
      </footer>
    </div>
  );
}
