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

  return <PersonalInformation profile={profile} />;
};

export default page;
