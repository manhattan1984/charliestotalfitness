"use client";
import Link from "next/link";
import React from "react";
import { useMenu } from "../(context)/MenuContext";
import { usePathname } from "next/navigation";

const Menu = ({ links }) => {
  const { menuOpen, setMenuOpen } = useMenu();
  const pathname = usePathname();

  return (
    <div
      className={`ease-in-out duration-300 ${
        menuOpen ? "" : "-translate-y-full opacity-0"
      } h-screen w-screen z-10 fixed inset-0 flex flex-col gap-8 uppercase p-4 justify-center bg-white`}
    >
      {links.map(({ link, name }, index) => (
        <div
          key={name}
          className="flex gap-4 max-w-5xl"
        >
          <Link
            onClick={() => setMenuOpen(false)}
            href={link}
            className={`text-4xl font-black ${
              pathname === link ? "text-red-500" : "text-red-300"
            }`}
          >
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
