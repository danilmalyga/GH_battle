import React, { Component, Fragment } from 'react';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

export default class Battle extends Component {
  constructor() {
    super();
    this.state = {
      playerOneImage: null,
      playerTwoImage: null,
      playerOneName: '',
      playerTwoName: '',
    };
    this.handleSubmitFromBattle = this.handleSubmitFromBattle.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(id) {
    this.setState({
      [id + 'Name']: '',
      [id + 'Image']: null,
    });
  }

  handleSubmitFromBattle(id, username) {
    this.setState({ [id + 'Image']: 'https://github.com/' + username + '.png?size=200' });
  }
  render() {
    return (
      <div className="row">
        {!this.state.playerOneImage ? (
          <PlayerInput id="playerOne" label="Player One" onSubmit={this.handleSubmitFromBattle} />
        ) : (
          <PlayerPreview avatar={this.state.playerOneImage} username={this.state.playerOneName}>
            <button className="reset" onClick={this.handleReset.bind(this, 'playerOne')}>
              Reset
            </button>
          </PlayerPreview>
        )}

        {!this.state.playerTwoImage ? (
          <PlayerInput id="playerTwo" label="Player Two" onSubmit={this.handleSubmitFromBattle} />
        ) : (
          <PlayerPreview avatar={this.state.playerTwoImage} username={this.state.playerTwoName}>
            <button className="reset" onClick={this.handleReset.bind(this, 'playerTwo')}>
              Reset
            </button>
          </PlayerPreview>
        )}
      </div>
    );
  }
}
