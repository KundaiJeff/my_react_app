import React from "react";
import PropTypes from "prop-types";

const TextCard = ({ left, right }) => {
  return (
    <div className="flex  pl-20 mb-3">
      <h2 className="flex-1 ">{left}</h2>
      <h2  className="flex-1">{right??''}</h2> 
    </div>
  );
};

TextCard.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string,
};

export default TextCard;
