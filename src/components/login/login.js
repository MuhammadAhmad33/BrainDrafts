
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './styles.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/notes/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        
      });
      console.log(response)

      if (response.ok) {
        console.log('logged');

        const data = await response.json();
        // Store token and user information in localStorage
        localStorage.setItem('token', data.access_token);
        // localStorage.setItem('userId', data.userId);
        // localStorage.setItem('username', data.username);

        // Navigate to the home page or another route
        navigate('/dashboard'); // Adjust the route as needed
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
    <section className='main'>
    <div className="center">
      <h1>Login</h1>
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
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          Not a member? <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
    </section>
  );
};

export default Login;
