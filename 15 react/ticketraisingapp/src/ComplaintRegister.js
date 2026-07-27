import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const refNumber = Math.floor(10 + Math.random() * 90);
    alert(
      `Thanks ${employeeName}\nYour Complaint was Submitted\nTransaction ID is: ${refNumber}`
    );
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div>
      <h1 style={{ color: 'red' }}>Register your complaints here!!!</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label>Name:</label></td>
              <td>
                <input
                  type="text"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td><label>Complaint:</label></td>
              <td>
                <textarea
                  value={complaint}
                  onChange={(e) => setComplaint(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;