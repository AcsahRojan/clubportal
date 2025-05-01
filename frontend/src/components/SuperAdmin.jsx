import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
    AppBar,
    Box,
    Toolbar,
    Container,
    Link,
    Menu,
    MenuItem,
    Tooltip,
    Avatar,
    Typography,
    Button,
    Grid,
    Paper,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Dialog,
    DialogContent,
    DialogActions,
    TextField,
    BottomNavigation
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { 
    AdminPanelSettingsRounded, 
    ManageAccountsRounded, 
    KeyboardArrowDown, 
    KeyboardArrowUp, 
    QueryStatsRounded, 
    TuneRounded 
} from '@mui/icons-material';


const clubData = [
    { name: 'Club 1', 
    members: 84, 
    admins: 3, 
    adminDetails: [
        { name: 'Name 1', status: 'Active' }, 
        { name: 'Name 2', status: 'Inactive' }, 
        { name: 'Name 3', status: 'Active' }] },
    { name: 'Club 2', 
    members: 75, 
    admins: 2, 
    adminDetails: [
        { name: 'Name 1', status: 'Active' }, 
        { name: 'Name 2', status: 'Inactive' }] },
    { name: 'Club 3', 
    members: 35, 
    admins: 2, 
    adminDetails: [
        { name: 'Name 1', status: 'Active' }, 
        { name: 'Name 2', status: 'Inactive' }] },
    { name: 'Club 4', 
    members: 48, 
    admins: 1, 
    adminDetails: [
        { name: 'Name 1', status: 'Active' }] },
    { name: 'Club 5', 
    members: 80, 
    admins: 2, 
    adminDetails: [
        { name: 'Name 1', status: 'Active' }, 
        { name: 'Name 2', status: 'Inactive' }] },
];

const Row = ({ row }) => {
    const [open, setOpen] = React.useState(false);
  
    return (
      <>
        <TableRow>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.members}</TableCell>
          <TableCell>{row.admins}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={2}>
                <Typography variant="h6" gutterBottom>
                  Admin Details
                </Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Admin Name</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.adminDetails.map((admin, index) => (
                      <TableRow key={index}>
                        <TableCell>{admin.name}</TableCell>
                        <TableCell>{admin.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
};

const RoleCard = () => {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
      try {
        const response = await axios.post("http://localhost:3000/superadmin", data);
        alert(`${response.data.message}`);
        reset();
      } catch (error) {
        const errorMessage = 'Failed to make any changes. Please try again.';
        alert(errorMessage);
      }
    };

    const roleClick = () => {alert('Are you sure about this? Proceed with caution.');};
  
    return (
      <div className="role-card">
        <Button id="adb" variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => setOpen(true)}>Manage</Button>
      
        <Dialog open={open} onClose={() => setOpen(false)} className="dialogbox" >     
          <DialogContent className="dialogcontent">
           <h2>Roles and Privileges</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="eventform">
              <TextField
                label="Name of Person"
                {...register("name")}
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name ? "Name must be correct" : ""}
                className="eventinput"
                />
              <TextField
                label="Current role"
                {...register("role")}
                fullWidth
                margin="normal"
                error={!!errors.role}
                className="eventinput"
              />
              <TextField
                label="New role"
                {...register("nrole")}
                fullWidth
                margin="normal"
                error={!!errors.nrole}
               className="eventinput"
              />
              <TextField
                label="Privilege to be revoked (if any)"
                {...register("rpriv")}
                fullWidth
                margin="normal"
                error={!!errors.rpriv}
                helperText={errors.rpriv ? "Does this exist" : ""}
               className="eventinput"
              />
              <TextField
                label="Privilege to be added (if any)"
                {...register("nrole")}
                fullWidth
                margin="normal"
                error={!!errors.nrole}
                helperText={errors.nrole ? "Does this exist" : ""}
               className="eventinput"
              />
              <TextField
                label="Club"
                {...register("club", { required: true })}
                fullWidth
                margin="normal"
                error={!!errors.club}
                helperText={errors.club ? "Club name is required" : ""}
               className="eventinput"
              />
              <DialogActions>
                <Button onClick={() => setOpen(false)} color="secondary" className="eventcancelbutton">Cancel</Button>
                <Button type="submit" color="primary" onClick={roleClick} className="eventsubmitbutton">Confirm Changes</Button>
              </DialogActions>
            </form>
          </DialogContent>   
        </Dialog>
      </div>
    );
};

