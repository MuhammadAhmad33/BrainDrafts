import React from 'react';
import './addnote.css';
import Form from './form.js'
import { Link } from 'react-router-dom';

const addNote = ({ fetchnotes }) => {
    return (
        <div className='full'>

            <div className="area"></div>

            <nav className="main-menu">
                <a href="http://localhost:3000/dashboard">
                    <h2 className="logo">BrainDrafts</h2>
                    </a>
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
                        <a href="#">
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div>
                <h1 className='h1s'>Add Note</h1>
                <Form fetchNotes={fetchnotes} />
            </div>

        </div>
    );
};

export default addNote;
