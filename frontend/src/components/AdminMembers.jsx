import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  TableContainer,
} from '@mui/material';
import axios from 'axios';

const AdminMembers = ({ isSidebarExpanded }) => {
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const club = localStorage.getItem('userClub');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
       
        const response = await axios.get('http://localhost:3000/users');
        const clubMembers = response.data.filter(
          (member) => member.clubName === club
        );
        setMembers(clubMembers);
      } catch (error) {
        console.error('Failed to fetch members:', error);
      }
    };
    fetchMembers();
  }, []);

  const filteredMembers = members.filter(
    (member) =>
      (member.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (member.dept.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        await axios.delete(`http://localhost:3000/users/${id}`);
        // Refresh the members list
        setMembers((prev) => prev.filter((m) => m._id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };
  
 

  return (
    <Box
      sx={{
        minHeight: '100vh',
        transition: 'margin-left 0.3s ease',
        marginLeft: isSidebarExpanded ? 0 : 10,
        padding: 5,
        
      }}
    >
      {/* Header */}
      <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Gilda Display', fontWeight: 'bold' }}>
        Club Members
      </Typography>

      {/* Card + Search Field Row */}
      <Grid container spacing={3} alignItems="center" sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              background: 'linear-gradient(to right, #1976d2, #42a5f5)',
              color: '#fff',
              boxShadow: 3,
              borderRadius: 3,
            }}
          >
            <CardContent>
              <Typography variant="subtitle2" color="inherit">
                Total Members
              </Typography>
              <Typography variant="h4" fontWeight={600}>
                {members.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            placeholder="Search members by name or department"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: 'white',
              
              boxShadow: 1,
            }}
          />
        </Grid>
      </Grid>

      {/* Members Table */}
      
        <TableContainer  component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMembers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2}>
                  <Typography textAlign="center" sx={{ p: 2 }}>
                    No members found!
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredMembers.map((member, index) => (
                <TableRow key={index} hover>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.dept}</TableCell>
                 <TableCell><Button variant='outlined' color='error' onClick={() => handleDelete(member._id)} >remove</Button></TableCell>
                </TableRow>
                
              ))
            )}
            
          </TableBody>
          </Table>
        </TableContainer>
     
    </Box>
  );
};

export default AdminMembers;
