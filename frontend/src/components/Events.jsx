import React, { useState } from "react";
import './Events.css'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import axios from "axios";
import { useForm } from 'react-hook-form';
// Event data
const events = [
  {
    id: 1,
    title: "Tech Talk: Future of AI",
    club: "Club 1",
    date: "April 28, 2025",
    time: "2:00 PM - 4:00 PM",
    venue: "Auditorium A",
    description: "Explore the impact of Artificial Intelligence in our daily lives with guest speaker Dr. Mehta.",
    image: "https://www.de-ctr.org/wp-content/uploads/2019/08/tech-talk-1024x512.jpg",
  },
  {
    id: 2,
    title: "Cultural Night",
    club: "Club 2",
    date: "May 10, 2025",
    time: "6:00 PM - 9:00 PM",
    venue: "Open Air Theatre",
    description: "An evening filled with music, dance, drama, and colors of culture.",
    image: "https://i.ytimg.com/vi/W2g2wr7WXTk/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Eco Clean-Up Drive",
    club: "Club 3",
    date: "May 15, 2025",
    time: "8:00 AM - 11:00 AM",
    venue: "College Garden Area",
    description: "Join hands for a cleaner campus! Tools and refreshments provided.",
    image: "https://media.istockphoto.com/id/1325760807/vector/people-collecting-garbage-in-city-park-men-and-women-volunteers-cleaning-park-together-from.jpg?s=612x612&w=0&k=20&c=EVB1As5FDaaks6BX8hIEI1fMgqVmN7ud8a6oC4T7Jks=",
  },
];

// EventCard component

const EventCard = ({ event }) => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/events", data);
      alert(`${response.data.message}`);
      reset();
    } catch (error) {
      const errorMessage = 'Enrollment failed. Please try again.';
      alert(errorMessage);
    }
  };

  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <h2>{event.title}</h2>
      <p><strong>Club:</strong> {event.club}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p>{event.description}</p>
      <Button variant="contained" onClick={() => setOpen(true)}>Register</Button>

    
      <Dialog open={open} onClose={() => setOpen(false)} className="dialogbox" > 
            
        <DialogContent className="dialogcontent">
         <h2 >Register for {event.title}</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="eventform">
            <TextField
              label="Name"
              {...register("name", { required: true })}
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name ? "Name is required" : ""}
              className="eventinput"
              />
            <TextField
              label="Email"
              type="email"
              {...register("email", { required: true })}
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email ? "Email is required" : ""}
              className="eventinput"
            />
            <TextField
              label="Phone"
              type="tel"
              {...register("phone", { required: true })}
              fullWidth
              margin="normal"
              error={!!errors.phone}
              helperText={errors.phone ? "Phone number is required" : ""}
             className="eventinput"
            />
            <TextField
              label="Club"
              defaultValue={event.club}
              {...register("club", { required: true })}
              fullWidth
              margin="normal"
              error={!!errors.club}
              helperText={errors.club ? "Club name is required" : ""}
             className="eventinput"
            />
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="secondary" className="eventcancelbutton">Cancel</Button>
              <Button type="submit" color="primary" className="eventsubmitbutton">Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
          
      </Dialog>
    </div>
  );
};
const Events = () => {
  return (
    <div>
      <h1 className="gg">College Club Association Events</h1>
      <div className="events-container">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;