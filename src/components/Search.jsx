import React from "react";

const Search = () => {
  return (
    <div className="border-[1px] text-gray-500 border-gray-300 rounded-md p-2 flex justify-between items-center">
      <div className="flex">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search job title or keyword"
          className="w-full sm:w-80 outline-none px-3"
        />
      </div>

      <div className="flex">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Country or timezone"
          className="w-full sm:w-80 outline-none px-3"
        />
      </div>
      <div>
        <button className="bg-[#5650E8] text-white py-2 px-4 rounded-md">
         Find Jobs
        </button>
      </div>
    </div>
  );
};

export default Search;
