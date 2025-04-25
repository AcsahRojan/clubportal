import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
} from '@mui/material';

const AdminMembers = ({ isSidebarExpanded }) => {
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleRoleFilterChange = (event) => {
    setRoleFilter(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box sx={{ padding: 3, marginLeft: isSidebarExpanded ? 0 : 14 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontFamily: 'Gilda Display'}}>
          Members
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#3b0e76', color: '#fff' }}>
          + Add Member
        </Button>
      </Box>

      {/* Filters */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel>Role</InputLabel>
            <Select value={roleFilter} onChange={handleRoleFilterChange}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Member">Member</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel>Status</InputLabel>
            <Select value={statusFilter} onChange={handleStatusFilterChange}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            placeholder="Search members..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Grid>
      </Grid>

      {/* Member List */}
      <List container spacing={3}>
        {/* Sample Member Card */}
        <List sx={{ maxWidth: 500 }}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f4f4f9',
                padding: 2,
              }}
            >
              {/* Member Info */}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Example 1
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  one@example.com | Admin
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Joined July 2023
                </Typography>
              </Box>

              {/* Member Status */}
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#4caf50',
                  color: '#fff',
                  borderRadius: '10px',
                  ml: 2,
                }}
              >
                Active
              </Button>
            </CardContent>
          </Card>
        </List>

        <List  sx={{ maxWidth: 500 }}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f4f4f9',
                padding: 2,
              }}
            >
              {/* Member Info */}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Example 2
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  two@example.com | Member
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Joined Jan 2023
                </Typography>
              </Box>

              {/* Member Status */}
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#4caf50',
                  color: '#fff',
                  borderRadius: '10px',
                  ml: 2,
                }}
              >
                Active
              </Button>
            </CardContent>
          </Card>
        </List>

        <List  sx={{ maxWidth: 500 }}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f4f4f9',
                padding: 2,
              }}
            >
              {/* Member Info */}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Example 3
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  three@example.com | member
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Joined Jan 2023
                </Typography>
              </Box>

              {/* Member Status */}
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#ff1f1f',
                  color: '#fff',
                  borderRadius: '10px',
                  ml: 2,
                }}
              >
                Inactive
              </Button>
            </CardContent>
          </Card>
        </List>

        <List  sx={{ maxWidth: 500 }}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f4f4f9',
                padding: 2,
              }}
            >
              {/* Member Info */}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Example 4
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  four@example.com | Member
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Joined Jan 2023
                </Typography>
              </Box>

              {/* Member Status */}
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#c3c300',
                  color: '#fff',
                  borderRadius: '10px',
                  ml: 2,
                }}
              >
                Pending
              </Button>
            </CardContent>
          </Card>
        </List>
      </List>
    </Box>
  );
};

export default AdminMembers;