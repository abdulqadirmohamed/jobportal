import React from "react";

const FilterData = () => {
  return (
    <div>
      <div className="flex justify-between m-2">
        <h4>Filter</h4>
        <h4>Clear All</h4>
      </div>
      <hr />
      <div className="my-4">
        Date Post
        <div className="my-2">
          <select name="" id="">
            <option value="">Any Time</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterData;
