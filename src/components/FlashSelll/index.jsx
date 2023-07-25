import Image from "next/image";
import Link from "next/link";
import React from "react";
import Countdown from "react-countdown";
import { BiChevronRight } from "react-icons/bi";

export default function FlashSell() {
  return (
    <div className="w-full lg:h-[460px] mb-[60px]">
      <div className="container-x mx-auto h-full">
        <div className="lg:flex xl:space-x-[30px] lg:space-x-5 items-center h-full">
          <div
            style={{
              background:
                "url(/images/cover-countdown.jpg) 0% 0% / cover no-repeat",
            }}
            className="campaign-countdown lg:w-1/2 h-full w-full mb-5 lg:mb-0 aos-init aos-animate"
          >
            <Link href="/">
              <div className="w-full xl:p-12 p-5">
                <Countdown
                  date={Date.now() + 1000000000}
                  renderer={(props) => (
                    <div className="countdown-wrapper w-full flex lg:justify-between justify-evenly mb-10">
                      <div className="space-y-2">
                        <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                          <span className="font-bold sm:text-[30px] text-[14px] text-[#EB5757]">
                            {props.days}
                          </span>
                        </div>
                        <p className="sm:text-[18px] text-[12px] font-semibold text-center leading-8">
                          Days{" "}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                          <span className="font-bold sm:text-[30px] text-[14px] text-[#2F80ED]">
                            {props.hours}
                          </span>
                        </div>
                        <p className="sm:text-[18px] text-[12px] font-semibold text-center leading-8">
                          Hours{" "}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                          <span className="font-bold sm:text-[30px] text-[14px] text-[#219653]">
                            {props.minutes}
                          </span>
                        </div>
                        <p className="sm:text-[18px] text-[12px] font-semibold text-center leading-8">
                          Minutes{" "}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                          <span className="font-bold sm:text-[30px] text-[14px] text-[#EF5DA8]">
                            {props.seconds}
                          </span>
                        </div>
                        <p className="sm:text-[18px] text-[12px] font-semibold text-center leading-8">
                          Seconds{" "}
                        </p>
                      </div>
                    </div>
                  )}
                />
                <div className="countdown-title mb-4">
                  <h1 className="text-[44px] text-black font-semibold">
                    WOO! Flash Sale
                  </h1>
                </div>
                <div className="inline-flex space-x-2 items-center border-b border-yellow-800">
                  <span className="text-sm font-semibold tracking-wide leading-7 flex items-center ">
                    Shop Now <BiChevronRight size={24} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div
            style={{
              background:
                "url(/images/download-app-cover.png) 0% 0% / cover no-repeat",
            }}
            className="download-app flex-1 lg:h-full h-[430px] xl:p-12 p-5 aos-init aos-animate"
          >
            <div className="flex flex-col h-full justify-between">
              <div className="get-app">
                <p className="text-[13px] font-semibold text-black mb-3">
                  MOBILE APP VERSION
                </p>
                <h1 className="text-[30px] font-semibold text-black leading-10 mb-8">
                  Get Our
                  <span className="text-red-500 border-b-2 border-red-500 mx-2">
                    Mobile App
                  </span>
                  <br />
                  It’s Make easy for you life !
                </h1>
                <div className="flex space-x-5 items-center">
                  <div>
                    <Link href="/">
                      <Image
                        width="170"
                        height="69"
                        src="/images/play-store.png"
                        alt="playstore"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/">
                      <Image
                        width="170"
                        height="69"
                        src="/images/apple-store.png"
                        alt="apple"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="app-screen">
                <Image
                  width="483"
                  height="133"
                  src="/images/app-screen.png"
                  alt="appscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
