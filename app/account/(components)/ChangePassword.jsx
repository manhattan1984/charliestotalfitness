"use client";
import React, { useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useSupabase } from "@/components/supabase-provider";
import { toast, Toaster } from "react-hot-toast";

const ChangePassword = ({ onClose }) => {
  const { supabase } = useSupabase();

  const passwordRef = useRef();

  const updatePassword = async () => {
    const { data, error } = await supabase.auth.updateUser({
      password: passwordRef.current.value.trim(),
    });

    if (!error) {
      toast.success("Password Change Successful");
      return;
    }
    toast.error("error");
    console.log("error", error);
  };
  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center bg-white min-h-screen">
        <div className="border p-8">
          <div className="flex mb-4">
            <XMarkIcon
              onClick={onClose}
              className="h-7 w-7 ml-auto cursor-pointer"
            />
          </div>
          <p className="text-2xl font-bold">Change Your Password</p>
          <div className="flex flex-col gap-4">
            <div className="mt-4">
              <p className="font-bold">New Password</p>
              <input
                ref={passwordRef}
                type="email"
                className="border rounded w-full p-2 mt-2"
              />
            </div>
          </div>

          <div className="[&>button]:uppercase [&>button]:p-2 [&>button]:w-full [&>button]:border flex flex-col gap-2 mt-8">
            <button className="bg-blue-600 text-white" onClick={updatePassword}>
              Save
            </button>
            <button className="border-blue-600 text-blue-600" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
