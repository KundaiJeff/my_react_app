import React from "react";

function SearchFilters() {
  return (
    <div className=" mt-4 flex flex-row flex-wrap place-content-around">
      <input
        className=" h- text-center rounded-md border-2"
        type="Onsubmit"
        id="myInput"
        onKeyUp="myFunction()"
        placeholder="Contract Type"
      ></input>
      <input
        className=" h-10 text-center rounded-md border-2 "
        type="text"
        id="myInput"
        onKeyUp="myFunction()"
        placeholder="Job Industry"
      ></input>
      <input
        className=" h-10 text-center rounded-md border-2"
        type="text"
        id="myInput"
        onKeyUp="myFunction()"
        placeholder="Location"
      ></input>
    </div>
  );
}

export default SearchFilters;
