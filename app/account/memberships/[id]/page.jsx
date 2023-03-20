import { createClient } from "@/utils/supabase-server";
import React from "react";

const page = async ({ params: { id } }) => {
  const supabase = createClient();

  let {
    data: { email },
    error,
  } = await supabase.from("profiles").select("email").eq("id", id).single();

  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://charliestotalfitness.vercel.app";

  try {
    const res = await fetch(
      `${url}/account/memberships/api/${email}`
    );
    console.log("response body", await res.json());
  } catch (error) {
    console.log("error", error);
  }

  // console.log(res)

  // console.log(res);

  return (
    <div>
      <p className="text-2xl font-bold">Active Memberships</p>
      <p className="text-center text-sm my-8 font-medium text-gray-600">
        You don&rsquo;t have any active memberships.
      </p>
    </div>
  );
};

export default page;
