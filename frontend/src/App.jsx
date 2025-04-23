import React, { useState, useEffect }from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Memberdashboard from './components/Memberdashboard'
import Admindashboard from './components/Admindashboard'
import Announcements from './components/Announcements'
import Profile from './components/Profile'
import Events from './components/Events'
import Club1 from './components/Club1'
import Club2 from './components/Club2'
import Club3 from './components/Club3'
import Club4 from './components/Club4'
import Club5 from './components/Club5'
import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Enrollment from './components/Enrollment'
import './index.css'

const App = () => {
  const role = localStorage.getItem('userRole'); 
  return (
    <Router>
     
      {role === 'member' && <Header />}

      <Routes>       
        <Route path="/" element={<Login />} />
        {role === 'admin' && (
          <Route path="/admindashboard" element={<Admindashboard />} />
        )}        
        {role === 'member' && (
          <>
            <Route path="/memberdashboard" element={<Memberdashboard />} />
            <Route path="/events" element={<ProtectedRoutes><Events /></ProtectedRoutes>} />
            <Route path="/announcements" element={<ProtectedRoutes><Announcements /></ProtectedRoutes>} />
            <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
            <Route path="/club1" element={<ProtectedRoutes><Club1 /></ProtectedRoutes>} />
            <Route path="/club2" element={<ProtectedRoutes><Club2 /></ProtectedRoutes>} />
            <Route path="/club3" element={<ProtectedRoutes><Club3 /></ProtectedRoutes>} />
            <Route path="/club4" element={<ProtectedRoutes><Club4 /></ProtectedRoutes>} />
            <Route path="/club5" element={<ProtectedRoutes><Club5 /></ProtectedRoutes>} />
            <Route path="/enrollment" element={<ProtectedRoutes><Enrollment /></ProtectedRoutes>} />

          </>
        )}
      </Routes>
    </Router>
  )
}

export default App