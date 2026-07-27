import React from 'react';
import styles from './CohortDetails.module.css'; // Importing the CSS Module 

function CohortDetails({ cohort }) {
  // Use "green" color font when cohort status is "ongoing" and "blue" color in all other scenarios 
  const headingStyle = {
    color: cohort.status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}> {/* Apply the box class to the container div  */}
      <h3 style={headingStyle}>
        {cohort.code} - {cohort.title}
      </h3>
      
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>
        
        <dt>Current Status</dt>
        <dd>{cohort.status}</dd>
        
        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>
        
        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;