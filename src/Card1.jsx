import React from "react";
import Popover from "./Popover";

import { useEffect, useState } from "react";

function Card1(props) {
  const { job } = props;
  const [buttonPopover, setButtonPopover] = useState(false);

  return (
    <div className="mt-3  ">
      <div className=" p-4    shadow-2xl  w-60    rounded-md bg-slate-200  ">
        <div>
          <div className=" bg-cyan-700 text-center text-xs font rounded-full h-10  w-10 font-extrabold text-white p-1 m-auto top-2   ">
            Cape Jobs
          </div>
          <h2 className=" text-center font-bold">{job.title}</h2>
          <h4>{job.location}</h4>
          <h4>🏢 {job.industry}</h4>
          <br></br>
          <h2 className=" ">Contract: {job.contract}</h2>
          <h5>Salary:{job.payrate}</h5>
          <h5 className=" ">Company: {job.companyname}</h5>
          <br></br>
          <h5 className="text-center text-black text-xs #02BC77">
            Posted on: {job.created_at}
          </h5>
          <button
            onClick={() => setButtonPopover(true)}
            className=" rounded-md bg-cyan-700 pl-12 pr-12 text-center  text-white"
          >
            Job Details <ion-icon name="arrow-forward-outline"></ion-icon>
            {"  "}
          </button>
        </div>
      </div>

      <Popover
        className=""
        trigger={buttonPopover}
        setTrigger={setButtonPopover}
        key={job.id}
        job={job}
      />
    </div>
  );
}

export default Card1;
