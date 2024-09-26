import PropTypes from "prop-types";
import { useState } from "react";
import { textConstants } from "./constants/constants";
import TextCard from "./popover/textCard";
import TittleCard from "./popover/TittleCard";
import React from "react";

function Popover({ trigger, children, setTrigger,job  }) {
  
  return trigger ? (
    <div className=" bg-opacity-25  bg-black inline-block justify-center   ">
      <div className=" m-auto  text    bg-white  fixed top-4 rounded-md overflow-scroll w-3/4  h-  bg inset-0 bg-op  justify-center items-center  ">
        <h1 className=" h-12 shadow-md pt-3 font-bold text-center text-2xl">
          {job.title}
        </h1>

        <br></br>

        <TextCard left={job.location} right={job.contract} />
        <TextCard left="" right={job.payrate} />
        <TextCard left={job.techstack} />
        <hr className="h-px w-5/6 m-auto my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <TittleCard tittle={job.title} />

        <p className="pl-20 mt-2">{job.description}</p>
        <hr className="h-px w-5/6 m-auto my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <br></br>
        <h2 className=" pl-20 text-xl font-semibold">Requirements</h2>
        <p className=" pl-20 ">
          Job Requirements
          <li>degree</li>
          <li>4 years experience</li>
          <li>age</li>
          <li>gender</li>
          <br></br>
          <hr className="h-px w-5/6 m-auto my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </p>
        <button className=" flex  m-auto focus: bg-slate-600 rounded-sm">
          Apply
        </button>
        <button
          className=" absolute  bottom-auto right-3"
          onClick={() => setTrigger(false)}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <button
          className=" absolute  top-0 right-0 text-lg "
          onClick={() => setTrigger(false)}
        >
          <ion-icon name="close"></ion-icon>
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
}

Popover.propTypes = {
  trigger: PropTypes.bool,
  children: PropTypes.any,
  setTrigger: PropTypes.func,
  job: PropTypes.any,
  props:PropTypes.any,
};

export default Popover;
