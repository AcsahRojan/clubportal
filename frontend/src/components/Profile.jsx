import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
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

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRegno");
    localStorage.removeItem("userContact");
    localStorage.removeItem("userClubs");

    window.location.href = "/"; // Redirect to login page
  };

  // If user data is not yet loaded
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
     <div className='profile-container' id="body">
      <div className="profile-card">

        {/* Left Panel */}
        <div className="profile-left">
          <img
            src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
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

          <div>
            <Button
              variant="text"
              color="error"
              onClick={handleLogout}
              style={{ float: "right" }}
            >
              Logout <LogoutIcon fontSize="small" />
            </Button>
          </div>

        </div>
      </div>
      </div>
    </>
  );
};

export default Profile;
