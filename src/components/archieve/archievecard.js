import React from 'react';
import './archievecard.css';
import { Link } from 'react-router-dom';

const ArchieveCard = ({ archivedNote }) => {
  // Check if archivedNote is defined
  if (!archivedNote) {
    // If not defined, return a message or handle it accordingly
    return <p>No archived note available.</p>;
  }
  console.log(archivedNote,'aaa')

  return (
    <div className='flex-box'>
      <div className='card' key={archivedNote._id}>
        <h3>Note</h3>
        <p className='title'>{archivedNote.title}</p>
        <p className='description'>{archivedNote.description}</p>
        {/* Use the note's ID in the URL */}
        <Link to={`/notes/${archivedNote._id}`} className='aa'>
          Read More
        </Link>
        {/* Add Font Awesome icons for archive and delete */}
        <div className='card-icons'>
          <i className='fa fas fa-archive'></i> {/* Archive icon */}
          <i className='fa fas fa-trash'></i> {/* Delete icon */}
        </div>
      </div>
    </div>
  );
};

export default ArchieveCard;
