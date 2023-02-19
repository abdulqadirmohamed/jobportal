import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../img/profile.jpg";

const Header = () => {
  // const dataNav = ['Find Jobs', 'Find Talent', 'Upload', 'About Us']
  const [dataNav, setDataNav] = useState([
    { id: 1, title: "Find Jobs", slug: "find-jobs" },
    { id: 2, title: "Find Talent", slug: "find-talent" },
    { id: 3, title: "Upload", slug: "upload" },
    { id: 4, title: "About Us", slug: "about-us" },
  ]);
  return (
    <div className=" bg-white">
      <div className="w-[80%] mx-auto py-5 flex justify-between items-center">
        {/* logo */}
        <div>
          <Link to="/" className="font-bold text-blue-800 text-xl">
            Jobelia
          </Link>
        </div>
        {/* Links */}
        <div className="flex gap-6 text-md text-gray-600 ">
          {dataNav.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.slug}
              href="#"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : undefined
              }
            >
              {nav.title}
            </NavLink>
          ))}
        </div>
        {/* User */}
        <div className="flex flex-row">
            <img
              src={profile}
              className="w-10 rounded-full cursor-pointer"
              alt="abdulqadir"
            />

        </div>
      </div>
    </div>
  );
};

export default Header;
