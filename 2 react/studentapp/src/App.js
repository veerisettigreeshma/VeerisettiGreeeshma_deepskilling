import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className="App" style={{ width: '80%', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Student Management Portal</h1>
      <hr />
      {/* Invoking the components */}
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;