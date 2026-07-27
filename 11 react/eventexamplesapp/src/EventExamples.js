import React from 'react';

class EventExamples extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  // Method to increment the value
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  // Method to Say Hello followed by a static message
  sayHello = () => {
    alert("Hello! This is a static message.");
  }

  // The “Increase” button invokes multiple methods
  handleIncreaseClick = () => {
    this.incrementCounter();
    this.sayHello();
  }

  // Method to decrease the value of the counter
  handleDecrementClick = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  // Function which takes an argument
  sayWelcome = (msg) => {
    alert(msg);
  }

  // Synthetic event handler
  handleSyntheticEvent = (e) => {
    alert("I was clicked");
    console.log("Synthetic Event Type:", e.type); // Using synthetic event object
  }

  render() {
    return (
      <div>
        <h2>Event Examples Component</h2>
        <p>Counter Value: {this.state.counter}</p>

        {/* Increase button invokes multiple methods */}
        <button onClick={this.handleIncreaseClick}>Increment</button>

        {/* Decrement button to decrease the value */}
        <button onClick={this.handleDecrementClick}>Decrement</button>

        <br /><br />

        {/* Button which takes “welcome” as an argument */}
        <button onClick={() => this.sayWelcome("welcome")}>Say Welcome</button>

        <br /><br />

        {/* Button which invokes synthetic event and displays message */}
        <button onClick={this.handleSyntheticEvent}>OnPress</button>
      </div>
    );
  }
}

export default EventExamples;