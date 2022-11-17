import React from "react";
import PropTypes from "prop-types";

function Snail(props){
  return(
    <React.Fragment>
      <h2>{props.name}</h2>
      <h3>{props.shellNumber}</h3>
    </React.Fragment>
  );
}

Snail.propTypes = {
  name: PropTypes.string,
  hometown: PropTypes.string,
  topSpeed: PropTypes.string,
  trophies: PropTypes.string,
  shellNumber: PropTypes.number,
  hobby: PropTypes.string
}