"use client";
import { useSupabase } from "@/components/supabase-provider";
import { SupabaseClient } from "@supabase/supabase-js";
import Link from "next/link";
import React, { useRef, use } from "react";

const SignUp = () => {
  const { supabase } = useSupabase();

  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const birthDateRef = useRef();

  const signUp = async () => {
    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();
    const first_name = firstNameRef.current?.value.trim();
    const last_name = lastNameRef.current?.value.trim();
    const birth_date = birthDateRef.current?.value;
    const phone_number = phoneNumberRef.current?.value.trim();
    if (
      email &&
      password &&
      first_name &&
      last_name &&
      birth_date &&
      phone_number
    ) {
      console.log(birth_date);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name,
            last_name,
            birth_date: new Date(birth_date).toDateString(),
            phone_number,
            email,
          },
        },
      });
      console.log(`data: ${data}, error: ${error}`);
      console.log(data);
    }
  };

  return (
    <div className="mx-8 my-14">
      <div className="">
        <p className="text-3xl">Create an Account</p>
        <p>
          Already have an account?{" "}
          <span>
            <Link href="/signin" className="underline underline-offset-4">
              Log in now.
            </Link>
          </span>
        </p>
        <div className="flex flex-col gap-4">
          <div className="mt-4">
            <p className="font-bold">First Name</p>
            <input
              ref={firstNameRef}
              type="text"
              className="border rounded w-full p-2 mt-2"
            />
          </div>
          <div className="mt-4">
            <p className="font-bold">Last Name</p>
            <input
              ref={lastNameRef}
              type="text"
              className="border rounded w-full p-2 mt-2"
            />
          </div>
          <div className="mt-4">
            <p className="font-bold">Email Address</p>
            <input
              ref={emailRef}
              type="email"
              className="border rounded w-full p-2 mt-2"
            />
          </div>
          <div className="mt-4">
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
          <div className="mt-4">
            <p className="font-bold">Phone Number</p>
            <input
              ref={phoneNumberRef}
              type="tel"
              className="border rounded w-full p-2 mt-2"
            />
          </div>
          <div className="mt-4">
            <p className="font-bold">Birth Date</p>
            <input
              ref={birthDateRef}
              type="date"
              className="border rounded w-full p-2 mt-2"
            />
          </div>
        </div>
        <button
          onClick={signUp}
          className="py-1 px-4 mt-4 text-sm text-white bg-blue-600 uppercase"
        >
          create account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
