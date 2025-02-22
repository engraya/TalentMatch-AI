"use client";

import { cn } from "@/lib/utils";
import { logo } from "@/src/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { SideBarProps } from "@/types";
import { menuList } from "@/config/menu";


export const Sidebar = ({ showSideBar }: SideBarProps) => {
  const path = usePathname();

  return (
    <div
    className={`fixed left-0 top-0 z-50 flex h-full flex-col justify-between overflow-y-auto transition-transform ${
      showSideBar ? "translate-x-0 " : "-translate-x-full lg:translate-x-0"
    }`}
  >
    <div className="flex h-[800px] flex-col bg-white p-5">
      <Link href="/">
      <div className="flex cursor-pointer flex-row gap-2">
       <Image src={logo} height={40} width={40} alt="logo" className="flex items-center justify-center"/>
         <span className="flex items-center justify-center font-urban text-xl font-bold text-gray-900">
         <h1
           className="bg-gradient-to-r from-teal-600 via-sky-700 to-cyan-500 bg-clip-text text-xl font-extrabold text-transparent">
                {siteConfig.name}
            </h1>
          </span>
      </div>
      </Link>
  
      <div className="mt-10 flex h-max flex-col justify-between">
        {menuList.map((menu) => (
          <Link
            href={menu.path}
            key={menu.name}
            className={cn(
              "mb-2 flex cursor-pointer items-center gap-2 whitespace-nowrap hover:bg-gray-400 rounded-lg p-3 font-bold hover:text-gray-900",
              path === menu.path && "bg-gray-700 border-teal-500 text-teal-100  group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
            )}
          >
            <Image src={menu.icon} width={30} height={30} alt="menu-icon"/>
            <h2 className="text-lg">{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
    </div>

  );
};