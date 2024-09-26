import React from "react";
import PropTypes from "prop-types";

const TittleCard = ({ tittle }) => {
  return (
    <div className="">
 
      <h1 className="pl-20 font-semibold text-xl ">{tittle}</h1>
    </div>
  );
};

TittleCard.propTypes = {
  tittle: PropTypes.string.isRequired,
 
};

export default TittleCard;
