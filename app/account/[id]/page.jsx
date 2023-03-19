import { createClient } from "@/utils/supabase-server";
import React from "react";
import PersonalInformation from "../PersonalInformation";

const page = async ({ params: { id } }) => {
  const supabase = createClient();

  let { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  let { data: user_address, error: user_addressError } = await supabase
    .from("user_address")
    .select("*")
    .eq("user_id", id);

  return <PersonalInformation profile={profile} address={user_address} />;
};

export default page;
