"use client";
import { useSupabase } from "@/components/supabase-provider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { Toaster } from "react-hot-toast";

const page = () => {
  const { supabase } = useSupabase();
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  const signIn = async () => {
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const {
      data: {
        user: { id },
      },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("data", id);
    console.log("error", error);

    if (error) {
      return;
    }

    router.push(`/account/${id}`);
  };
  return (
    <>
      <Toaster />
      <div className="my-14 mx-8">
        <div className="text-center">
          <p className="text-3xl">Charlies Total Fitness Center</p>
          <p className="text-2xl my-8 font-bold">Log In</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="">
            <p className="font-bold">Email Address</p>
            <input
              ref={emailRef}
              type="email"
              className="border rounded w-full p-2 mt-2"
            />
          </div>
          <div className="">
            <p className="font-bold">Password</p>
            <input
              ref={passwordRef}
              type="password"
              className="border rounded w-full p-2 mt-2"
            />
            <p className="text-gray-600 text-sm mt-1">
              Password must be at least 6 characters long
            </p>
          </div>
          <p>
            Forgot your password?{" "}
            <span>
              <Link
                href="/reset-password"
                className="underline underline-offset-4"
              >
                Reset it now.
              </Link>
            </span>
          </p>
          <div className="flex justify-center">
            <button
              onClick={signIn}
              className="w-1/2 mx-auto py-2 uppercase bg-blue-600 text-center text-sm text-white font-bold"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
