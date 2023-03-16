import Link from "next/link";
import React from "react";

const Information = ({ name, value }) => (
  <div className="">
    <p className="font-medium text-lg">{name}</p>
    <p className="text-gray-600">{value}</p>
  </div>
);

const page = () => {
  const informations = [
    { name: "Name", value: "michael jackson" },
    { name: "Email", value: "mikkimanhattan@gmail" },
    { name: "Phone Number", value: "08125365368" },
    { name: "Birth Date", value: "1/1/1999" },
  ];
  return (
    <div className="">
      <p className="font-medium text-xl mb-4">Basic Information</p>

      <div className="flex flex-col gap-4">
        {informations.map(({ name, value }) => (
          <Information name={name} value={value} key={name} />
        ))}

        <div className="flex flex-col gap-4">
          <Link className="block underline underline-offset-4" href="">
            Edit Basic Information
          </Link>
          <Link className="block underline underline-offset-4" href="">
            Change Password
          </Link>
        </div>
      </div>

      <p className="my-4 font-medium text-xl">Address</p>

      <p className="my-4">No address provided</p>

      <Link href="/" className="underline underline-offset-4">
        Add Address
      </Link>

      <div className="divide-y mt-8">
        <p className="pb-4 font-medium text-xl">Payment Methods</p>

        <div className="pt-8">
          <button className="uppercase border border-blue-600 text-blue-600 p-2">Add a new card</button>
        </div>
      </div>
    </div>
  );
};

export default page;
