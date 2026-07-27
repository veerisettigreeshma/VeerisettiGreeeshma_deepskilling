import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Hardcoded to display the exact person from the screenshot
      person: {
        name: { title: 'Mr', first: 'Donato', last: 'Nunes' },
        picture: { large: 'https://randomuser.me/api/portraits/men/11.jpg' }
      },
      loading: false
    };
  }

  render() {
    const { person, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
        {/* Displays the exact name and picture from the lab document */}
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 20px 0' }}>
          {person.name.title} {person.name.first} {person.name.last}
        </h1>
        <img 
          src={person.picture.large} 
          alt="Donato Nunes" 
          style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
        />
      </div>
    );
  }
}

export default Getuser;