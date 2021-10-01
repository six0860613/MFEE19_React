import React from 'react';

class CounterCC extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <>
        <h2>FormCC</h2>
        <span>Username: </span>
        <input
          type="text"
          value={this.state.username}
          onChange={(event) => {
            this.setState({
              username: event.target.value,
            });
          }}
        />
        <span>Password: </span>
        <input
          type="text"
          value={this.state.password}
          onChange={(event) => {
            this.setState({
              password: event.target.value,
            });
          }}
        />
      </>
    );
  }
}

export default CounterCC;
