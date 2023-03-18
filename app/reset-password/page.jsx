"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useSupabase } from "@/components/supabase-provider";

const page = () => {
  const emailRef = useRef();
  const { supabase } = useSupabase();

  const resetPassword = async () => {
    const email = emailRef.current.value;
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/update-password",
    });
    console.log("data", data);
    console.log("error", error);
  };
  return (
    <div className="my-14 mx-8">
      <p className="mb-8">
        {" "}
        <ChevronLeftIcon className="h-4 w-4 inline font-medium" />{" "}
        <Link
          className="underline underline-offset-2 text-sm font-bold text-gray-600"
          href="/signin"
        >
          Back To Log In
        </Link>
      </p>
      <div className="text-center font-bold">
        <p className="text-3xl">Charlies Total Fitness Center</p>
        <p className="text-2xl mt-10">Reset Password</p>
        <p>for your CHARLIES account</p>

        <p className="font-medium my-8">
          Enter your email address below, a message will be sent to reset your
          password.{" "}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="">
          <p className="font-bold">Email</p>
          <input
            ref={emailRef}
            type="email"
            className="border rounded w-full p-2 mt-2"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={resetPassword}
            className="w-1/2 mx-auto py-2 uppercase bg-blue-600 text-center text-sm text-white font-bold"
          >
            reset password
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
