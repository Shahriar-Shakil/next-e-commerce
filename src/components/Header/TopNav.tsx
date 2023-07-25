import Link from "next/link";
import React from "react";
import DropdownReact from "../DropdownReact";

type Props = {};

export default function TopNav({}: Props) {
  return (
    <div className="w-full bg-white h-10 border-b border-gray-100">
      <div className="container-x mx-auto h-full ">
        <div className="flex justify-between items-center h-full">
          <div className="topbar-nav">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-xs leading-6 text-black font-500"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs leading-6 text-black font-500"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xs leading-6 text-black font-500"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="topbar-dropdowns sm:block hidden">
            <div className="flex space-x-6">
              <DropdownReact
                options={["United State", "Bangladesh", "India"]}
              />
              <DropdownReact options={["USD", "BDT"]} />
              <DropdownReact options={["Bangla", "English"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
