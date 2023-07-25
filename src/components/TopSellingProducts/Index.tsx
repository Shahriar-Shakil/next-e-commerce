import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function TopSellingProducts() {
  return (
    <div className="section-wrapper w-full ">
      <div className="container-x mx-auto">
        <div className=" section-title flex justify-between items-center mb-5">
          <div className="">
            <h1 className="sm:text-3xl text-xl font-semibold text-black leading-none">
              Top Selling Products
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
      </div>
    </div>
  );
}
