import React from "react";
import './Events.css'
import { Button } from "@mui/material";

const events = [
  {
    id: 1,
    title: "Tech Talk: Future of AI",
    club: "Club 1",
    date: "April 28, 2025",
    time: "2:00 PM - 4:00 PM",
    venue: "Auditorium A",
    description: "Explore the impact of Artificial Intelligence in our daily lives with guest speaker Dr. Mehta.",
    image: "data:image/jpeg;base64,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",
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
const EventCard = ({ event }) => (
  
  <div className="event-card">
    <img src={event.image} alt={event.title} className="event-image" />
    <h2 className="title">{event.title}</h2>
    <p className="para"><strong>Club:</strong> {event.club}</p>
    <p className="para"><strong>Date:</strong> {event.date}</p>
    <p className="para"><strong>Time:</strong> {event.time}</p>
    <p className="para"><strong>Venue:</strong> {event.venue}</p>
    <p className="para">{event.description}</p>
    <Button variant="contained">Register</Button>
  </div>
);

const Events = () => {
  return (
    <div>  
      <h1 className="gg">College Club Association Events</h1> <br/>
      <div className="events-container">  
        {events.map(event => (
          <EventCard key={event.id} event={event} />     
        ))}
      </div>
    </div>  
  )
}

export default Events;