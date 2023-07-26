import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer-section-wrapper bg-white print:hidden">
      <div className="container-x block mx-auto pt-[56px]">
        <div className="bottom-bar border-t border-gray-100 lg:h-[82px] lg:flex justify-between items-center">
          <div className="flex lg:space-x-5 justify-between items-center mb-3">
            <div className="flex space-x-5 items-center">
              <a className="text-gray-500" href="#">
                <BsInstagram size={18} />
              </a>
              <a className="text-gray-500" href="#">
                <BsFacebook size={18} />
              </a>
              <a className="text-gray-500" href="#">
                <BsYoutube size={18} />
              </a>
            </div>
            <span className="sm:text-base text-[10px] text-gray-500 font-300">
              ©2023
              <a
                href="https://shahriar.netlify.app/"
                target="_blank"
                className="font-medium text-black mx-1"
              >
                Shahriar
              </a>
              All rights reserved
            </span>
          </div>
          <div>
            <a href="#">
              <Image
                width={318}
                height="28"
                alt="payment-getways"
                src="/images/payment-getways.png"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
