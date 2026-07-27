import React from 'react';
import { Link } from 'react-router-dom';

function TrainersList({ trainers }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Trainers List</h2>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.trainerId} style={{ margin: '8px 0' }}>
            {/* Navigates dynamically passing the ID in path */}
            <Link to={`/trainers/${trainer.trainerId}`} style={{ fontSize: '18px' }}>
              {trainer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainersList;