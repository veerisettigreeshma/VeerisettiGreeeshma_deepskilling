import React from 'react';

class CurrencyConvertor extends React.Component {
  constructor() {
    super();
    this.state = {
      rupees: '',
      euros: 0
    };
  }

  handleInputChange = (e) => {
    this.setState({ rupees: e.target.value });
  }

  // Handle the Click event of the button to invoke the handleSubmit event
  handleSubmit = (e) => {
    e.preventDefault();
    // Conversion rate: 1 INR = 0.011 Euro (approximate standard value)
    const convertedValue = parseFloat(this.state.rupees) * 0.011;
    this.setState({
      euros: isNaN(convertedValue) ? 0 : convertedValue.toFixed(2)
    });
  }

  render() {
    return (
      <div>
        <h2>CurrencyConvertor Component</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Indian Rupees: </label>
          <input 
            type="number" 
            value={this.state.rupees} 
            onChange={this.handleInputChange} 
            placeholder="Enter Amount in Rupees"
          />
          <button type="submit">Convert</button>
        </form>
        <h3>Amount in Euro: {this.state.euros}</h3>
      </div>
    );
  }
}

export default CurrencyConvertor;