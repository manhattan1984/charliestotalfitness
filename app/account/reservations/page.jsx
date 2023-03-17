import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="divide-y">
        <p className="pb-4 font-bold text-2xl">Upcoming Reservations</p>
        <div className="pt-8">
          <p className="text-center text-sm font-medium text-gray-600">
            You don&rsquo;t have any upcoming reservations.
          </p>
        </div>
      </div>
      <div className="divide-y">
        <p className="pb-4 font-bold text-2xl">Past Reservations</p>
        <div className="pt-8">
          <p className="text-center text-sm font-medium text-gray-600">
            You don&rsquo;t have any past reservations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
