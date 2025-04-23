import * as React from 'react';
import './ClubStyle.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const club3 = () => {
    const leaders = [
        { name: "Name1", position: "President" },
        { name: "Name2", position: "Treasurer" },
        { name: "Name3", position: "Secretary" },
      ];
      
      const events = [
        { title: "Event 1", date: "2025-03-01" },
        { title: "Event 2", date: "2025-05-10" },
      ];

      const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          rows: 2,
          cols:2
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          author: '@arwinneil',
          rows: 2,
          cols:2
        }];
        const navigate = useNavigate();
        const handleEnroll = (path) => { navigate(path); };
  return (
    <>
    <div className="body">
     {/* Logo */}
     <div className="logo">
        <img src="https://i.fbcd.co/products/resized/resized-750-500/890-93b40026b18be0f0488cb221b2b6dc7606469c3e10986012fb0e2883a8fb17d9.jpg?hl=en-GB" 
        height={250} width={200} />
        <h1 className='name'>CLUB NAME</h1>
      </div>

      
      {/* Enroll Button */}
      <div className='button'>
          <Button size="medium"  variant='outlined' sx={{backgroundColor:'powderblue', color:'black'}} onClick={() => handleEnroll('/enrollment')}>Enroll / Register</Button>
      </div>
      <br />
    

      {/* About Us  */}
      <Box sx={{ 
    maxWidth: "1000px",
    margin: "auto",
    marginTop: 1,
    padding: 4,
    borderRadius: 5,
    boxShadow: 3,
    border: "1px solid #ddd"
    }}>

      <section className='a'>
       <div className="b"><h2 className='heading'>About Us</h2></div> 
       
        <div className='c'>
        <p >Description about the club....
        </p>
          <h3><strong>Mission:</strong></h3>
         <h3><strong>Vision:</strong> </h3>
        </div>
      </section>

       {/* Leaders */}
     <section>
        <h2 className='heading' >Leaders</h2>
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center" }}>
          {leaders.map((leader, index) => (
            <Card key={index} sx={{ height:140 , width: 250, boxShadow: 3, borderRadius: 2 }}> 
              <CardContent  sx={{ textAlign: "center" }} >
                <h3 >{leader.name}</h3>
                <p>{leader.position}</p>
              </CardContent><br /><br />
            </Card>
          ))}
        </div>
      </section>

       {/* Events */}
       <section>
        <h2 className='heading' >Events</h2>
        <div style={{ display:"flex", gap: "40px", justifyContent: "center" }}>
          {events.map((event, index) => (
            <Card key={index} sx={{ height:140 , width: 250, boxShadow: 3, borderRadius: 2 }}>
              <CardContent sx={{ textAlign:"center"}}>
                <h3 >{event.title}</h3>
                <p >{event.date}</p>
               
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      

        {/* Gallery */}
        <section>
        <h2 className='heading'>Gallery</h2>
        <div >
        <ImageList
      sx={{ width:1000, height: 500 }}
      variant="quilted"
      cols={4}
      rowHeight={130}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
        src={`${item.img}?w=121&fit=crop&auto=format`}
        srcSet={`${item.img}?w=121&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
        />

        </ImageListItem>
      ))}
    </ImageList>
        </div>
      </section>
      
      </Box>
      </div>

    
    </>
  )
}

export default club3