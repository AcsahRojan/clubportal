import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Typography, Button, Grid, Divider, IconButton, Tooltip,
  Dialog, DialogTitle, DialogContent, DialogActions, TextField,
  Card, CardContent,
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Groups, Event, Campaign, Edit } from '@mui/icons-material';
import axios from 'axios';

const AdminDashboard = ({ isSidebarExpanded }) => {
  const navigate = useNavigate();
  const [clubName, setClubName] = useState(localStorage.getItem('userClub'));
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    mission: '',
    vision: '',
    phone:'',
    email: '',
    photos: [],
  });
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clubinfos');
        const matchedClub = response.data.filter((clb) => clb.name === clubName);

        setClubs(matchedClub);
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    };

    fetchClubs();
  }, [clubName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, photos: [...prev.photos, ...files] }));
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  const handleEditClick = (club) => {
    setFormData({
      id: club._id,
      name: club.name,
      description: club.description,
      mission: club.mission,
      vision: club.vision,
      phone: club.phone,
      email: club.email,
      photos: [],
    });
    setOpenDialog(true);
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === 'photos') {
          formData.photos.forEach((photo) => formDataToSend.append('photos', photo));
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });
  
      const prevClubName = localStorage.getItem('userClub');
  
      const response = await axios.patch('http://localhost:3000/clubinfos', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      const updatedClub = response.data.club;
  
      //  Update localStorage if name changed
      if (formData.name !== clubName) {
        localStorage.setItem('userClub', formData.name);
        setClubName(formData.name); //  Update state so useEffect runs again
      }
      
  
      alert('Club info updated successfully!');
      setOpenDialog(false);
  
      //  Fetch updated club data
      const updatedResponse = await axios.get('http://localhost:3000/clubinfos');
      const matchedClub = updatedResponse.data.filter((clb) => clb.name === formData.name);
      setClubs(matchedClub);
  
    } catch (error) {
      console.error('Error updating club info:', error);
      alert('Failed to update club info.');
    }
  };
  

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        transition: 'margin-left 0.3s ease',
        marginLeft: isSidebarExpanded ? 0 : 10,
        padding: 5,
      }}
    >
      <Box sx={{ flex: 1 }}>
        {clubs.map((club) => (
          <div key={club._id}>
          <Divider sx={{ mb: 3 }} >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h3" sx={{ fontFamily: 'Gilda Display', textAlign: 'center', mr: 1 }}>
                {club.name}
              </Typography>
              <Tooltip title="Edit Club Info">
                <IconButton onClick={() => handleEditClick(club)}>
                  <Edit color="primary" />
                </IconButton>
              </Tooltip>
            </Box>
          </Divider>
          <div>
              <Typography>Description: {club.description}</Typography>
              <Typography>Mission: {club.mission}</Typography>
              <Typography>Vision: {club.vision}</Typography>
              <Typography>Phone: {club.phone}</Typography>
              <Typography>Email: {club.email}</Typography>
            </div>
          </div>
        ))}

        {/* Edit Club Info Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
          <DialogTitle>Update Club Info</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Club Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              margin="normal"
              multiline
              rows={3}
            />
            <TextField
              fullWidth
              label="Mission"
              name="mission"
              value={formData.mission}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Vision"
              name="vision"
              value={formData.vision}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              margin="normal"
              type="email"
            />
            <Button
              variant="contained"
              component="label"
              startIcon={<AddPhotoAlternateIcon />}
              sx={{ mt: 2 }}
            >
              Upload Photos
              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
              />
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="secondary">Cancel</Button>
            <Button onClick={handleSubmit} color="primary">Submit</Button>
          </DialogActions>
        </Dialog>

        {/* Dashboard Welcome */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: 'center', fontWeight: 'thin', mb: 4, fontFamily: 'Gilda Display', fontSize: 30 }}
        >
          Welcome club leader!
          <br />
          <small>This is your all-in-one space to manage everything about your club.</small>
        </Typography>

        {/* Dashboard Cards */}
        <Grid container spacing={3} justifyContent="center">
          {[
            {
              title: 'Manage Club Members',
              description: 'View and manage club members, enrollments and more.',
              icon: <Groups sx={{ fontSize: 40, color: '#3f51b5' }} />,
              path: '/AdminMembers',
            },
            {
              title: 'Manage Events',
              description: 'Add, edit, cancel or manage club events.',
              icon: <Event sx={{ fontSize: 40, color: '#4caf50' }} />,
              path: '/AdminEvents',
            },
            {
              title: 'Announcements',
              description: 'Create, publish and view announcements.',
              icon: <Campaign sx={{ fontSize: 40, color: '#f44336' }} />,
              path: '/AdminAnno',
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  p: 5,
                  textAlign: 'center',
                  borderRadius: 3,
                  boxShadow: 3,
                  maxHeight: 200,
                  maxWidth: 250,
                }}
              >
                <CardContent>
                  {item.icon}
                  <Typography variant="h6" gutterBottom>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  <Button variant="outlined" fullWidth onClick={() => handleCardClick(item.path)}>
                    {item.title.includes('Announcements') ? 'Post' : 'Manage'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
