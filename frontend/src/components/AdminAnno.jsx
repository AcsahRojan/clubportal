import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Announcements.css";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, Tabs, Tab, Box } from "@mui/material";

const AdminAnno = () => {
  const club = localStorage.getItem("userClub");
  const clubId = localStorage.getItem("userClubId");

  const [announcements, setAnnouncements] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    club: "",
    message: "",
    date: "",
    time: "",
    category: "",
    contact: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [tabIndex, setTabIndex] = useState(0); // State to track the active tab

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = () => {
    axios
      .get(`http://localhost:3000/announcementinfo`)
      .then((response) => setAnnouncements(response.data))
      .catch((error) => console.error("Error fetching announcements:", error));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      axios
        .patch(`http://localhost:3000/announcementinfo/${editingId}`, formData)
        .then(() => {
          fetchAnnouncements();
          handleCloseDialog();
        })
        .catch((error) => console.error("Error editing announcement:", error));
    } else {
      axios
        .post("http://localhost:3000/announcementinfo", formData)
        .then(() => {
          fetchAnnouncements();
          handleCloseDialog();
        })
        .catch((error) => console.error("Error adding announcement:", error));
    }
  };

  const handleOpenDialog = (announcement = null) => {
    if (announcement) {
      setFormData(announcement);
      setEditingId(announcement._id);
    } else {
      setFormData({
        club: club,
        message: "",
        date: "",
        time: "",
        category: "",
        contact: "",
      });
      setEditingId(null);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({
      club: "",
      message: "",
      date: "",
      time: "",
      category: "",
      contact: "",
    });
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      axios
        .delete(`http://localhost:3000/announcementinfo/${id}`)
        .then(() => fetchAnnouncements())
        .catch((error) => console.error("Error deleting announcement:", error));
    }
  };

  // Separate announcements into current club and other clubs
  const currentClubAnnouncements = announcements.filter((item) => item.club === club);
  const otherClubsAnnouncements = announcements.filter((item) => item.club !== club);

  return (
    <div className="announcement-container" >
      <h1 className="announcement-title"> Manage Announcements</h1>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenDialog()}
        style={{ marginBottom: "20px" }}
      >
        Add Announcement
      </Button>

      {/* Tabs for sectioning */}
      <Tabs
        value={tabIndex}
        onChange={(e, newValue) => setTabIndex(newValue)}
        indicatorColor="primary"
        textColor="primary"
        style={{ marginBottom: "20px" }}
      >
        <Tab label="Your Club Announcements" />
        <Tab label="Other Clubs Announcements" />
      </Tabs>

      {/* Tab Content */}
      <Box hidden={tabIndex !== 0}>
        <h2>Your Club Announcements</h2>
        <div className="announcement-list">
          {currentClubAnnouncements.map((item) => (
            <div className="announcement-card" key={item._id}>
              <div className="announcement-header">
                <div>
                  <h2 className="club-name">{item.category}</h2>
                  <span className="announcement-category">{item.club}</span>
                </div>
              </div>
              <p className="announcement-message">{item.message}</p>
              <p className="announcement-date">📅 {new Date(item.date).toLocaleDateString("en-US")}</p>
              <p className="announcement-time">
                ⏰{" "}
                {new Date(`1970-01-01T${item.time}`).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
              <p className="announcement-contact">📧 {item.contact}</p>

              {/* Edit and Delete buttons for current club */}
              <div style={{ marginTop: "10px" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => handleOpenDialog(item)}
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Box>

      <Box hidden={tabIndex !== 1}>
        <h2>Other Clubs Announcements</h2>
        <div className="announcement-list">
          {otherClubsAnnouncements.map((item) => (
            <div className="announcement-card" key={item._id}>
              <div className="announcement-header">
                <div>
                  <h2 className="club-name">{item.club}</h2>
                  <span className="announcement-category">{item.category}</span>
                </div>
              </div>
              <p className="announcement-message">{item.message}</p>
              <p className="announcement-date">📅 {new Date(item.date).toLocaleDateString("en-US")}</p>
              <p className="announcement-time">
                ⏰{" "}
                {new Date(`1970-01-01T${item.time}`).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
              <p className="announcement-contact">📧 {item.contact}</p>
            </div>
          ))}
        </div>
      </Box>

      {/* Dialog for Add/Edit Form */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>{editingId ? "Edit Announcement" : "Add Announcement"}</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              name="category"
              label="Category"
              value={formData.category}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              name="message"
              label="Description"
              value={formData.message}
              onChange={handleInputChange}
              fullWidth
              required
              multiline
              rows={4}
              margin="normal"
            />
            <TextField
              name="date"
              label="Date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              margin="normal"
            />
            <TextField
              name="time"
              label="Time"
              type="time"
              value={formData.time}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              margin="normal"
            />
            <TextField
              name="contact"
              label="Contact Email"
              value={formData.contact}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {editingId ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminAnno;