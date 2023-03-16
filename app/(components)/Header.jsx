"use client";
import React from "react";

import Link from "next/link";
import { useMenu } from "../(context)/MenuContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";

const Header = ({ links }) => {
  const { menuOpen, setMenuOpen } = useMenu();
  const path = usePathname();
  return (
    <nav className="fixed top-0 z-20 w-full backdrop-blur-sm">
      <div className="flex justify-between items-center max-w-5xl mx-auto uppercase p-4 text-white">
        <Link href="/" className="">
          <div className={`${menuOpen ? "text-red-500" : ""}`}>
            <p className="">Charlies</p>
            <p className="text-xs">total fitness center</p>
          </div>
        </Link>

        <Transition show={!menuOpen}>
          <Bars3Icon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </Transition>
        <Transition show={menuOpen}>
          <XMarkIcon
            className="h-6 w-6 cursor-pointer text-red-500"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </Transition>
      </div>
    </nav>
  );
};

export default Header;
