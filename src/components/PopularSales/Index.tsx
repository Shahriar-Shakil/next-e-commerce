import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

export default function PopularSales() {
  return (
    <div className="section-wrapper w-full pb-[60px]">
      <div className="container-x mx-auto">
        <div className=" section-title flex justify-between items-center mb-5">
          <div className="">
            <h1 className="sm:text-3xl text-xl font-semibold text-black leading-none">
              Popular Sales
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
          <div className="products-section w-full">
            <div className="grid lg:grid-cols-3 grid-cols-1 xl:gap-[30px] lg:gap-5">
              <div className="item-col">
                <div
                  data-aos="fade-up"
                  className="product-card-row-two w-full "
                >
                  <div className="w-full h-[105px] bg-white border border-gray-200 px-5 ">
                    <div className="w-full h-full flex space-x-5 justify-center items-center">
                      <div className="w-[75px] h-[75px]">
                        <Image
                          src="/images/products/product-img-1.jpg"
                          width="75"
                          height="75"
                          className="w-full h-full object-cover"
                          alt="pp"
                        />
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-center  ">
                        <Link
                          href="/"
                          className="title mb-2 sm:text-[15px] text-[13px] font-600 text-black leading-[24px] line-clamp-1 hover:text-blue-600"
                        >
                          Xoggle aute et pariatur adipisicing nostrud et
                          excepteur{" "}
                        </Link>
                        <div className="price ">
                          <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                            $27.27
                          </span>
                          <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                            $18.73
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="product-card-row-two w-full "
                >
                  <div className="w-full h-[105px] bg-white border border-gray-100 px-5 ">
                    <div className="w-full h-full flex space-x-5 justify-center items-center">
                      <div className="w-[75px] h-[75px]">
                        <Image
                          src="/images/products/product-img-2.jpg"
                          width="75"
                          height="75"
                          className="w-full h-full object-cover"
                          alt="pp"
                        />
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-center  ">
                        <Link
                          href="/"
                          className="title mb-2 sm:text-[15px] text-[13px] font-600 text-black leading-[24px] line-clamp-1 hover:text-blue-600"
                        >
                          Xoggle aute et pariatur adipisicing nostrud et
                          excepteur{" "}
                        </Link>
                        <div className="price ">
                          <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                            $27.27
                          </span>
                          <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                            $18.73
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-col">
                <div
                  data-aos="fade-up"
                  className="product-card-row-two w-full "
                >
                  <div className="w-full h-[105px] bg-white border border-gray-200 px-5 ">
                    <div className="w-full h-full flex space-x-5 justify-center items-center">
                      <div className="w-[75px] h-[75px]">
                        <Image
                          src="/images/products/product-img-3.jpg"
                          width="75"
                          height="75"
                          className="w-full h-full object-cover"
                          alt="pp"
                        />
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-center  ">
                        <Link
                          href="/"
                          className="title mb-2 sm:text-[15px] text-[13px] font-600 text-black leading-[24px] line-clamp-1 hover:text-blue-600"
                        >
                          Xoggle aute et pariatur adipisicing nostrud et
                          excepteur{" "}
                        </Link>
                        <div className="price ">
                          <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                            $27.27
                          </span>
                          <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                            $18.73
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="product-card-row-two w-full "
                >
                  <div className="w-full h-[105px] bg-white border border-gray-100 px-5 ">
                    <div className="w-full h-full flex space-x-5 justify-center items-center">
                      <div className="w-[75px] h-[75px]">
                        <Image
                          src="/images/products/product-img-4.jpg"
                          width="75"
                          height="75"
                          className="w-full h-full object-cover"
                          alt="pp"
                        />
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-center  ">
                        <Link
                          href="/"
                          className="title mb-2 sm:text-[15px] text-[13px] font-600 text-black leading-[24px] line-clamp-1 hover:text-blue-600"
                        >
                          Xoggle aute et pariatur adipisicing nostrud et
                          excepteur{" "}
                        </Link>
                        <div className="price ">
                          <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                            $27.27
                          </span>
                          <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                            $18.73
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-col">
                <div
                  data-aos="fade-up"
                  className="product-card-row-two w-full "
                >
                  <div className="w-full h-[105px] bg-white border border-gray-200 px-5 ">
                    <div className="w-full h-full flex space-x-5 justify-center items-center">
                      <div className="w-[75px] h-[75px]">
                        <Image
                          src="/images/products/product-img-5.jpg"
                          width="75"
                          height="75"
                          className="w-full h-full object-cover"
                          alt="pp"
                        />
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-center  ">
                        <Link
                          href="/"
                          className="title mb-2 sm:text-[15px] text-[13px] font-600 text-black leading-[24px] line-clamp-1 hover:text-blue-600"
                        >
                          Xoggle aute et pariatur adipisicing nostrud et
                          excepteur{" "}
                        </Link>
                        <div className="price ">
                          <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                            $27.27
                          </span>
                          <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                            $18.73
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="product-card-row-two w-full "
                >
                  <div className="w-full h-[105px] bg-white border border-gray-100 px-5 ">
                    <div className="w-full h-full flex space-x-5 justify-center items-center">
                      <div className="w-[75px] h-[75px]">
                        <Image
                          src="/images/products/product-img-6.jpg"
                          width="75"
                          height="75"
                          className="w-full h-full object-cover"
                          alt="pp"
                        />
                      </div>
                      <div className="flex-1 h-full flex flex-col justify-center  ">
                        <Link
                          href="/"
                          className="title mb-2 sm:text-[15px] text-[13px] font-600 text-black leading-[24px] line-clamp-1 hover:text-blue-600"
                        >
                          Xoggle aute et pariatur adipisicing nostrud et
                          excepteur{" "}
                        </Link>
                        <div className="price ">
                          <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                            $27.27
                          </span>
                          <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                            $18.73
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
