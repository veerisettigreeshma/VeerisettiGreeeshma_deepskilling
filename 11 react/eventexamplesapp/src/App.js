import React from 'react';
import EventExamples from './EventExamples';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React Event Handling Application</h1>
      <hr />
      <EventExamples />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;