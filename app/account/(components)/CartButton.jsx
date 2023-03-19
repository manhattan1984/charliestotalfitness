"use client";
import React from "react";
import { useCart } from "../../(context)/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CartButton = () => {
  const { setOpen } = useCart();
  return (
    <div>
      <ShoppingCartIcon onClick={() => setOpen(true)} className="h-6 w-6 cursor-pointer" />
    </div>
  );
};

export default CartButton;
