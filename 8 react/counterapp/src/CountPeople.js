import React from 'react';

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    // Use Constructor and state to Store the entrycount and exitcount
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  // Method triggered when Login button is clicked
  UpdateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  // Method triggered when Exit button is clicked
  UpdateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div className="counter-container">
        {/* The component has 2 buttons: Login and Exit */}
        <button className="btn login-btn" onClick={this.UpdateEntry}>
          Login
        </button>
        
        <button className="btn exit-btn" onClick={this.UpdateExit}>
          Exit
        </button>
        
        <div className="display-counts">
          {/* Display the number of people who entered and exited the mall */}
          <p>People Entered: {this.state.entrycount}</p>
          <p>People Exited: {this.state.exitcount}</p>
        </div>
      </div>
    );
  }
}

export default CountPeople;