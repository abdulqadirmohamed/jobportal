import React from "react";
import FilterData from "./FilterData";
import Jobs from "./Jobs";
import Search from "./Search";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="w-[80%] mx-auto py-5 grid grid-cols-4 gap-4">
        {/* Side */}
        <div className="col-span-1 border-2 border-gray-100 p-4 rounded-md">
          <FilterData/>
        </div>
        {/* Body */}
        <div className="col-span-3 w-full">
          <Search/>
          <div className="my-4">
              <h1>255 Jobs result</h1>  
          </div>
          <Jobs/>
        </div>
      </div>
    </div>
  );
};

export default Home;
