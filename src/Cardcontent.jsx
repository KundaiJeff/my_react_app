import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Card1 from "./Card1";

const supabase = createClient(
  import.meta.env.VITE_URL,
  import.meta.env.VITE_KEY,
);
function Cardcontent() {
  const [jobcard, setJobcard] = useState([]);

  useEffect(() => {
    getJobcard();
  }, []);

  async function getJobcard() {
    const { data, error } = await supabase.from("jobcard").select("*");

    if (error) {
      console.log({ error });
    }
    console.log({ data });
    setJobcard(data);
  }

  return (
    <div className="  flex flex-row flex-wrap place-content-around ">
      {jobcard.map((job) => (
        <Card1 className="" key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Cardcontent;