const UserCard = () => {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
      try {
        const response = await axios.post("http://localhost:3000/superadmin", data);
        alert(`${response.data.message}`);
        reset();
      } catch (error) {
        const errorMessage = 'Failed to make any changes. Please try again.';
        alert(errorMessage);
      }
    };

    const userClick = () => {alert('Are you sure about this? Proceed with caution.');};
  
    return (
      <div className="user-card">
        <Button id="adb" variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => setOpen(true)}>Manage</Button>
      
        <Dialog open={open} onClose={() => setOpen(false)} className="dialogbox" >     
          <DialogContent className="dialogcontent">
           <h2>User Settings</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="eventform">
              <TextField
                label="Enter ObjectId of user"
                {...register("ObjectId")}
                fullWidth
                margin="normal"
                error={!!errors.ObjectId}
                className="eventinput"
                />
              <TextField
                label="Change name"
                {...register("name")}
                fullWidth
                margin="normal"
                error={!!errors.name}
                className="eventinput"
                />
              <TextField
                label="Change password"
                type="password"
                {...register("password")}
                fullWidth
                margin="normal"
                error={!!errors.password}
                className="eventinput"
                />
              <TextField
                label="Change email"
                type="email"
                {...register("email")}
                fullWidth
                margin="normal"
                error={!!errors.email}
                className="eventinput"
                />
              <TextField
                label="Change phone"
                type="tel"
                {...register("phone")}
                fullWidth
                margin="normal"
                error={!!errors.phone}
                className="eventinput"
                />
              <TextField
                label="Change register number"
                {...register("regno")}
                fullWidth
                margin="normal"
                error={!!errors.regno}
                className="eventinput"
                />
              <DialogActions>
                <Button onClick={() => setOpen(false)} color="secondary" className="eventcancelbutton">Cancel</Button>
                <Button type="submit" color="primary" onClick={userClick} className="eventsubmitbutton">Confirm Changes</Button>
              </DialogActions>
            </form>
          </DialogContent>   
        </Dialog>
      </div>
    );
};

const ClubCard = () => {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
      try {
        const response = await axios.post("http://localhost:3000/superadmin", data);
        alert(`${response.data.message}`);
        reset();
      } catch (error) {
        const errorMessage = 'Failed to make any changes. Please try again.';
        alert(errorMessage);
      }
    };

    const clubClick = () => {alert('Are you sure about this? You are about to add or delete a substantial amount of data. Proceed with utmost caution.');};
  
    return (
      <div className="club-card">
        <Button id="adb" variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => setOpen(true)}>Manage</Button>
      
        <Dialog open={open} onClose={() => setOpen(false)} className="dialogbox" >     
          <DialogContent className="dialogcontent">
           <h2>Club Settings</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="eventform">
              <TextField
                label="Enter ObjectId of user"
                {...register("ObjectId")}
                fullWidth
                margin="normal"
                error={!!errors.ObjectId}
                className="eventinput"
                />
              <TextField
                label="Change name"
                {...register("name")}
                fullWidth
                margin="normal"
                error={!!errors.name}
                className="eventinput"
                />
              <TextField
                label="Change password"
                type="password"
                {...register("password")}
                fullWidth
                margin="normal"
                error={!!errors.password}
                className="eventinput"
                />
              <TextField
                label="Change email"
                type="email"
                {...register("email")}
                fullWidth
                margin="normal"
                error={!!errors.email}
                className="eventinput"
                />         
              <DialogActions>
                <Button onClick={() => setOpen(false)} color="secondary" className="eventcancelbutton">Cancel</Button>
                <Button type="submit" color="primary" onClick={clubClick} className="eventsubmitbutton">Confirm Changes</Button>
              </DialogActions>
            </form>
          </DialogContent>   
        </Dialog>
      </div>
    );
};

const pages = ['Dashboard', 'Roles', 'Users', 'Clubs'];
const settings = ['Profile'];

