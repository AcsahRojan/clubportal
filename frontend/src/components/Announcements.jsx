import React, { useState, useEffect } from "react";
import "./Announcements.css";
import { TextField,Paper } from "@mui/material";
import axios from "axios";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/announcementinfo") 
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []);

  const filteredAnnouncements = announcements.filter((item) => {
    return selectedDate === "" || item.date === selectedDate;
  });

  return (
    <div className="announcement-container">
      <h1 className="announcement-title">Announcements</h1>

      <div style={{ marginBottom: "20px", textAlign: "right" }}>
        <TextField
         variant="standard"
          type="date"
          label="Filter by date:"
          InputLabelProps={{ shrink: true }}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="announcement-list">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((item, index) => (
            <div className="announcement-card" key={index}>
              <div className="announcement-header">
                <div>
                  <h2 className="club-name">{item.club}</h2>
                  <span className="announcement-category">{item.category}</span>
                </div>
              </div>
              <p className="announcement-message">{item.message}</p>
              <p className="announcement-date">📅 {item.date}</p>
              <p className="announcement-time">⏰ {item.time}</p>
              <p className="announcement-contact">📧 {item.contact}</p>
            </div>
          ))
        ) : (
          
          <p style={{ textAlign: "center" }}>No announcements found for selected date.</p>
        
        )}
      </div>
    </div>
  );
};

export default Announcement;