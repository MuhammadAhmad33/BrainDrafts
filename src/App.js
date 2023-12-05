import './App.css';
import React, { useState,useEffect } from 'react';
import HomePage from './components/homepage/homePage'
import Login from './components/login/login'
import Signup from './components/signup/signup';
import About from './components/about/about'
import Contact from './components/contact us/contact'
import Dashboard from './components/workplace/workplace'
import AddNote from './components/addnote/addNote';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Archieve from './components/archieve/archieve';

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/notes/userNotes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNotes(data);
      } else {
        console.error('Failed to fetch notes');
      }
    } catch (error) {
      console.error('Error during note fetch:', error);
    }
  };
  useEffect(() => {
    // Call fetchNotes when the component mounts
    fetchNotes();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/dashboard" element={<Dashboard notes={notes} />}/>
            <Route path="/addNote" element={<AddNote fetchnotes={fetchNotes}/>} />
            <Route path="/notes/archieve/:id" element={<Archieve/>} />             
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
