import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import Card1 from "./Card1";
import Popover from "./Popover";

function Cardlist(props) {

  return (
    <div className="flex flex-row justify-center gap-5 flex-wrap">
      {jobcard.map((job) => (
        <Popover key={job.id} 
          />
      ))}
    </div>
  );
}

export default Popovercontent;
