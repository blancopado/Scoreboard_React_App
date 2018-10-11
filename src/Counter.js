import React from "react";
import PropTypes from "prop-types";
import "../styles/Counter.css";

var Counter = props => {
  return (
    <div className="counter">
      <button
        className="button"
        onClick={() => {
          props.onChange(props.playerId, -1);
        }}
      >
        <i className="fa fa-minus" />
      </button>
      <div className="counter__score">{props.score}</div>
      <button
        className="button"
        onClick={() => {
          props.onChange(props.playerId, 1);
        }}
      >
        <i className="fa fa-plus" />
      </button>
    </div>
  );
};

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  playerId: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Counter;
