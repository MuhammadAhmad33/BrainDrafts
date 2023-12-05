import React, { useState } from 'react';
import './styles.css'; // Import your CSS file
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send signup data to the server
    try {
      const response = await fetch('http://localhost:3001/notes/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password,email}),
        
      });
      console.log(response)
      if (response.ok) {
        console.log('logged');

        const data = await response.json();
        console.log(data)
        // Store token and user information in localStorage
        if (data.access_token) {
          // Store token and user information in localStorage
          localStorage.setItem('token', data.access_token);
          // localStorage.setItem('userId', data.id);
        // localStorage.setItem('username', data.username);

        // Navigate to the home page or another route
        navigate('/dashboard');} // Adjust the route as needed
        window.location.reload();

      } else {
        // Handle authentication error
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  

  return (
    <div className="center">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <input
            type="text"
            required
            value={username}
            onChange={handleUsernameChange}
          />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field">
          <input
            type="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <span></span>
          <label>Email</label>
        </div>
        <input type="submit" value="Signup" />
        <div className="signup_link">
          Already a member? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
