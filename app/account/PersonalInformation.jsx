"use client";
import Link from "next/link";
import React, { useState } from "react";
import EditPersonalInformation from "./(components)/EditPersonalInformation";
import ChangePassword from "./(components)/ChangePassword";
import AddAddress from "./(components)/AddAddress";
import Modal from "./(components)/Modal";

const Information = ({ name, value }) => (
  <div className="">
    <p className="font-medium text-lg">{name}</p>
    <p className="text-gray-600">{value}</p>
  </div>
);

const PersonalInformation = () => {
  const [editInfoOpen, setEditInfoOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [addAddressOpen, setaddAddressOpen] = useState(false);

  const handleEditOpen = () => setEditInfoOpen(!editInfoOpen);
  const handlePasswordOpen = () => setChangePasswordOpen(!changePasswordOpen);
  const handleAddressOpen = () => setaddAddressOpen(!addAddressOpen);

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

        <div className="flex flex-col gap-2 items-start">
          <button
            onClick={handleEditOpen}
            className="underline underline-offset-4"
          >
            Edit Basic Information
          </button>
          <button
            onClick={handlePasswordOpen}
            className="underline underline-offset-4"
          >
            Change Password
          </button>
        </div>
      </div>

      <Modal onClose={handleEditOpen} show={editInfoOpen}>
        <EditPersonalInformation onClose={handleEditOpen} />
      </Modal>

      <Modal onClose={handlePasswordOpen} show={changePasswordOpen}>
        <ChangePassword onClose={handlePasswordOpen} />
      </Modal>

      <Modal onClose={handleAddressOpen} show={addAddressOpen}>
        <AddAddress onClose={handleAddressOpen} />
      </Modal>

      <p className="my-4 font-medium text-xl">Address</p>

      <p className="my-4">No address provided</p>

      <button onClick={handleAddressOpen} className="underline underline-offset-4">
        Add Address
      </button>

      <div className="divide-y mt-8">
        <p className="pb-4 font-medium text-xl">Payment Methods</p>

        <div className="pt-8">
          <button className="uppercase border border-blue-600 text-blue-600 p-2">
            Add a new card
          </button>
        </div>
      </div>

    </div>
  );
};

export default PersonalInformation;
