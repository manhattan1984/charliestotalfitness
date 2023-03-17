import React from "react";
import Navbar from "./(components)/Navbar";
const layout = ({ children }) => {
  return (
    <div className="my-14 mx-4">
      <p className="text-4xl mb-8 pt-10">Account</p>
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
};

export default layout;
