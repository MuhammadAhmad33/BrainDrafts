import React from 'react';
import { Link } from 'react-router-dom';

import './about.css'
const AboutPage = () => {
  return (
    <div className="about-container">
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
            <h2 className='headingg'>Our Story</h2>
            <p className='pp'>Welcome to BrainDrafts, where creativity knows no bounds. Our journey began with a simple idea - to create an intuitive platform for capturing and organizing your thoughts effortlessly.</p>            <button className="btn" style={{ float: 'left' }}>Get Started</button>
            <div className="clearfix"></div>
            <br /><br /><br /><br />
          </div>
          <h1 className='headingg2'>Why choose BrainDrafts?</h1>
          <p className='pp2'>BrainDrafts gives you everything you need to keep life organized—great note taking, project planning, and easy ways to find what you need, when you need it.</p>
        </div>

        <div className="clearfix"></div>
      </section>




      <section className='white'>

        <div className="container">
          <h1 className="heading-2">Key Features</h1>
          <br /> <br /><br />
          <div className="col-4">
            <div className="box">
              <br />
              <h2 className="heading-3">Effortless Note Creation</h2>
              <br />
              <p className="p3">Easily create, edit, and organize notes with our user-friendly interface.</p>
            </div>
          </div>

          <div className="col-4">
            <div className="box">
              <br />
              <h2 className="heading-3">Collaborative Sharing</h2>
              <br />
              <p className="p3">Collaborate real-time by sharing and editing notes with others.</p>
            </div>
          </div>
          <div className="col-4">
            <div className="box">
              <br />
              <h2 className="heading-3">Storage & Access</h2>
              <br />
              <p className="p3">Your drafts are stored safely and accessible anytime, anywhere.</p>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <br /><br />
      </section>


      <section className="foot-sec">

        <div className="container">
          <div className="clearfix"></div>
          <hr />
          <p className="copy">&copy;Copyright 2023 Designed by BrainDrafts</p>
          <br />
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
