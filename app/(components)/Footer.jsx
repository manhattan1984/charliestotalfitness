"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = ({ links }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-blue-600 text-white gap-6">
      <div className="uppercase flex flex-col-reverse gap-4">
        {links.map(({ link, name }) => (
          <Link className="border-white border p-2" key={link} href={link}>
            {name}
          </Link>
        ))}
      </div>
      <div className="text-center">
        <p> Plot 56, 57 Stadium Rd, Rumuola 500102, Port Harcourt, Rivers</p>
        <div className="flex gap-4 justify-center mt-2">
          <p>0706 251 8233</p>
          <p>charliestotalfitness@gmail.com</p>
        </div>
      </div>
      <div className="flex gap-2 text-xl">
        <FaFacebookF />
        <FaInstagram />
        <HiOutlineMail />
      </div>
    </div>
  );
};

export default Footer;
