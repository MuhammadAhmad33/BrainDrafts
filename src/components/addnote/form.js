// AddNoteForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './form.css';

const AddNoteForm = ({ fetchNotes }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/notes/createNote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Assuming the response is an array of notes
        // Call fetchNotes to update the notes in the parent component
        fetchNotes();
        navigate('/addnote');
      } else {
        console.error('Failed to add note');
      }
    } catch (error) {
      console.error('Error during note adding:', error);
    }

    // Reset the form after submission
    setTitle('');
    setDescription('');
};
  
  return (
    <section className='main'>
      <div className="center">
        <h1>Add New Note</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span></span>
            <label>Title</label>
          </div>
          <div className="txt_field2">
            <input
                type='textarea'
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <label className="label2">Description</label>
          </div>
          <input type="submit" value="Add Note" />
        </form>
        <div className="signup_link">
          <Link to="/dashboard">Back to Notes</Link>
        </div>
      </div>
    </section>
  );
};

export default AddNoteForm;
