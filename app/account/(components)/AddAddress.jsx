import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const AddAddress = ({ onClose }) => {
  return (
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
            <input type="text" className="border rounded w-full p-2 mt-2" />
          </div>
          <div className="mt-4">
            <p className="font-bold">Address</p>
            <input type="text" className="border rounded w-full p-2 mt-2" />
          </div>
          <div className="mt-4">
            <p className="font-bold">Apartment, Suite, etc.</p>
            <input type="email" className="border rounded w-full p-2 mt-2" />
          </div>
          <div className="mt-4">
            <p className="font-bold">City</p>
            <input type="tel" className="border rounded w-full p-2 mt-2" />
          </div>
          <div className="mt-4">
            <p className="font-bold">State</p>
            <input type="text" className="border rounded w-full p-2 mt-2" />
          </div>
          <div className="mt-4">
            <p className="font-bold">ZIP Code</p>
            <input type="text" className="border rounded w-full p-2 mt-2" />
          </div>
        </div>

        <div className="[&>button]:uppercase [&>button]:p-2 [&>button]:w-full [&>button]:border flex flex-col gap-2 mt-8">
          <button className="bg-blue-600 text-white">Save</button>
          <button className="border-blue-600 text-blue-600" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
