import { createClient } from "@/utils/supabase-server";
import React from "react";
import Package from "./Package";

const Packages = async ({ plans }) => {
  return (
    <div className="mt-8 h-screen flex flex-col justify-center">
      <p className="text-center text-4xl">Our Plans</p>
      <div className="m-4 flex flex-col gap-4">
        {plans.map((plan, index) => (
          <Package {...plan} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
