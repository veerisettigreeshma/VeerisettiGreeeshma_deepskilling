import React from 'react';
import './App.css';
import sr from './office.png'; // Import the office space image

function App() {
  // Create an element to display the heading of the page
  const element = "Office Space";

  // Attribute to display the image of the office space
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

  // Create an object of office to display the details like Name, Rent and Address
  const ItemName = { Name: "DBS", Rent: 50000, Address: 'Chennai' };

  // To apply Css, Display the color of the Rent in Red if it’s below 60000 and in Green if it’s above 60000
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      {/* Heading of the page */}
      <h1>{element} , at Affordable Range </h1>

      {/* Office image */}
      {jsxatt}

      {/* Office details */}
      <h1>Name: {ItemName.Name}</h1>
      
      <h3 className={colors[0]}>
        Rent: Rs. {ItemName.Rent}
      </h3>
      
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;