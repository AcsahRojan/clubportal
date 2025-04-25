import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
  Box,
  Typography,
  Button,
  Grid,
  Container
} from '@mui/material';
import { Groups, Event, Campaign, Assessment } from '@mui/icons-material';

const Admindashboard = ({ isSidebarExpanded }) => {
  const navigate = useNavigate();
  const handleCardClick = (path) => { navigate(path); }; // Navigates to the given path

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: isSidebarExpanded ? 0 : 14,  // Adjust content margin
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 'thin', mb: 4, fontFamily: 'Gilda Display' }}
          >
            Welcome club leader!<br />
            <small>This is your space. An all-in-one place to manage everything about your club.</small>
          </Typography>

          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ p: 5, textAlign: 'center', borderRadius: 3, boxShadow: 3 }}>
                <Groups sx={{ fontSize: 40, color: '#3f51b5' }} />
                <CardContent>
                  <Typography variant="h6">Manage Members</Typography>
                  <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => handleCardClick('/AdminMembers')}>
                    View Members
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ p: 5, textAlign: 'center', borderRadius: 3, boxShadow: 3 }}>
                <Event sx={{ fontSize: 40, color: '#4caf50' }} />
                <CardContent>
                  <Typography variant="h6">Manage Events</Typography>
                  <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => handleCardClick('/AdminEvents')}>
                    View Events
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ p: 5, textAlign: 'center', borderRadius: 3, boxShadow: 3 }}>
                <Campaign sx={{ fontSize: 40, color: '#f44336' }} />
                <CardContent>
                  <Typography variant="h6">Announcements</Typography>
                  <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => handleCardClick('/AdminAnno')}>
                    Post Announcements
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ p: 5, textAlign: 'center', borderRadius: 3, boxShadow: 3 }}>
                <Assessment sx={{ fontSize: 40, color: '#ff9800' }} />
                <CardContent>
                  <Typography variant="h6">Reports</Typography>
                  <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={() => handleCardClick('/AdminReports')}>
                    View Reports
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Admindashboard;