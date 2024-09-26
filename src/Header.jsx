import React from "react";

function Header(data) {
  return (
    <div data={data} className=" bg-gray-200 sticky top-0   h shadow-lg p-3">
      <div className="  text-center ">
      
        <a className="text-3xl font-extrabold text-center">
        
        Cape Jobs</a>
       
      </div>
    </div>
  );
}

export default Header;
