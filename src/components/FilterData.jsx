import React from "react";

const FilterData = () => {
  return (
    <div>
      <div className="flex justify-between m-2">
        <h4>Filter</h4>
        <button>Clear</button>
      </div>
      <hr />
      <div className="my-6">
        <h1 className="font-medium">Job Type</h1>
        <div className="m-2">
          <div className="my-2 flex justify-between">
            <div>
              <input type="checkbox" />
              <label htmlFor="" className="ml-2">
                Full-time
              </label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="" className="ml-2">
                Intership
              </label>
            </div>
          </div>
          <div className="my-2 flex justify-between">
            <div>
              <input type="checkbox" />
              <label htmlFor="" className="ml-2">
                Freelance
              </label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="" className="ml-2">
                Volunter
              </label>
            </div>
          </div>
        
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FilterData;
