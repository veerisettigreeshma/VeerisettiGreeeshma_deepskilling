import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import ThemeContext from './ThemeContext';

const employees = [
  { id: 1, name: 'Alice Johnson', role: 'Frontend Developer' },
  { id: 2, name: 'Brian Smith', role: 'Backend Developer' },
  { id: 3, name: 'Carla Diaz', role: 'UI/UX Designer' }
];

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <h1>Employee Management</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <EmployeeList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;