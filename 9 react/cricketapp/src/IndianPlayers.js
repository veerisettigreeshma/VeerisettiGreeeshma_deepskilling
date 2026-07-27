import React from 'react';

function IndianPlayers() {
  // Array of Indian players
  const indianPlayers = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Rahul', 'Jadeja'];

  // Display the Odd Team Player and Even Team players using the Destructuring features
  const [first, second, third, fourth, fifth, sixth] = indianPlayers;
  const oddPlayers = [first, third, fifth];
  const evenPlayers = [second, fourth, sixth];

  // Declare two arrays T20players and RanjiTrophy players
  const T20players = ['Hardik', 'Pant', 'Bumrah'];
  const RanjiTrophyplayers = ['Shami', 'Siraj', 'Iyer'];

  // Merge the two arrays using the Merge feature (Spread Operator)
  const mergedPlayers = [...T20players, ...RanjiTrophyplayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>Merged Players (T20 and Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>
    </div>
  );
}

export default IndianPlayers;