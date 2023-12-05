import React from 'react';
import './workplace.css';
import Card from '../card/card'
import { useNavigate } from 'react-router-dom';
const Workplace = ({ notes }) => {
    const navigate = useNavigate();


    const handleLogout = () => {
        // Clear the authentication token (replace 'token' with your actual token key)
        localStorage.removeItem('token');

        // Redirect to the home page after logout
        navigate('/');
    };
    const AddPage = () => {
        navigate('/addNote')
    }
    return (
        <div className='full'>

            <div className="area"></div>
            <button class="button-9" role="button" onClick={AddPage}>
                Add Note</button>
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
                    <a href={`http://localhost:3000/notes/archieve/${notes._id}`}>
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
                <h1 className='h1'>Notes</h1>
                <Card notes={notes} />
            </div>
        </div>
    );
};

export default Workplace;
