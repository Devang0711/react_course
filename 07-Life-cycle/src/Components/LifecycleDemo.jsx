import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('%c[constructor]', 'color: orange;', 'Component is being constructed');
  }

  componentDidMount() {
    console.log('%c[componentDidMount]', 'color: green;', 'Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('%c[componentDidUpdate]', 'color: blue;', 'Component updated');
  }

  componentWillUnmount() {
    console.log('%c[componentWillUnmount]', 'color: red;', 'Component will unmount');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log('%c[render]', 'color: purple;', 'Component rendering');
    return (
      <div className="bg-white shadow-md rounded-xl p-6 w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Lifecycle Component</h2>
        <p className="text-gray-700 text-lg mb-4">Count: {this.state.count}</p>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={this.increment}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Increment
          </button>
          
          <button
            onClick={this.decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default LifecycleDemo;
