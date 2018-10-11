import React from "react";
import PropTypes from "prop-types";
import Player from "./Player";
import "../styles/Player.css";

var Players = ({ players, onScoreChange, onRemovePlayer }) => {
  return (
    <div className="players">
      {players.map(function(player, index) {
        return (
          <Player
            key={player.id}
            player={player}
            onScoreChange={onScoreChange}
            onRemove={onRemovePlayer}
          />
        );
      })}
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired
    })
  ).isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onRemovePlayer: PropTypes.func.isRequired
};

export default Players;
