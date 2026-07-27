import React from 'react';

// Mock data arrays exactly as defined in the document hint
export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11 ', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 }
];

export const courses = [
  { id: 1, cname: 'Angular', date: '4/5/2021' },
  { id: 2, cname: 'React', date: '6/3/20201' }
];

export const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', description: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', description: 'You can install React from npm.' }
];

function Blogger(props) {
  // Element variable for book details exactly from hint layout
  const bookdet = (
    <ul>
      {props.books.map((book) => (
        <div key={book.id}>
          <h3> {book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  // Element variable for course details
  const coursedet = (
    <ul>
      {props.courses.map((course) => (
        <div key={course.id}>
          <h3>{course.cname}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </ul>
  );

  // Element variable for blog details
  const content = (
    <ul>
      {props.blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.description}</p>
        </div>
      ))}
    </ul>
  );

  // Return section matching the structural divs exactly
  return (
    <div>
      <div className="container">
        <div className="mystyle1">
          <h1>Course Details</h1>
          {coursedet}
        </div>
        
        <div className="st2">
          <h1>Book Details</h1>
          {bookdet}
        </div>
        
        <div className="v1">
          <h1>Blog Details</h1>
          {content}
        </div>
      </div>
    </div>
  );
}

export default Blogger;