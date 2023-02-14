import React from "react";

const Header = () => {
  return (
    <div className="border-2 border-gray-400">
      <div className="w-[80%] mx-auto py-5 flex justify-between">
        {/* logo */}
        <div>
          <h1 className="font-bold text-[#009C4C] text-xl">Jobelia</h1>
        </div>
        {/* Links */}
        <div className="flex gap-4 text-md text-gray-600 font-regular">
          <a href="#" className="hover:text-[#009C4C]">Find Jobs</a>
          <a href="#">Find Talent</a>
          <a href="#">Upload</a>
          <a href="#">About Us</a>
        </div>
        {/* User */}
        <div>
          <span>UserName</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
