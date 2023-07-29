import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the external CSS file for the login form
 // Import the external CSS file for the background

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace this logic with your actual API call to perform authentication
    // Dummy authentication
    const validUsername = 'atuny0';
    const validPassword = '9uQFF1Lh';

    if (username === validUsername && password === validPassword) {
      // If the login is successful, navigate the user to the profile page
      navigate('/profile');
    } else {
      // Show an error message (replace this with your actual error handling)
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="login-background">
      {/* The login form inside the background div */}
      <div className="login-container">
        <h6> Welcome back👋</h6>
        <h2>Sign in to your accont</h2>
        <div className="input-container">
          <label>Your email</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
