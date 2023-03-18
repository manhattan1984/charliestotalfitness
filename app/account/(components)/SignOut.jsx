"use client";
import { useSupabase } from "@/components/supabase-provider";
import React from "react";

const SignOut = () => {
  const { supabase } = useSupabase();
  const signOut = async () => {
    await supabase.auth.signOut();
  };
  return (
    <button onClick={signOut} className="underline underline-offset-4">
      Log Out
    </button>
  );
};

export default SignOut;
