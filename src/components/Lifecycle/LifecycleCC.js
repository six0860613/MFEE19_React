import React, { Component } from 'react';

class LifecycleCC extends Component {
  constructor() {
    super();
    this.state = { total: 0 };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <>
        <div className="container">
          <h1
            onClick={() => {
              this.setState({ total: this.state.total + 1 });
            }}
          >
            {this.state.total}
          </h1>
        </div>
      </>
    );
  }
}

export default LifecycleCC;
