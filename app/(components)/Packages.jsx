import React from "react";

const Package = ({ price, duration, per }) => {
  return (
    <div className="border border-gray-400 rounded">
      <div className="bg-gray-400 h-8"></div>
      <div className="p-4">
        <p className="uppercase">membership</p>
        <div className="divide-x mt-2 ">
          <span className="pr-2 text-xl">${price}</span>
          <span className="pl-2 text-xl">
            {duration} <span className="text-xs">{per}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

const Packages = () => {
  const packages = [
    { price: 100, duration: 1, per: "month" },
    { price: 30, duration: 1, per: "week" },
    { price: 500, duration: 6, per: "month" },
  ];
  return (
    <div className="mt-8 h-screen flex flex-col justify-center">
      <p className="text-center text-4xl">Our Packages</p>
      <div className="m-4 flex flex-col gap-4">
        {packages.map((item, index) => (
          <Package {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
