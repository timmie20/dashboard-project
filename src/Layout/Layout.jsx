import React from "react";
import SidePanel from "../components/SidePanel";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <div className="flex">
        <div className="h-screen max-w-[296px]">
          <SidePanel />
        </div>
        <div className="w-full flex-1">
          <Header />
          <main className=" bg-[#F7F7FC] px-3 py-2.5 md:px-[21px] md:py-[16px]">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
