import React from 'react';
import { useParams } from 'react-router-dom';
import trainersMock from './TrainersMock';

function TrainerDetail() {
  // Retrieve the trainerId parameter from the URL
  const { id } = useParams();

  // Find the trainer from mockup database matching this id
  const trainer = trainersMock.find(t => t.trainerId === id);

  if (!trainer) {
    return <h3>Trainer details not found!</h3>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Trainers Details</h2>
      <h3>{trainer.name} ({trainer.technology})</h3>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>
      <ul>
        {trainer.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerDetail;