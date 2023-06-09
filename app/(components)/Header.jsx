"use client";
import React, { useState } from "react";

import Link from "next/link";
import { useMenu } from "../(context)/MenuContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";
import { useScroll } from "framer-motion";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

const Header = ({ links }) => {
  const { menuOpen, setMenuOpen } = useMenu();
  const path = usePathname();
  const { scrollYProgress } = useScroll();
  const [isTop, setIsTop] = useState(true);
  scrollYProgress.on("change", (latest) => setIsTop(latest === 0));
  const isHomePage = isTop && path === "/";
  return (
    <nav
      className={`fixed top-0 z-20 w-full ${
        isHomePage ? "" : "bg-white"
      } transition duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center max-w-5xl mx-auto uppercase p-4 text-white">
        <Link href="/" className="">
          <div className={``}>
            <p
              className={`${isHomePage ? "" : "text-red-900"} `}
            >
              Charlies
            </p>
          </div>
        </Link>

        <Transition show={!menuOpen}>
          <Bars3Icon
            className={`h-6 w-6 cursor-pointer ${isHomePage ? "" : "text-red-900"}`}
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
