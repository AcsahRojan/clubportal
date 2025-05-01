import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const Memberdashboard = () => {
  const [clubs, setClubs] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchClubs = async () => {
      try {
        const res = await axios.get('http://localhost:3000/clubinfos'); // <-- your backend API endpoint
        setClubs(res.data); // set the fetched club list
      } catch (error) {
        console.error('Failed to fetch clubs:', error);
      }
    };
    fetchClubs();
  }, []);

  const handleCardClick = (clubId) => {
    navigate(`/clubinfos/${clubId}`); // navigate to the dynamic route
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>All Clubs</h1>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        {clubs.map((club) => (
          <Grid  xs={6} sx={{ mr: 'auto', ml: 'auto' }} key={club._id}>
            <Card sx={{ maxWidth: 500,mt: 5 , margin: 'auto', border: '2px solid black', cursor: 'pointer' }} onClick={() => handleCardClick(club._id)}>
              <CardActionArea id="clubs">
                <CardMedia
                  component="img"
                  height="140"
                  image={club.imageUrl || "https://img.freepik.com/free-vector/people-studying-online-flat-set-isolated-white_107791-15519.jpg"}
                  alt={club.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '35px', textAlign: 'center' }}>
                    {club.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary'}}>
                    {club.description }
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Memberdashboard;