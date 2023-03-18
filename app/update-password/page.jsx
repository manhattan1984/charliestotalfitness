"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSupabase } from "../../components/supabase-provider";

const page = () => {
  const passwordRef = useRef();
  const searchParams = useSearchParams();
  const { supabase } = useSupabase();
  const router = useRouter();

  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");

  const updatePassword = async () => {
    const { data, error } = await supabase.auth.updateUser({
      password: passwordRef.current.value.trim(),
    });

    if (!error) {
      toast.success("Password Change Successful");
      router.push("/signin");
      return;
    }
    toast.error("error");
    console.log("error", error);
  };
  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center h-screen">
        <div className="">
          <p className="text-xl mb-6">Enter New Password</p>
          <p className="font-bold">Password</p>
          <input
            ref={passwordRef}
            type="password"
            className="border rounded w-full p-2 mt-2"
          />
          <p className="text-gray-600 text-sm mt-1">
            Password must be at least 6 characters long
          </p>
          <button
            onClick={updatePassword}
            className="w-full bg-blue-600 text-white p-2 mt-2"
          >
            Save Password
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
