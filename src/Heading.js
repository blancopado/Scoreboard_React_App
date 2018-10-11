import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import "../styles/Heading.css";

var Heading = ({ title, players }) => {
  return (
    <div className="heading">
      <h2 className="heading__title">{title}</h2>
      <Stats players={players} />{" "}
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};

export default Heading;
