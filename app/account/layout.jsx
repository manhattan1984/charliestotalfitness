import React from "react";

const layout = ({ children }) => {
  return (
    <div className="my-14 mx-4">
      <p className="text-4xl mb-8 pt-10">Account</p>
      <div className="">{children}</div>

    </div>
  );
};

export default layout;
