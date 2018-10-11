import React from "react";
import PropTypes from "prop-types";
import "../styles/Stats.css";

var Stats = ({ players }) => {
  var totalPlayers = players.length;
  var totalPoints = players.reduce(function(total, player) {
    return total + player.score;
  }, 0);

  return (
    <div className="stats">
      <table>
        <tbody>
          <tr>
            <td className="stats__title">Total players:</td>
            <td className="stats__result">{totalPlayers}</td>
          </tr>
          <tr>
            <td className="stats__title">Total points:</td>
            <td className="stats__result">{totalPoints}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Stats.propTypes = {
  players: PropTypes.array.isRequired
};

export default Stats;
