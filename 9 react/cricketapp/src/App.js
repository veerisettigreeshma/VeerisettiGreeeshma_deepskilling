import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  // Change to true or false to switch components display
  const flag = true; 

  if (flag) {
    return (
      <div>
        <h1>Cricket Application</h1>
        <ListofPlayers />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Cricket Application</h1>
        <IndianPlayers />
      </div>
    );
  }
}

export default App;