import React, { useState } from 'react';
import './styles.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission, e.g., send data to the server
    };

    return (
        <div className='body2'>
            <section className="start">
                <header className="navbar">
                    <div className="container">
                        <div className="col-3">
                        <a href="http://localhost:3000/">
                    <h2 className="logo">BrainDrafts</h2>
                    </a>
                        </div>
                        <div className="col-6">
                            <ul className="nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="">Service</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-3">
                        <Link to="/signup"><button className="btn"> Register</button></Link>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                </header>
                <div className="text">
                    <div className="content">
                        <h2 className='headingg'>Contact Us</h2>
                        <p className='pp'>
                            We're thrilled to hear from you!
                        </p>
                        <p className='pp'>
                            At BrainDrafts, your feedback is invaluable to us. Please feel free to reach out , and we'll get back to you as soon as possible.
                        </p>

                        <div className="clearfix"></div>
                        <br /><br /><br /><br />
                    </div>
                </div>

                <div className="clearfix"></div>
            </section>

            <section className='main'>
                <div className="center2">
                    <h1 className='cc'>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="txt_field">
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={handleNameChange}
                            />
                            <span></span>
                            <label>Name</label>
                        </div>
                        <div className="txt_field">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <span></span>
                            <label>Email</label>
                        </div>
                        <div className="txt_field2">
                            <textarea
                                required
                                value={message}
                                onChange={handleMessageChange}
                            ></textarea>
                            <span></span>
                            {/* <label className='label2'>Message</label>
                             */}
                        </div>
                        <input type="submit" value="Submit" />
                        <div className="signup_link">
                            Thank you for contacting us!
                        </div>
                    </form>
                </div>
            </section>

            <section className="foot-sec2">
                <div className="container">
                    <div className="clearfix"></div>
                    <hr />
                    <p className="copy">&copy;Copyright 2023 Designed by BrainDrafts</p>
                    <br />
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
