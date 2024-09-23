"use client";
import React from "react";
import Logout from "@/app/(admin)/admin/Logout";
import { usePathname } from "next/navigation";
import { TbLayoutDashboard, TbListDetails, TbUserSquareRounded } from "react-icons/tb";
import {PiNewspaperClippingBold, PiUsersThreeBold } from "react-icons/pi";
import { HiOutlineBookmarkAlt, HiOutlineCog } from "react-icons/hi";

function Dashboard() {
  const pathname = usePathname();

  const NAV_ITEMS = [
    {
      title: "Dashboard",
      url: "/admin",
      icon: (
        <TbLayoutDashboard className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>
      ),
    },
    {
      title: "Admissions",
      url: "/admin/admissions",
      icon: (
        <TbUserSquareRounded className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>

      ),
    },
    {
      title: "Programs",
      url: "/admin/programs",
      icon: (
        <TbListDetails className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>
      ),
    },
    {
      title: "News & Events",
      url: "/admin/news",
      icon: (
        <PiNewspaperClippingBold className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>

      ),
    },
    {
      title: "Publications",
      url: "/admin/publications",
      icon: (
        <HiOutlineBookmarkAlt  className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>
      ),
    },
    {
      title: "People",
      url: "",
      icon: (
        <PiUsersThreeBold className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>
      ),
    },
    {
      title: "Settings",
      url: "",
      icon: (
        <HiOutlineCog className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>
      ),
    },
  ];

  return (
    <div className="flex flex-1 bg-gray-50">
      <div className="hidden md:flex md:w-72 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white md:w-72 fixed h-screen">
          <div className="flex items-center justify-center flex-shrink-0 pt-8 pb-6">
            <img
              className="h-48"
              src="/images/logo with text verti.png"
              alt=""
            />
          </div>

          <div className="px-10 mt-6">
            <hr className="border-secondary/90" />
          </div>

          <div className="flex flex-col flex-1 px-7 mt-6">
            <div className="space-y-1">
              {NAV_ITEMS.map((item: any, index: number) => (
                <a
                  key={index}
                  href={item.url}
                  title=""
                  className={`${
                    item.url.startsWith(pathname)
                      ? "text-white bg-secondary"
                      : "bg-white text-zinc-800 hover:bg-secondary/20"
                  } flex items-center px-4 py-3 text-sm font-medium  transition-all duration-300   rounded-xl group`}
                >
                  {item.icon}
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
