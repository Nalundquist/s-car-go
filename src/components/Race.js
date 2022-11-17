import React from "react";
import PropTypes from "prop-types";

function Race(props){
  return(
    <React.Fragment>
      <h2>{props.raceName}</h2>
      <h3>{props.location}</h3>
    </React.Fragment>
  );
}

Race.propTypes = {
  raceName: PropTypes.string,
  location: PropTypes.string,
  favored: PropTypes.string,
  prize: PropTypes.string,
  ticketsLeft: PropTypes.number
}