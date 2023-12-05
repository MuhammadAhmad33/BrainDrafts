
import React, { useState,useEffect} from 'react';

import ArchieveCard from './archievecard.js';
import './archieve.css'
import { useNavigate, useParams } from 'react-router-dom';
const Archieve = () => {
    const [archivedNotes, setArchivedNotes] = useState();
    const navigate = useNavigate();
    const params = useParams(); // Get the noteId from URL parameters
    const noteId=params.id;
    console.log(params)
    const handleArchiveClick = async (noteId) => {
        try {
          const token = localStorage.getItem('token');
          const response = await fetch(`http://localhost:3001/notes/archieve/${noteId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
      
          if (response.ok) {
            // Convert the response to JSON
            const data = await response.json();
            console.log(data)
            // Set the archived note in the state
            setArchivedNotes(data);
      
            console.log('Note archived successfully');
          } else {
            console.error('Failed to archive note');
          }
        } catch (error) {
          console.error('Error archiving note:', error);
        }
      };
    const handleLogout = () => {
        // Clear the authentication token (replace 'token' with your actual token key)
        localStorage.removeItem('token');

        // Redirect to the home page after logout
        navigate('/');
    };
    useEffect(() => {
        handleArchiveClick(noteId);
      }, [noteId]); // Re-run the effect whenever noteId changes
    
   
    return (
        <div className='full'>

            <div className="area"></div>
            {/* <button class="button-9" role="button" onClick={AddPage}>
                Add Note</button> */}
            <nav className="main-menu">
                <h2 className="logo">BrainDrafts</h2>
                <ul>
                    <li>
                        <a href="http://localhost:3000/dashboard">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">Workplace</span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="http://localhost:3000/dashboard">
                            <i class="fa fa-book fa-2x"></i>
                            <span className="nav-text">Notes</span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-archive fa-2x"></i>
                            <span className="nav-text">Archive</span>
                        </a>
                    </li>
                    <li className="has-subnav">
                        <a href="#">
                            <i className="fa fa-archive fa-2x"></i>
                            <span className="nav-text">Trash</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-tags fa-2x"></i>
                            <span className="nav-text">Tags</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-book fa-2x"></i>
                            <span className="nav-text">Surveying Jobs</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-cogs fa-2x"></i>
                            <span className="nav-text">Tools & Resources</span>
                        </a>
                    </li>

                </ul>
                <ul className="logout">
                    <li>
                        <a href="#" onClick={handleLogout}>
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
         

            <div>
                <h1 className='h1a'>Archieves</h1>
                <ArchieveCard archivedNotes={archivedNotes} />
            </div>
        </div>
    );
};

export default Archieve;
