import React from "react";
import { BiChevronDown, BiChevronRight, BiMobileAlt } from "react-icons/bi";
import { AiFillCar, AiOutlineBars, AiOutlineVideoCamera } from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import Link from "next/link";
type Props = {};

export default function BottomNavbar({}: Props) {
  return (
    <div className="nav-widget-wrapper w-full  h-[60px] relative z-30 bg-yellow-500   lg:block hidden">
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-between items-center">
            {/* category dropdown */}
            <div className="category w-[270px] h-[53px] bg-white  rounded-t-md mt-[6px] relative ">
              <details className="dropdown  absolute translate-y-1/2  w-full px-5 ">
                <summary className=" w-full flex items-center justify-between ">
                  <AiOutlineBars size={24} />
                  <span>All Categories</span>
                  <BiChevronDown size={24} />
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full -mx-5 	">
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
              </details>
            </div>
            <div className="nav">
              <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                <li>
                  <Link className="text-black font-medium  " href="/">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link className="text-black font-medium " href="/">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-black font-medium " href="/">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="become-seller-btn">
              <Link
                href="/"
                className="bg-black w-[161px] h-[40px] flex justify-center items-center cursor-pointer "
              >
                <div className="flex space-x-2 items-center text-white">
                  <span className="text-sm font-semibold">Become a Seller</span>
                  <BiChevronRight size={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
