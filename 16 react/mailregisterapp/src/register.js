import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const validateField = (field, value) => {
    let message = '';

    if (field === 'name') {
      if (value.length < 5) {
        message = 'Name should have at least 5 characters';
      }
    }

    if (field === 'email') {
      if (!value.includes('@') || !value.includes('.')) {
        message = 'Email should contain @ and .';
      }
    }

    if (field === 'password') {
      if (value.length < 8) {
        message = 'Password should have at least 8 characters';
      }
    }

    return message;
  };

  const handleChange = (event) => {
    const { name: field, value } = event.target;

    if (field === 'name') setName(value);
    if (field === 'email') setEmail(value);
    if (field === 'password') setPassword(value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: validateField(field, value)
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameError = validateField('name', name);
    const emailError = validateField('email', email);
    const passwordError = validateField('password', password);

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError
    });

    if (!nameError && !emailError && !passwordError) {
      alert(`Registration successful!\nWelcome, ${name}`);
      setName('');
      setEmail('');
      setPassword('');
      setErrors({ name: '', email: '', password: '' });
    }
  };

  return (
    <div>
      <h1 style={{ color: 'red' }}>Register here!!!</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label>Name:</label></td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </td>
              <td style={{ color: 'red' }}>{errors.name}</td>
            </tr>
            <tr>
              <td><label>Email:</label></td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </td>
              <td style={{ color: 'red' }}>{errors.email}</td>
            </tr>
            <tr>
              <td><label>Password:</label></td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </td>
              <td style={{ color: 'red' }}>{errors.password}</td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;