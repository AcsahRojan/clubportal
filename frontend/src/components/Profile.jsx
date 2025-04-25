
import React, { useEffect, useState } from 'react';
import { Box} from '@mui/material';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    const regno = localStorage.getItem('userRegno');
    const contact = localStorage.getItem('userContact');
    // const clubs = JSON.parse(localStorage.getItem('userClubs') || '[]');


    const role = localStorage.getItem('userRole');

    // Set user data to state
    setUser({
      name,
      email,
      regno,
      contact,
      // clubs,
      role,
    });
  }, []);



  return (
    <>
    {user&&(
     <div className='profile-container' id="body">
      <div className="profile-card">

        {/* Left Panel */}
        <div className="profile-left">
          <img
            src="https://www.mgp.net.au/wp-content/uploads/2023/05/150-1503945_transparent-user-png-default-user-image-png-png.png"
            alt="Profile"
            className="profile-img"
          />
          <h1>{user.name}</h1>
          <h3>{user.role}</h3>
        </div>

        {/* Right Panel */}
        <div className="profile-right">
          <div className="profile-section">
            <h3>Information</h3>
            <div>
              <Box style={{ textAlign: "left" }} sx={{ p: 2 }}>
                <strong style={{ color: "grey" }}>Register No.:</strong>
                <span style={{ float: "right" }}>{user.regno}</span>
              </Box>
            </div>
            <div>
              <Box style={{ textAlign: "left" }} sx={{ p: 2 }}>
                <strong style={{ color: "grey" }}>Email:</strong>
                <span style={{ float: "right" }}>{user.email}</span>
              </Box>
            </div>
            <div>
              <Box style={{ textAlign: "left" }} sx={{ p: 2 }}>
                <strong style={{ color: "grey" }}>Contact No:</strong>
                <span style={{ float: "right" }}>{user.contact}</span>
              </Box>
            </div>
          </div>

          {/* <div className="profile-section">
            <h3>Clubs Joined</h3>
            <ul>
              {clubs.map((club, index) => (
                <li key={index}>{club}</li>
              ))}
            </ul>
          </div> */}

        </div>
      </div>
      </div>
      )}
    </>
  );
};

export default Profile;