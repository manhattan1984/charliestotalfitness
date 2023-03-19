import { createClient } from "@/utils/supabase-server";
import { redirect } from "next/navigation";
import React from "react";
import Navbar from "./(components)/Navbar";
import SignOut from "./(components)/SignOut";
import CartButton from "./(components)/CartButton";
const layout = async ({ children }) => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    redirect("/signin");
  }
  return (
    <div className="my-14 mx-4">
      <div className="flex justify-between items-center">
        <p className="text-4xl mb-8 pt-10">Account</p>
        <CartButton />
      </div>
      <Navbar />
      <div className="">{children}</div>
      <SignOut />
    </div>
  );
};

export default layout;
