import React, { Component } from 'react';

export default class PlayerInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitFromInput = this.handleSubmitFromInput.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmitFromInput(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  }
  render() {
    console.log(this.props);
    return (
      <form className="column" onSubmit={this.handleSubmitFromInput}>
        {/* onSubmit = зачем */}
        <label htmlFor="username">{this.props.label}</label>
        <input
          type="text"
          id="username"
          placeholder="Github user"
          value={this.state.username}
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button className="button" type="submit" disabled={!this.state.username}>
          Submit
        </button>
      </form>
    );
  }
}
