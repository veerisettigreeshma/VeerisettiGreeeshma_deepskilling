import React from 'react';
import './App.css';
import Blogger, { books, courses, blogs } from './Blogger';

function App() {
  return (
    <div>
      <Blogger books={books} courses={courses} blogs={blogs} />
    </div>
  );
}

export default App;