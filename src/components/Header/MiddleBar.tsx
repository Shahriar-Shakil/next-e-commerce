import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { SlUser } from "react-icons/sl";
import DropdownReact from "../DropdownReact";
import Link from "next/link";

import Image from "next/image";

type Props = {};

export default function MiddleBar({}: Props) {
  return (
    <div className="w-full h-[86px] bg-white  lg:block hidden">
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div>
              <Link href="/">
                <Image src="/logo.svg" width={152} height={36} />
              </Link>
            </div>
            <div className="w-[517px] h-[44px]">
              <div className="w-full h-full flex items-center  border border-gray-100 bg-white ">
                <div className="flex-1  h-full">
                  <form action="#" className="h-full">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search Product"
                    ></input>
                  </form>
                </div>
                <div className="w-[1px] h-[22px] bg-gray-300"></div>
                <div className="flex-1 flex items-center px-4">
                  <button
                    type="button"
                    className="w-full text-xs font-500 text-gray-500 flex justify-between items-center"
                  >
                    <span>All Categories</span>
                    <BiChevronDown size={24} />
                  </button>
                </div>
                <button
                  className=" w-[93px] h-full text-base font-600   bg-yellow-500 hover:bg-yellow-600"
                  type="button"
                >
                  Search{" "}
                </button>
              </div>
            </div>
            <div className="flex space-x-6 items-center">
              <div className="favorite relative">
                <Link href="/" className="">
                  <AiOutlineHeart size={24} />
                </Link>
                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-yellow-500">
                  1
                </span>
              </div>
              <div className="Cart relative">
                <Link href="/" className="">
                  <BsBag size={24} />
                </Link>
                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-yellow-500">
                  6
                </span>
              </div>
              <div className="Profile ">
                <Link href="/" className="">
                  <SlUser size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
