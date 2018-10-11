import React from "react";
import PropTypes from "prop-types";
import "../styles/Form.css";

class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: "" });
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            className="form__input"
            value={this.state.name}
            onChange={this.onNameChange.bind(this)}
            placeholder="Add a new player"
            required
          />
          <input
            className="button form__button"
            type="submit"
            value="Add player"
          />
        </form>
      </div>
    );
  }
}

AddPlayerForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddPlayerForm;
