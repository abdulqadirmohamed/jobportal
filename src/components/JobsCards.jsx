import React from "react";

const JobsCards = ({ title, image, location, posted }) => {
  return (
    <div>
      <div className="border-2 border-gray-100 p-6 rounded-md shadow-sm my-4">
        {/* Header */}
        <div className="flex justify-between gap-2">
          <div className="flex gap-3">
            <img className="w-10 h-10 rounded-md" src={image} alt="" />
            <div>
              <h1 className="text-[15px] font-bold text-gray-800">{title}</h1>
              <div className="divive-x-2 divide-red-600">
                <span className="text-gray-500 text-[13px]">Gojek</span>
                <span className="ml-4 bg-[#FFF2E6] text-[#ff8d4b] text-[13px] text-sm font-medium px-2 rounded-full">
                  Full-time
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-[14px] font-medium">{location}</span>
            </div>
            <div className="text-gray-500 text-[14px]">Posted {posted}</div>
          </div>
        </div>
        {/* Body */}
        <div className="mt-4">
          <p className="text-gray-600 text-[15px] w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed
            sunt autem provident ipsum beatae sint nulla neque? Necessitatibus,
            molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobsCards;
