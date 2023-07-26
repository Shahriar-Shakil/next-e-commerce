import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Ratings from "../Ratings";
import { BiExpand, BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

export default function TopSellingProducts() {
  return (
    <div className="section-wrapper w-full mb-[60px]">
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
        <div className="section-content">
          <div className="section-content w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 ">
            {/* item  */}
            <div className="item w-full">
              <div className="product-row-card-style-one w-full h-[250px] bg-white group relative overflow-hidden aos-init aos-animate">
                <div className="flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2">
                  <div className="lg:w-1/2 w-1/3 h-full">
                    <Image
                      src="/images/products/product-img-4.jpg"
                      width="255"
                      height="190"
                      className="w-full h-full object-contain"
                      alt="product"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center h-full">
                    <div>
                      {/* rating */}
                      <Ratings />
                      <Link
                        className="title mb-2 sm:text-[15px] text-[13px] font-semibold text-black leading-[24px] line-clamp-2 hover:text-blue-600"
                        href="/"
                      >
                        Senmei ipsum dolore eiusmod dolor officia do nisi
                      </Link>
                      {/* price */}
                      <div className="price mb-[26px]">
                        <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                          $27.27
                        </span>
                        <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                          $18.73
                        </span>
                      </div>
                      <button className="btn btn-sm w-[120px] h-[30px] btn-warning text-[13px]">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* hover action */}

                <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-[30px]  transition-all duration-300 ease-in-out">
                  <Link href="/">
                    <span className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded">
                      <BiExpand size={24} />
                    </span>
                  </Link>
                  <Link href="/">
                    <span className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded">
                      <AiOutlineHeart size={24} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="item w-full">
              <div className="product-row-card-style-one w-full h-[250px] bg-white group relative overflow-hidden aos-init aos-animate">
                <div className="flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2">
                  <div className="lg:w-1/2 w-1/3 h-full">
                    <Image
                      src="/images/products/product-img-5.jpg"
                      width="255"
                      height="190"
                      className="w-full h-full object-contain"
                      alt="product"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center h-full">
                    <div>
                      {/* rating */}
                      <Ratings />
                      <Link
                        className="title mb-2 sm:text-[15px] text-[13px] font-semibold text-black leading-[24px] line-clamp-2 hover:text-blue-600"
                        href="/"
                      >
                        Senmei ipsum dolore eiusmod dolor officia do nisi
                      </Link>
                      {/* price */}
                      <div className="price mb-[26px]">
                        <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                          $27.27
                        </span>
                        <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                          $18.73
                        </span>
                      </div>
                      <button className="btn btn-sm w-[120px] h-[30px] btn-warning text-[13px]">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* hover action */}

                <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-[30px]  transition-all duration-300 ease-in-out">
                  <Link href="/">
                    <span className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded">
                      <BiExpand size={24} />
                    </span>
                  </Link>
                  <Link href="/">
                    <span className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded">
                      <AiOutlineHeart size={24} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="item w-full">
              <div className="product-row-card-style-one w-full h-[250px] bg-white group relative overflow-hidden aos-init aos-animate">
                <div className="flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2">
                  <div className="lg:w-1/2 w-1/3 h-full">
                    <Image
                      src="/images/products/product-img-6.jpg"
                      width="255"
                      height="190"
                      className="w-full h-full object-contain"
                      alt="product"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center h-full">
                    <div>
                      {/* rating */}
                      <Ratings />
                      <Link
                        className="title mb-2 sm:text-[15px] text-[13px] font-semibold text-black leading-[24px] line-clamp-2 hover:text-blue-600"
                        href="/"
                      >
                        Senmei ipsum dolore eiusmod dolor officia do nisi
                      </Link>
                      {/* price */}
                      <div className="price mb-[26px]">
                        <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                          $27.27
                        </span>
                        <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                          $18.73
                        </span>
                      </div>
                      <button className="btn btn-sm w-[120px] h-[30px] btn-warning text-[13px]">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* hover action */}

                <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-[30px]  transition-all duration-300 ease-in-out">
                  <Link href="/">
                    <span className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded">
                      <BiExpand size={24} />
                    </span>
                  </Link>
                  <Link href="/">
                    <span className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded">
                      <AiOutlineHeart size={24} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="item w-full">
              <div className="product-row-card-style-one w-full h-[250px] bg-white group relative overflow-hidden aos-init aos-animate">
                <div className="flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2">
                  <div className="lg:w-1/2 w-1/3 h-full">
                    <Image
                      src="/images/products/product-img-7.jpg"
                      width="255"
                      height="190"
                      className="w-full h-full object-contain"
                      alt="product"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center h-full">
                    <div>
                      {/* rating */}
                      <Ratings />
                      <Link
                        className="title mb-2 sm:text-[15px] text-[13px] font-semibold text-black leading-[24px] line-clamp-2 hover:text-blue-600"
                        href="/"
                      >
                        Senmei ipsum dolore eiusmod dolor officia do nisi
                      </Link>
                      {/* price */}
                      <div className="price mb-[26px]">
                        <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                          $27.27
                        </span>
                        <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                          $18.73
                        </span>
                      </div>
                      <button className="btn btn-sm w-[120px] h-[30px] btn-warning text-[13px]">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* hover action */}

                <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-[30px]  transition-all duration-300 ease-in-out">
                  <Link href="/">
                    <span className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded">
                      <BiExpand size={24} />
                    </span>
                  </Link>
                  <Link href="/">
                    <span className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded">
                      <AiOutlineHeart size={24} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
