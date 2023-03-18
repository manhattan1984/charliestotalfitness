import { createClient } from "@/utils/supabase-server";
import React from "react";
import Package from "./Package";

const Packages = async () => {
  const supabase = createClient();
  let { data: packages, error } = await supabase
    .from("memberships")
    .select("*");

  return (
    <div className="mt-8 h-screen flex flex-col justify-center">
      <p className="text-center text-4xl">Our Packages</p>
      <div className="m-4 flex flex-col gap-4">
        {packages.map((item, index) => (
          <Package package={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
