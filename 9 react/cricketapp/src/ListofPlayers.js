import React from 'react';

function ListofPlayers() {
  // Declare an array with 11 players and store details of their names and scores
  const players = [
    { name: 'Sachin', score: 120 },
    { name: 'Dhoni', score: 95 },
    { name: 'Virat', score: 80 },
    { name: 'Rohit', score: 115 },
    { name: 'Rahul', score: 45 },
    { name: 'Shikhar', score: 65 },
    { name: 'Pant', score: 55 },
    { name: 'Hardik', score: 90 },
    { name: 'Jadeja', score: 75 },
    { name: 'Bumrah', score: 10 },
    { name: 'Shami', score: 15 }
  ];

  // Filter the players with scores >= 70 (high scorers) or below 70 as per requirement using arrow functions
  const highScorers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            Player: {player.name} , Score: {player.score}
          </li>
        ))}
      </ul>

      <h2>Players Scored Above 70</h2>
      <ul>
        {highScorers.map((player, index) => (
          <li key={index}>
            Player: {player.name} , Score: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;