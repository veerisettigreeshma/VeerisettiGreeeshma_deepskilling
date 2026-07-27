import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './Trainerlist';
import TrainerDetail from './TrainerDetails';
import trainersMock from './TrainersMock';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>My Academy Trainers App</h1>
        
        {/* Navigation Menu */}
        <nav style={{ marginBottom: '20px', fontSize: '18px' }}>
          <Link to="/">Home</Link> | <Link to="/trainers">Show Trainers</Link>
        </nav>

        <hr />

        {/* Dynamic Route View Switcher */}
        <Routes>
          {/* Main redirect to home */}
          <Route path="/" element={<Home />} />
          
          {/* List display */}
          <Route path="/trainers" element={<TrainersList trainers={trainersMock} />} />
          
          {/* Parameter matching route */}
          <Route path="/trainers/:id" element={<TrainerDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;