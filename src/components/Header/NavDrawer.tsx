import React from "react";
import { BiAlignLeft } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import {
  AiFillCloseCircle,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { SlUser } from "react-icons/sl";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BiChevronDown, BiChevronRight, BiMobileAlt } from "react-icons/bi";
import { AiFillCar, AiOutlineBars, AiOutlineVideoCamera } from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";
import { MdChair } from "react-icons/md";
type Props = {};

export default function NavDrawer({}: Props) {
  return (
    <div className=" lg:hidden block w-full h-[60px] bg-white">
      <div className="w-full h-full flex justify-between items-center px-5">
        <div>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button"
              >
                <BiAlignLeft size={24} />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <div className="menu p-4 w-60 h-full bg-white text-base-content">
                {/* Sidebar content here */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-5 items-center">
                    <div className="favorite relative">
                      <Link href="/" className="">
                        <AiOutlineHeart size={24} />
                      </Link>
                      <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-yellow-500">
                        1
                      </span>
                    </div>
                    <div className="Profile ">
                      <Link href="/" className="">
                        <SlUser size={24} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-5 px-2">
                  <div className="search-bar w-full h-[34px]  flex ">
                    <div className="flex-1 bg-white h-full border border-r-0 border-[#E9E9E9]">
                      <input
                        placeholder="Search Product..."
                        type="text"
                        className="w-full text-xs h-full focus:outline-none foucus:ring-0 placeholder:text-qgraytwo pl-2.5 "
                      />
                    </div>
                    <div className="w-[40px] h-full bg-yellow-500 flex justify-center items-center">
                      <AiOutlineSearch size={24} />
                    </div>
                  </div>
                </div>
                {/* tabs menu*/}
                <Tabs className="mt-5">
                  <TabList className="border-0 flex space-x-2">
                    <Tab className="border-0 text-gray-400">Categories</Tab>
                    <div className="w-[1px] h-[16px] bg-gray-400"></div>
                    <Tab className="border-0 text-gray-400">Main Menu</Tab>
                  </TabList>

                  <TabPanel className="mt-5">
                    <ul className="">
                      <li>
                        <a>
                          <BiMobileAlt size={18} /> Mobile & Laptop
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaGamepad size={18} /> Gaming Entertainment
                        </a>
                      </li>
                      <li>
                        <a>
                          <AiOutlineVideoCamera size={18} /> Images & video
                        </a>
                      </li>
                      <li>
                        <a>
                          <AiFillCar size={18} /> Vehicles
                        </a>
                      </li>
                      <li>
                        <a>
                          <MdChair size={18} /> Furniture
                        </a>
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                        <Link href="/">Shop</Link>
                        <Link href="/">Blogs</Link>
                        <Link href="/">Contact</Link>
                      </li>
                    </ul>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link href="/">
            <Image src="/logo.svg" height="36" width="152" alt="logo" />
          </Link>
        </div>
        <div className="cart relative cursor-pointer">
          <Link href="/" className="">
            <BsBag size={24} />
          </Link>
          <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-yellow-500">
            6
          </span>
        </div>
      </div>
    </div>
  );
}
