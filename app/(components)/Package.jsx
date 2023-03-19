"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "../(context)/CartContext";
import Modal from "./Modal";

const Package = ({ name, price, value, id, user }) => {
  const [showPackage, setShowPackage] = useState(false);
  const { setOpen, addOneToCart } = useCart();

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
            <span className="pl-2 text-xl">{value}</span>
          </div>
        </div>
      </div>
      <Modal onClose={handleShowPackage} show={showPackage}>
        <div className="flex flex-col items-center justify-center mt-14">
          <div className="w-4/5 mx-auto">
            <div className="p-4 bg-red-900 text-white uppercase">
              <p>{name}</p>
              <p>${price}</p>
            </div>
            <div className="border p-4 bg-white divide-y">
              <div className="pb-4">
                <p>Renewed</p>
                <p>{value}</p>
              </div>
              {!user ? (
                <div className="pt-4">
                  <button className="text-center uppercase w-full text-white bg-red-900 p-2">
                    log in to purchase
                  </button>
                  <p className="text-sm mt-4 text-center">
                    Don&lsquo;t have an account?{" "}
                    <Link
                      href="signup"
                      className="underline underline-offset-2"
                    >
                      Create one now.
                    </Link>{" "}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      addOneToCart(id);
                      setOpen(true);
                      handleShowPackage();
                    }}
                    className="uppercase p-2 border bg-red-900 text-white"
                  >
                    purchase now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Package;
