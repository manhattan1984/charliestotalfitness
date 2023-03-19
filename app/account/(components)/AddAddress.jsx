"use client";
import React, { useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useSupabase } from "@/components/supabase-provider";
import { toast, Toaster } from "react-hot-toast";

const AddAddress = ({ onClose, profile_id }) => {
  const { supabase } = useSupabase();

  const countryRef = useRef();
  const addressRef = useRef();
  const apartmentRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipcodeRef = useRef();

  const addAddress = async () => {
    const country = countryRef.current.value;
    const address = addressRef.current.value;
    const apartment = apartmentRef.current.value;
    const city = cityRef.current.value;
    const zipcode = zipcodeRef.current.value;
    const state = stateRef.current.value;

    const {
      data: { id: address_id },
      error,
    } = await supabase
      .from("address")
      .insert([{ country, address, apartment, city, zipcode, state }])
      .select()
      .single();

    const { data, error: user_addressError } = await supabase
      .from("user_address")
      .upsert({ user_id: profile_id, address_id, is_default: true });

    if (!(error && user_addressError)) {
      toast.success("Added Address Successfully");
      close();
      return;
    }

    console.log("error", error);
    console.log("addAddressError", user_addressError);
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
          <p className="text-2xl font-bold">Add Address</p>
          <div className="flex flex-col gap-4">
            <div className="mt-4">
              <p className="font-bold">Country</p>
              <input
                ref={countryRef}
                type="text"
                className="border rounded w-full p-2 mt-2"
              />
            </div>
            <div className="mt-4">
              <p className="font-bold">Address</p>
              <input
                ref={addressRef}
                type="text"
                className="border rounded w-full p-2 mt-2"
              />
            </div>
            <div className="mt-4">
              <p className="font-bold">Apartment, Suite, etc.</p>
              <input
                ref={apartmentRef}
                type="email"
                className="border rounded w-full p-2 mt-2"
              />
            </div>
            <div className="mt-4">
              <p className="font-bold">City</p>
              <input
                ref={cityRef}
                type="tel"
                className="border rounded w-full p-2 mt-2"
              />
            </div>
            <div className="mt-4">
              <p className="font-bold">State</p>
              <input
                ref={stateRef}
                type="text"
                className="border rounded w-full p-2 mt-2"
              />
            </div>
            <div className="mt-4">
              <p className="font-bold">ZIP Code</p>
              <input
                ref={zipcodeRef}
                type="text"
                className="border rounded w-full p-2 mt-2"
              />
            </div>
          </div>

          <div className="[&>button]:uppercase [&>button]:p-2 [&>button]:w-full [&>button]:border flex flex-col gap-2 mt-8">
            <button onClick={addAddress} className="bg-red-900 text-white">
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

export default AddAddress;
