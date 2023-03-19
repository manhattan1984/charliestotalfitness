"use client";
import React, { useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { useSupabase } from "@/components/supabase-provider";
import { toast, Toaster } from "react-hot-toast";

const EditPersonalInformation = ({
  onClose,
  profile: { first_name, last_name, email, phone_number, birth_date },
}) => {
  const { supabase } = useSupabase();

  // const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const birthDateRef = useRef();

  const updateInformation = async () => {
    // const newEmail = emailRef.current?.value;
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const birthDate = birthDateRef.current?.value;
    const phoneNumber = phoneNumberRef.current?.value;

    const newInfo = [firstName, lastName, birthDate, phoneNumber];
    const oldInfo = [first_name, last_name, birth_date, phone_number];

    const isTheSame = newInfo.every((value, index) => value === oldInfo[index]);

    if (isTheSame) {
      toast("Nothing To Change.");
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .update({
        first_name: firstName,
        last_name: lastName,
        birth_date: birthDate,
        phone_number: phoneNumber,
      })
      .eq("email", email);

    if (!error) {
      toast.success("Information Updated");
      return;
    }
    console.log("error");
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="flex justify-center items-center bg-white w-full">
        <div className="border p-8">
          <div className="flex mb-4">
            <XMarkIcon
              onClick={onClose}
              className="h-7 w-7 ml-auto cursor-pointer"
            />
          </div>
          <p className="text-2xl font-bold">Edit Basic Information</p>
          <div className="flex flex-col gap-4">
            <div className="mt-4">
              <p className="font-bold">First Name</p>
              <input
                defaultValue={first_name}
                ref={firstNameRef}
                type="text"
                className="border rounded w-full p-2 mt-2"
              />
            </div>
            <div className="mt-4">
              <p className="font-bold">Last Name</p>
              <input
                ref={lastNameRef}
                defaultValue={last_name}
                type="text"
                className="border rounded w-full p-2 mt-2"
              />
            </div>
            {/* <div className="mt-4">
              <p className="font-bold">Email Address</p>
              <input
                ref={emailRef}
                defaultValue={email}
                type="email"
                className="border rounded w-full p-2 mt-2"
              />
            </div> */}
            <div className="mt-4">
              <p className="font-bold">Phone Number</p>
              <input
                ref={phoneNumberRef}
                defaultValue={phone_number}
                type="tel"
                className="border rounded w-full p-2 mt-2"
              />
            </div>
            <div className="mt-4">
              <p className="font-bold">Birth Date</p>
              <input
                ref={birthDateRef}
                defaultValue={birth_date}
                type="date"
                className="border rounded w-full p-2 mt-2"
              />
            </div>
          </div>

          <div className="[&>button]:uppercase [&>button]:p-2 [&>button]:w-full [&>button]:border flex flex-col gap-2 mt-8">
            <button
              onClick={updateInformation}
              className="bg-red-900 text-white"
            >
              Save
            </button>
            <button className="border-red-900 text-red-900" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPersonalInformation;
