import React from 'react';
import './App.css';
import CountPeople from './CountPeople';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Mall Footflow Counter</h1>
        <CountPeople />
      </div>
    );
  }
}

export default App;