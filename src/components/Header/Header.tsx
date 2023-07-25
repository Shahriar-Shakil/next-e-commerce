import React from "react";

import TopNav from "./TopNav";
import MiddleBar from "./MiddleBar";
import BottomNavbar from "./BottomNavbar";
import NavDrawer from "./NavDrawer";

export default function Header() {
  return (
    <header className="relative">
      <TopNav />
      <MiddleBar />
      <NavDrawer />
      <BottomNavbar />
    </header>
  );
}
