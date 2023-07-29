import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './profile.css'; // Import the external CSS file
import './navbar.js'
const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from API using the saved user ID
    if (user && user.id) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          // Assuming the API returns user details in the data object
          // Save user details with all the information in Redux state
          dispatch({ type: 'SET_USER_DETAILS', payload: data });
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [user, dispatch]);

  const handleLogout = () => {
    // Clear user data from Redux store
    dispatch({ type: 'SET_USER_DETAILS', payload: { id: null, username: '', email: '' } });
    // Navigate back to the login page
    navigate('/');
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      {/* Display the user information */}
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Add other user details as needed */}
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
