import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { BiChevronRight, BiExpand, BiShoppingBag } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export default function GamerWorld() {
  return (
    <div className="section-style-one category-products mb-[60px] ">
      <div className="section-wrapper w-full ">
        <div className="container-x mx-auto">
          <div className=" section-title flex justify-between items-center mb-5">
            <div className="">
              <h1 className="sm:text-3xl text-xl font-semibold text-black leading-none">
                Gamer World
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
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                <div className="category-card hidden xl:block w-full">
                  <div
                    style={{
                      background:
                        "url(/category/section-category-1.jpg) 0% 0% / cover no-repeat;",
                    }}
                    className="category-card-wrappwer w-full h-full p-[30px]"
                  >
                    <div className="">
                      <h1 className="text-base font-semibold tracking-wide mb-2">
                        Mobile & Tablet
                      </h1>
                      <div className="brands-list mb-[7px]">
                        <ul>
                          <li>
                            <Link
                              className="text-sm text-gray-400  border-b border-transparent hover:border-black hover:text-black capitalize"
                              href="/"
                            >
                              Xioami
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-sm text-gray-400  border-b border-transparent hover:border-black hover:text-black capitalize"
                              href="/"
                            >
                              Apple
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-sm text-gray-400  border-b border-transparent hover:border-black hover:text-black capitalize"
                              href="/"
                            >
                              Google
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-sm text-gray-400  border-b border-transparent hover:border-black hover:text-black capitalize"
                              href="/"
                            >
                              Samsung
                            </Link>
                          </li>
                        </ul>
                        <Link
                          className="flex space-x-2 items-center mt-2"
                          href="/"
                        >
                          <span className="text-qblack font-semibold text-sm">
                            Shop Now
                          </span>
                          <BiChevronRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* items */}
                <div className="item">
                  <div
                    className="product-card-one w-full h-full bg-white relative group overflow-hidden"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px 0px",
                    }}
                  >
                    <div
                      className="product-card-img w-full h-[300px]"
                      style={{
                        background:
                          "url(/category/product-img-1.jpg) center center no-repeat;",
                      }}
                    ></div>
                    <div className="product-card-details px-[30px] pb-[30px] relative">
                      {/* hover action */}

                      <div className="absolute w-full h-10 px-[30px] left-0 top-40 group-hover:top-[85px] transition-all duration-300 ease-in-out">
                        <button className="btn w-full btn-warning">
                          <div className="flex items-center space-x-3">
                            <BiShoppingBag size={18} />
                            <span>Add To Cart</span>
                          </div>
                        </button>
                      </div>
                      <div className="rating rating-sm">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                      <Link
                        href="/"
                        className="title mb-2 text-[15px] font-semibold text-black leading-[24px] line-clamp-2 hover:text-blue-600"
                      >
                        Xoggle aute et pariatur adipisicing nostrud et excepteur
                      </Link>
                      <p className="price">
                        <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                          $27.27
                        </span>
                        <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                          $18.73
                        </span>
                      </p>
                      {/* hover action */}

                      <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 -top-52  transition-all duration-300 ease-in-out">
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
                <div className="item">
                  <div
                    className="product-card-one w-full h-full bg-white relative group overflow-hidden"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px 0px",
                    }}
                  >
                    <div
                      className="product-card-img w-full h-[300px]"
                      style={{
                        background:
                          "url(/category/product-img-2.jpg) center center no-repeat;",
                      }}
                    ></div>
                    <div className="product-card-details px-[30px] pb-[30px] relative">
                      {/* hover action */}

                      <div className="absolute w-full h-10 px-[30px] left-0 top-40 group-hover:top-[85px] transition-all duration-300 ease-in-out">
                        <button className="btn w-full btn-warning">
                          <div className="flex items-center space-x-3">
                            <BiShoppingBag size={18} />
                            <span>Add To Cart</span>
                          </div>
                        </button>
                      </div>
                      <div className="rating rating-sm">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                      </div>
                      <Link
                        href="/"
                        className="title mb-2 text-[15px] font-semibold text-black leading-[24px] line-clamp-2 hover:text-blue-600"
                      >
                        Geeky ipsum esse repreh est consequat
                      </Link>
                      <p className="price">
                        <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                          $24.55
                        </span>
                        <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                          $17.79
                        </span>
                        {/* hover action */}
                        <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 -top-52  transition-all duration-300 ease-in-out">
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
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div
                    className="product-card-one w-full h-full bg-white relative group overflow-hidden"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px 0px",
                    }}
                  >
                    <div
                      className="product-card-img w-full h-[300px]"
                      style={{
                        background:
                          "url(/category/product-img-3.jpg) center center no-repeat;",
                      }}
                    ></div>
                    <div className="product-card-details px-[30px] pb-[30px] relative">
                      <div className="absolute w-full h-10 px-[30px] left-0 top-40 group-hover:top-[85px] transition-all duration-300 ease-in-out">
                        <button className="btn w-full btn-warning">
                          <div className="flex items-center space-x-3">
                            <BiShoppingBag size={18} />
                            <span>Add To Cart</span>
                          </div>
                        </button>
                      </div>
                      <div className="rating rating-sm">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                      </div>
                      <Link
                        href="/"
                        className="title mb-2 text-[15px] font-semibold text-black leading-[24px] line-clamp-2 hover:text-blue-600"
                      >
                        Conjurica ea magna eiusmod esse cupt anim aliquip
                      </Link>
                      <p className="price">
                        <span className="main-price text-gray-400 line-through font-semibold text-[18px]">
                          $32.55
                        </span>
                        <span className="offer-price text-red-400 font-semibold text-[18px] ml-2">
                          $22.79
                        </span>
                      </p>
                      <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 -top-52  transition-all duration-300 ease-in-out">
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
        </div>
      </div>
    </div>
  );
}
