import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-blue-600/90 fixed w-full overflow-hidden  top-0 px-10 py-5">
        <div className="flex space-x-1 font-bold items-end">
          <img src="/images/govt.png" className="w-5 h-10" />
          <span>
            {" "}
            <span className="text-xs">
              Ministry of Micro, Small and Medium Enterprises
            </span>
          </span>
        </div>
        <ul className="lg:flex  space-x-10 font-bold cursor-pointer hidden ml-auto">
          <li className="group">
            <span>Home</span>
            <div className="group-hover:w-full w-0 transition-all h-1  bg-white rounded-md" />
          </li>
          <li className="group">
            <span>NIC Code</span>
            <div className="group-hover:w-full w-0 transition-all h-1  bg-white rounded-md" />
          </li>
          <li className="group">
            <span>Usefull documents</span>
            <div className="group-hover:w-full w-0 transition-all h-1  bg-white rounded-md" />
          </li>
          <li className="group">
            <span>Print/Verify</span>
            <div className="group-hover:w-full w-0 transition-all h-1  bg-white rounded-md" />
          </li>
          <li className="group">
            <span>Update Details</span>
            <div className="group-hover:w-full w-0 transition-all h-1  bg-white rounded-md" />
          </li>
          <li className="group">
            <span>Login</span>
            <div className="group-hover:w-full w-0 transition-all h-1  bg-white rounded-md" />
          </li>
        </ul>
      </div>
      <div className="p-5 mt-20 bg-[#f2f6f9]  text-center font-medium text-2xl">
        <h1 className="text-[#241b63]  ">
          UDYAM REGISTRATION FORM - For New Enterprise who are not Registered
          yet as MSME
        </h1>
      </div>
    </>
  );
};

export default Navbar;
