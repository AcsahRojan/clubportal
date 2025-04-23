import React from "react";
import "./Announcements.css";

const announcements = [
  {
    club: "Club 1",
    message: "We are organizing a coding competition! Prizes for top 3 participants. Open to all branches.",
    date: "2025-04-25",
    time: "10:00 AM",
    category: "Competition",
    contact: "club1@college.edu"
  },
  {
    club: "Club 2",
    message: "Join our Web Dev workshop. Learn React & Node.js in 3 hours!",
    date: "2025-04-22",
    time: "2:00 PM",
    category: "Workshop",
    contact: "contact@club2.org"
  },
  {
    club: "Club 3",
    message: "Submit your entries for the Photography Contest before Saturday.",
    date: "2025-04-20",
    time: "All Day",
    category: "Contest",
    contact: "club3@photoclub.com"
  }
];

const Announcements = () => {
  return (
    <div className="announcement-container">
      <h1 className="announcement-title"> Announcements</h1>
      <div className="announcement-list">
        {announcements.map((item, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Announcements;