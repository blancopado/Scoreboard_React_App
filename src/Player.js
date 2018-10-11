import React from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import "../styles/Button.css";
import "../styles/Player.css";

var Player = ({ player, onScoreChange, onRemove }) => {
  return (
    <div className="player">
      <button
        className="button button--remove"
        onClick={() => {
          onRemove(player.id);
        }}
      >
        <i className="fa fa-close" />
      </button>
      <div className="player__name">{player.name}</div>

      <Counter
        score={player.score}
        playerId={player.id}
        onChange={onScoreChange}
      />
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Player;
