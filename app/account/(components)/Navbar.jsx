"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Personal Information",
      link: "",
    },
    {
      name: "Memberships",
      link: "memberships",
    },
    // {
    //   name: "Reservations",
    //   link: "reservations",
    // },
    // {
    //   name: "Purchases",
    //   link: "purchases",
    // },
  ];

  return (
    <nav className="flex gap-2 mb-4">
      {links.map(({ name, link }) => (
        <Link
          key={name}
          className={`text-sm ${
            pathname === `/account/${link}`
              ? "text-black font-medium"
              : "text-gray-600"
          } `}
          href={`/account/${link}`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
