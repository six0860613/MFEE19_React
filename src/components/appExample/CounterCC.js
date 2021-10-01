import React from 'react';

class CounterCC extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          type="button"
          id="plus"
          onClick={() => {
            this.setState({
              total: this.state.total + 1,
            });
          }}
        >
          +
        </button>
        <button
          type="button"
          id="minus"
          onClick={() => {
            this.setState({
              total: this.state.total - 1,
            });
          }}
        >
          -
        </button>
      </>
    );
  }
}

export default CounterCC;
