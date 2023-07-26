import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

export default function BestSeller() {
  return (
    <div className="section-wrapper w-full mb-[60px]">
      <div className="container-x mx-auto">
        <div className=" section-title flex justify-between items-center mb-5">
          <div className="">
            <h1 className="sm:text-3xl text-xl font-semibold text-black leading-none">
              Best Seller
            </h1>
          </div>
          <div>
            <Link href="/">
              <div className="flex space-x-2 items-center">
                <p className="text-lg font-semibold text-black">View More</p>
                <BsArrowRight
                  className="animate-bounce text-lg font-semibold"
                  size={24}
                />
              </div>
            </Link>
          </div>
        </div>
        {/* header end */}
        <div className="section-content">
          <div className="w-full">
            <div className="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 xl:gap-[30px] gap-5z">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                className="item w-full flex flex-col items-center "
              >
                <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
                  <Image
                    src="/images/sellersLogo/saller-1.png"
                    width="96"
                    height="99"
                    alt="seller"
                  />
                </div>
                <Link href="/" className="text-base font-medium text-center">
                  Shopno BD
                </Link>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="400"
                className="item w-full flex flex-col items-center "
              >
                <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
                  <Image
                    src="/images/sellersLogo/saller-2.png"
                    width="96"
                    height="99"
                    alt="seller"
                  />
                </div>
                <Link href="/" className="text-base font-medium text-center">
                  Eecoms Shop
                </Link>
              </div>

              <div
                data-aos="fade-left"
                data-aos-duration="300"
                className="item w-full flex flex-col items-center "
              >
                <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
                  <Image
                    src="/images/sellersLogo/saller-3.png"
                    width="96"
                    height="99"
                    alt="seller"
                  />
                </div>
                <Link href="/" className="text-base font-medium text-center">
                  Fusion X
                </Link>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="200"
                className="item w-full flex flex-col items-center "
              >
                <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
                  <Image
                    src="/images/sellersLogo/saller-4.png"
                    width="96"
                    height="99"
                    alt="seller"
                  />
                </div>
                <Link href="/" className="text-base font-medium text-center">
                  Rikayi Rox
                </Link>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="100"
                className="item w-full flex flex-col items-center "
              >
                <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
                  <Image
                    src="/images/sellersLogo/saller-5.png"
                    width="96"
                    height="99"
                    alt="seller"
                  />
                </div>
                <Link href="/" className="text-base font-medium text-center">
                  Habbriyi
                </Link>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="100"
                className="item w-full flex flex-col items-center "
              >
                <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
                  <Image
                    src="/images/sellersLogo/saller-6.png"
                    width="96"
                    height="99"
                    alt="seller"
                  />
                </div>
                <Link href="/" className="text-base font-medium text-center">
                  Haque
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