const SuperAdmin = () => {
    const navigate = useNavigate();
    const handleCardClick = (path) => {
        navigate(path);
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => { 
      setAnchorElNav(event.currentTarget); }; 
    
    const handleOpenUserMenu = (event) => { 
      setAnchorElUser(event.currentTarget); }; 
    
    const handleCloseNavMenu = () => { 
      setAnchorElNav(null); };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
  return (
    <>
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
            }}
          >
            | Club Portal |
          </Typography>
          
          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (  
              <Button
                key={page}
                sx={{ my: 3, color: 'white', display: 'block' }}
              >
                <Link 
                to={page === 'Dashboard' ? '/' : `/${page.toLowerCase()}`} 
                style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page}
                </Link>
              </Button> 
            ))}
          </Box>
          
          {/* Mobile Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu} // Open the menu when clicked
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu} // Close the menu when clicking outside
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link 
                    to={page === 'Dashboard' ? '/' : `/${page.toLowerCase()}`} 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* User Settings */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile Icon" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to={`/${setting.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {setting}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>



    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        transition: 'margin-left 0.3s ease',
        justifyContent: 'center',
        padding: 5,
      }}
    >
      <Box
        sx={{
            flex: 1, // Ensure the content takes full width minus the sidebar
        }}
      >



        {/*Statistics*/}
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'thin', mb: 4, fontSize: 30 }}
        >
          Overall Stats<br />
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 2, backgroundColor: 'rgb(207, 255, 202)', minWidth: 150 }}>
                <Typography variant="h3" sx={{ fontFamily: 'Gilda Display' }}>5</Typography>
                <Typography variant="h6">Total Clubs</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 2, backgroundColor: 'rgb(255, 255, 202)', minWidth: 150 }}>
                <Typography variant="h3" sx={{ fontFamily: 'Gilda Display' }}>10</Typography>
                <Typography variant="h6">Total Admins</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 2, backgroundColor: 'rgb(255, 206, 206)', minWidth: 150 }}>
                <Typography variant="h3" sx={{ fontFamily: 'Gilda Display' }}>322</Typography>
                <Typography variant="h6">Total Members</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/*Collapsible Table*/}
        <TableContainer component={Paper} sx={{ mb: 6, width: 400, borderRadius: 2, backgroundColor: '#efebff' }}>
            <Table aria-label="collapsible table">
                <TableHead sx={{ backgroundColor: '#f8bcda' }}>
                    <TableRow>
                    <TableCell />
                    <TableCell>Club</TableCell>
                    <TableCell>Members</TableCell>
                    <TableCell>Admins</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clubData.map((club, index) => (
                    <Row key={index} row={club} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>



        {/*Actions*/}
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'thin', mb: 4, fontSize: 30 }}
        >
          Actions<br />
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 5, textAlign: 'center', borderRadius: 3, boxShadow: 3, maxHeight: 200, minWidth: 350 }}>
              <AdminPanelSettingsRounded sx={{ fontSize: 40, color: '#3f51b5' }} />
              <CardContent>
                <Typography variant="h6">Roles and Privileges</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Manage roles, access levels and privileges.
                </Typography>
                <RoleCard/>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 5, textAlign: 'center', borderRadius: 3, boxShadow: 3, maxHeight: 200, minWidth: 350 }}>
              <ManageAccountsRounded sx={{ fontSize: 40, color: '#4caf50' }} />
              <CardContent>
                <Typography variant="h6">User Settings</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Manage user information and security.
                </Typography>
                <UserCard/>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 5, textAlign: 'center', borderRadius: 3, boxShadow: 3, maxHeight: 200, minWidth: 350 }}>
              <TuneRounded sx={{ fontSize: 40, color: '#f44336' }} />
              <CardContent>
                <Typography variant="h6">Club Settings</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Manage club data. Add or remove clubs.
                </Typography>
                <ClubCard/>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 5, textAlign: 'center', borderRadius: 3, boxShadow: 3, maxHeight: 200, minWidth: 350 }}>
              <QueryStatsRounded sx={{ fontSize: 40, color: '#ff9800' }} />
              <CardContent>
                <Typography variant="h6">Diagnostics</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Manage user diagnostics, bugs and more.
                </Typography>
        <Button id="adb" variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => handleCardClick('/AdminReports')}>
                  Manage
                </Button>
              </CardContent>
            </Card>
          </Grid>

        </Grid>



      </Box>
    </Box>

    <BottomNavigation id="bn"><Typography>&copy; 2025 College Club Portal</Typography></BottomNavigation>
    </>
  );
};

export default SuperAdmin;