import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Avatar,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { Groups, Event, Campaign, Assessment } from '@mui/icons-material';

const AdminSidebar = () => {
  const [isSidebarExpanded, setSidebarExpanded] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': {
            width: isSidebarExpanded ? 300 : 73, // Dynamic width based on expansion
            boxSizing: 'border-box',
            background: 'linear-gradient(to bottom, #000000, #3b0e76, #741a8f )',
            overflowX: 'hidden', // Prevent content overflow
            transition: 'width 0.3s ease', // Smooth transition for width
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px 16px' }}>
          <IconButton onClick={toggleSidebar} sx={{ color: 'white' }}>
            <MenuIcon />
          </IconButton>
          {isSidebarExpanded && (
            <Box sx={{ marginTop: 5.3 }}>
              <Typography
                variant="h6"
                component="a"
                href="#"
                sx={{
                  fontFamily: 'Gilda Display',
                  letterSpacing: '.1rem',
                  color: 'white',
                  textDecoration: 'none',
                  marginTop: 1,
                }}
              >
                COLLEGE NAME
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  letterSpacing: '.05rem',
                  color: 'white',
                  marginTop: 1,
                }}
              >
                Club Portal
              </Typography>
            </Box>
          )}
        </Box>

        <List>
        
        <ListItem onClick={() => window.location.href = '/AdminDashboard'} button id="asbutton">  
            <Tooltip title="Dashboard" placement="right">
              <HomeIcon sx={{ color: 'white', marginLeft: 1  }} />
            </Tooltip>
            {isSidebarExpanded && (
              <ListItemText primary="Dashboard" sx={{ color: 'white', marginLeft: isSidebarExpanded ? 2 : 0 }} />
            )}
          </ListItem>

          <ListItem onClick={() => window.location.href = '/AdminMembers'} button id="asbutton">  
            <Tooltip title="Members" placement="right">
              <Groups sx={{ color: 'white', marginLeft: 1  }} />
            </Tooltip>
            {isSidebarExpanded && (
              <ListItemText primary="Manage Members" sx={{ color: 'white', marginLeft: isSidebarExpanded ? 2 : 0 }} />
            )}
          </ListItem>

          <ListItem onClick={() => window.location.href = '/AdminEvents'} button id="asbutton">  
            <Tooltip title="Events" placement="right">
              <Event sx={{ color: 'white', marginLeft: 1  }} />
            </Tooltip>
            {isSidebarExpanded && (
              <ListItemText primary="Manage Events" sx={{ color: 'white', marginLeft: isSidebarExpanded ? 2 : 0 }} />
            )}
          </ListItem>

          <ListItem onClick={() => window.location.href = '/AdminAnno'} button id="asbutton">  
            <Tooltip title="Announcements" placement="right">
              <Campaign sx={{ color: 'white', marginLeft: 1  }} />
            </Tooltip>
            {isSidebarExpanded && (
              <ListItemText primary="Manage Announcements" sx={{ color: 'white', marginLeft: isSidebarExpanded ? 2 : 0 }} />
            )}
          </ListItem>

          {/* <ListItem onClick={() => window.location.href = '/AdminReports'} button id="asbutton">  
            <Tooltip title="Reports" placement="right">
              <Assessment sx={{ color: 'white', marginLeft: 1  }} />
            </Tooltip>
            {isSidebarExpanded && (
              <ListItemText primary="Manage Reports" sx={{ color: 'white', marginLeft: isSidebarExpanded ? 2 : 0 }} />
            )}
          </ListItem> */}

          <ListItem onClick={() => window.location.href = '/Profile'} button id="asbutton">  
            <Tooltip title="Profile" placement="right">
              <Avatar sx={{ width: 32, height: 32, marginLeft: 0.5 }} alt="profile-img" />
            </Tooltip>
            {isSidebarExpanded && (
              <ListItemText primary="Profile" sx={{ color: 'white', marginLeft: isSidebarExpanded ? 2 : 0 }} />
            )}
          </ListItem>

          <ListItem
            button
            id="asbutton"
            onClick={() => {
              localStorage.removeItem('userRole');
              window.location.href = '/';
            }}
          >
            <Tooltip title="Logout" placement="right">
              <LogoutIcon sx={{ color: 'white', marginLeft: 1  }} />
            </Tooltip>
            {isSidebarExpanded && (
              <ListItemText
                primary="Logout"
                sx={{ color: isSidebarExpanded ? 'white' : 'inherit', marginLeft: isSidebarExpanded ? 2 : 0 }}
              />)}
          </ListItem>
        </List>

      </Drawer>
    </Box>
  );
};

export default AdminSidebar;