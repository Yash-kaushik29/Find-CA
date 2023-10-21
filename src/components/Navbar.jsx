import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {

  return (
    <div className="h-[55px] flex justify-between items-center p-5">
      {/* Left Section (Logo and Navigation Links) */}
      <div className="flex flex-row lg:space-y-0 md:space-x-6 lg:space-x-5 items-center mb-2 lg:mb-0 lg:ml-12">
        <div>
          <img src="/images/logo.png" alt="logo" className="mt-2 mr-4"/>
        </div>
        <div className="flex justify-between gap-3 lg:gap-7 max-lg:hidden">
            <div className="flex flex-row mt-1">
              <h2 className="text-xl font-bold mr-2">Solutions</h2>
              <ArrowDropDownIcon className="mt-1 mr-1" />
            </div>
            <div className="flex flex-row mt-1">
              <h2 className="text-xl font-bold mr-2">Features</h2>
              <ArrowDropDownIcon className="mt-1 mr-1" />
            </div>
            <div className="flex flex-row mt-1">
              <h2 className="text-xl font-bold mr-2">Blogs</h2>
            </div>
            <div className="flex flex-row mt-1">
              <h2 className="text-xl font-bold mr-2">About</h2>
              <ArrowDropDownIcon className="mt-1 mr-1" />
            </div>
          </div>
      </div>

      {/* Right Section (Login and Register Buttons) */}
      <div className="flex flex-row space-x-2 lg:mr-12">
        <button className="text-blue-500 text-lg font-semibold border-2 border-blue-500 px-3 py-1 rounded-lg">
          Login
        </button>
        <button className="text-white text-lg font-semibold border-2 bg-blue-500 px-3 py-1 rounded-lg">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
