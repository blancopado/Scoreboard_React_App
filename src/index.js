import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import Heading from "./Heading";
import Players from "./Players";
import AddPlayerForm from "./AddPlayerForm";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.players
    };
  } // same thing -> state = {players: this.props.players};

  static defaultProps = {
    players: []
  };

  onScoreChange(id, delta) {
    var newStateArray = this.state.players.map(function(player) {
      if (player.id === id) {
        delta > 0 ? (player.score += 1) : (player.score -= 1);
        return player;
      }
      return player;
    });
    this.setState({ players: newStateArray });
  }

  onPlayerAdd(name) {
    var playersArray = this.state.players;
    var newPlayer = {
      id: Date.now(),
      name: name,
      score: 0
    };
    playersArray.push(newPlayer);
    this.setState({ players: playersArray });
  }

  onRemovePlayer(id) {
    var playersArray = this.state.players.filter(function(player) {
      if (player.id !== id) {
        return player;
      }
    });
    this.setState({ players: playersArray });
  }

  render() {
    return (
      <div className="scoreboard">
        <Heading title="Scoreboard" players={this.state.players} />

        <Players
          players={this.state.players}
          onScoreChange={this.onScoreChange.bind(this)}
          onRemovePlayer={this.onRemovePlayer.bind(this)}
        />

        <AddPlayerForm onAdd={this.onPlayerAdd.bind(this)} />
      </div>
    );
  }
}

App.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired
    })
  ).isRequired
};

render(<App />, document.getElementById("root"));
