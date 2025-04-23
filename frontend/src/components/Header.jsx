import React  from 'react'
import { Link } from 'react-router-dom' 
import {Box, Typography, Button} from '@mui/material'
import {AppBar, Toolbar, IconButton, Menu, Container, Avatar, Tooltip, MenuItem} from '@mui/material'
import './Header.css'

const Header = () => {
const [anchorElUser, setAnchorElUser] = React.useState(null);
const handleOpenUserMenu = (event) => { 
    setAnchorElUser(event.currentTarget); }; 
const handleCloseUserMenu = () => {
    setAnchorElUser(null);
};

return (
  <AppBar position="static" id="t">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
       <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Gilda Display',
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            COLLEGE NAME
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: '',
              fontWeight: 500,
              fontSize: '25px',
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
              
            | Club Portal |
          </Typography>
          
          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button component={Link} to="/memberdashboard" id="ann">Dashboard</Button>
            <Button component={Link} to="/events" id="ann">Event</Button>
            <Button component={Link} to="/announcements" id="ann">Announcement</Button>
          </Box>
          

          {/* User Settings */}
          <Box sx={{ flexGrow: 0 }}>
            
            <Tooltip title="Open profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="profile-img" />
              </IconButton>
            </Tooltip>
           
  
            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem  >
                  <Link to={`/profile`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    Profile
                  </Link>
                </MenuItem>
              
              <MenuItem onClick={() => {
                    localStorage.removeItem("userRole");
                    window.location.href = "/"; 
              }}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;