"use client";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "./Modal";

const Package = ({ package: { name, price, duration } }) => {
  const [showPackage, setShowPackage] = useState(false);

  const handleShowPackage = () => setShowPackage(!showPackage);
  return (
    <>
      <div
        onClick={handleShowPackage}
        className="border border-gray-500 rounded cursor-pointer"
      >
        <div className="bg-gray-500 h-8"></div>
        <div className="p-4">
          <p className="uppercase">{name}</p>
          <div className="divide-x mt-2 ">
            <span className="pr-2 text-xl">${price}</span>
            <span className="pl-2 text-xl">
              {duration} <span className="text-xs">days</span>
            </span>
          </div>
        </div>
      </div>
      <Modal onClose={handleShowPackage} show={showPackage}>
        <div className="flex flex-col items-center justify-center mt-14">
          <div className="w-4/5 mx-auto">
            <div className="p-4 bg-blue-600 text-white uppercase">
              <p>{name}</p>
              <p>${price}</p>
            </div>
            <div className="border p-4 bg-white divide-y">
              <div className="pb-4">
                <p>Duration</p>
                <p>{duration} Days</p>
              </div>
              <div className="pt-4">
                <button className="text-center uppercase w-full text-white bg-blue-600 p-2">log in to purchase</button>
                <p className="text-sm mt-4 text-center">
                  Don&lsquo;t have an account?{" "}
                  <Link href="signup" className="underline underline-offset-2">Create one now.</Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Package;
