import React, { useState, useEffect } from 'react';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ notes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [sortDirection, setSortDirection] = useState('desc');

  useEffect(() => {
    // Filter notes based on the search term
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
     // Sort notes based on creation date
     const sorted = filtered.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setFilteredNotes(filtered);
  }, [searchTerm, notes,, sortDirection]);

  const handleDelete = async (noteId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3001/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log(response,'Note deleted successfully');
        // Refresh the page to reflect the changes
        window.location.reload();
      } else {
        console.error('Failed to delete note');
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };
  // const handleSort = () => {
  //   setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  // };
  return (
    <section>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search Note Title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      {/* <div className="sort-icons">
            <FontAwesomeIcon
              icon={faSortUp}
              onClick={handleSort}
              className={sortDirection === 'asc' ? 'active' : ''}
            />
            <FontAwesomeIcon
              icon={faSortDown}
              onClick={handleSort}
              className={sortDirection === 'desc' ? 'active' : ''}
            />
          </div> */}


      <div className='flex-box'>
        {filteredNotes.map((note) => (
          <div className='card' key={note._id}>
            {/* <h3>Note</h3> */}
            <p className='title'><b>Title: </b>{note.title}</p>
            <p className='description'><b>Description: </b>{note.description}</p>
            <span className='time'>{new Date().toLocaleString()}</span>
            {/* <span>{note.Date()}</span> */}
            {/* Use the note's ID in the URL */}
            {/* Add Font Awesome icons for archive and delete */}
            <div className='card-icons'>

              <button class="button button4"  onClick={() => handleDelete(note._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;