import Header from "./components/header/Header";
import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { FormElement } from "./components/form-element/form-element";

const supabase = createClient(
  "https://qtxojnbjuzylbhuvrvjx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0eG9qbmJqdXp5bGJodXZydmp4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjEzNjcwMywiZXhwIjoyMDQxNzEyNzAzfQ.xMACtliGvNeOB0FrGFARnIa516bntssz8vaUQSTuRd8"
);
const formItems = [
  { label: "Job Title", name: "title" },
  { label: "Job location", name: "location" },
  { label: "Job description", name: "description" },
  { label: "Pay Rate", name: "payrate" },
  { label: "Tech Stack", name: "techstake" },
  { label: "Industry", name: "industry" },
  { label: "Contract type", name: "contract" },
  { label: "Company name", name: "companyname" },
];
function Form() {
  const [uploadpost, setUploadpost] = useState({
    title: "",
    location: "",
    contract: "",
    payrate: "",
    techstake: "",
    industry: "",
    description: "",
    companyname: "",
  });

  const handleInput = (e) => {
    e.persist();
    setUploadpost({ ...uploadpost, [e.target.name]: e.target.value });
  };

  const Uploadpost = async (contact) => {
    const { data, error } = await supabase.from("jobcard").insert(Uploadpost);
    if (error) {
      console.log({ error });
    }
    return data;
  };

  return (
    <>
      <Header />
      <div className=" flex-wrap place-content-around p-8 ">
        <form
          className=" bg-cyan-700  place-content-around   p-4 rounded-md   "
          onSubmit={uploadpost}
        >
          <div className="">
            {formItems.map((formItem, index) => {
              return (
                <FormElement
                  key={index}
                  label={formItem.label}
                  name={formItem.name}
                  handleInput={handleInput}
                  value={uploadpost[formItem.name]}
                />
              );
            })}

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 block text-gray-500 font-bold"></label>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow  hover: bg-slate-100 focus:shadow-outline focus:outline- text- font-bold py-2 px-4 rounded"
                  type="Submit"
                  // onClick={Uploadpost}
                >
                  Post Job
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
