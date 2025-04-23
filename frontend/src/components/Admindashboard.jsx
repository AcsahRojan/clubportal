import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom' 
import {Box, Typography, Button,Grid} from '@mui/material'
import {AppBar, Toolbar, IconButton, Menu, Container, Avatar, Tooltip, MenuItem} from '@mui/material'
import { Groups, Event, Campaign, Assessment } from '@mui/icons-material';


const Admindashboard = () => {
   
   const [anchorElUser, setAnchorElUser] = React.useState(null);
   const handleOpenUserMenu = (event) => { 
       setAnchorElUser(event.currentTarget); }; 
   const handleCloseUserMenu = () => {
       setAnchorElUser(null);
   };
   
  return (
    <><AppBar position="static" id="t">
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
          

          {/* User Settings */}
          <Box sx={{ flexGrow:0}}>
            
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


     <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Welcome Club Leader!
      </Typography>
          
      <Grid container spacing={4}>
      
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{maxWidth:700,p: 9, textAlign: 'center', borderRadius: 3, boxShadow: 3 }}>
            <Groups sx={{ fontSize: 40, color: '#3f51b5' }} />
            <CardContent>
              <Typography variant="h6">Manage Members</Typography>
              <Button variant="outlined" fullWidth sx={{ mt: 2 }}>View Members</Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ p: 2, textAlign: 'center', borderRadius: 3, boxShadow: 3 }}>
            <Event sx={{ fontSize: 40, color: '#4caf50' }} />
            <CardContent>
              <Typography variant="h6">Manage Events</Typography>
              <Button variant="outlined" fullWidth sx={{ mt: 2 }}>View Events</Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ p: 2, textAlign: 'center', borderRadius: 3, boxShadow: 3 }}>
            <Campaign sx={{ fontSize: 40, color: '#f44336' }} />
            <CardContent>
              <Typography variant="h6">Announcements</Typography>
              <Button variant="outlined" fullWidth sx={{ mt: 2 }}>Post Announcement</Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ p: 2, textAlign: 'center', borderRadius: 3, boxShadow: 3 }}>
            <Assessment sx={{ fontSize: 40, color: '#ff9800' }} />
            <CardContent>
              <Typography variant="h6">Reports</Typography>
              <Button variant="outlined" fullWidth sx={{ mt: 2 }}>View Reports</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default Admindashboard