import React from 'react';
import { Link } from 'react-router-dom'; 
import './home.css';
import img2 from '../../assets/img2.jpg'
import img1 from '../../assets/img1.jpg'

function HomePage() {
  return (
    <div>
      <section className="banner">
        <header className="sticky">
          <div className="container">
            <div className="col-3">
            <a href="http://localhost:3000/">
                    <h2 className="logo">BrainDrafts</h2>
                    </a>
            </div>
            <div className="col-6">
            <ul className="nav">
            <li className='home'><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
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
        <div className="col-6">
          <div className="content">
            <h1 className="heading">Unleash Your Imagination<br /> with Brain Drafts</h1>
            <p className="p1">Here your Ideas Take Shape! In a world bursting with information and inspiration, we understand that capturing your thoughts, ideas, and inspirations should be as seamless as your creative process.</p>
            <Link to="/signup"><button className="btn" style={{ float: 'left' }}>Get Started</button></Link>
            <div className="clearfix"></div>
            <br /><br /><br /><br />
          </div>
        </div>
        
        <div className="clearfix"></div>
      </section>
      <section className='white'>
        <br /><br /><br /><br />
        <div className="container">
          <h2 className="heading-2">Our All Features You Can Get</h2>
          <p className="p2">We will provide some of the best features</p>
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
      <section className="green-sec">
        <br /><br /><br /><br />
        <div className="container">
          <div className="col-6">
            <img src={img2} className="com-p" alt="com-1" />
          </div>
          <div className="col-6">
            <h2 className="heading-4">Revolutionize Your Ideas<br /> with BrainDrafts</h2>
            <br />
            <p className="p5">Experience note-taking like never before. BrainDrafts empowers your creativity, making it easy to capture and organize your thoughts. Elevate your ideas and stay organized effortlessly.</p>
            <Link to="/signup"> <button className="btn" style={{ float: 'left' }}>Register Now!</button></Link>
          </div>
          <div className="clearfix"></div>
          <br /><br /><br /><br />
        </div>
      </section>
      
      <section className='white'>
        <br /><br /><br /><br />``
        <div className="container">
          <div className="col-6">
          </div>
          <div className="col-6">
            <h2 className="heading-4">Unlock the Extraordinary <br />Benefits of BrainDrafts</h2>
            <br />
            <p className="p5">Why settle for ordinary when you can have an app that enhances creativity and simplifies organization? Elevate your productivity and bring your ideas to life seamlessly because your thoughts deserve the best platform.</p>
            <Link to="/signup"> <button className="btn" style={{ float: 'left' }}>Register Now!</button></Link>
            <br />

          </div>
          <div className='col-6'>
            <img src={img1} className="com-p" alt="com-1" style={{ float: 'right' }} />
          </div>
          <div className="clearfix"></div>
          <br /><br /><br /><br />
        </div>
      </section>
      <section className="foot-sec">
        <br /><br />
        <div className="container">
          <div className="col-3">
            <ul className="foot-menu">
              <li><h2 className="logo">BrainDrafts</h2></li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="foot-menu">
              <li><a href="#"><strong>About</strong></a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">New</a></li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="foot-menu">
              <li><a href="#"><strong>Company</strong></a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">New</a></li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="foot-menu">
              <li><a href="#"><strong>Support</strong></a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">New</a></li>
            </ul>
          </div>
         
          <div className="clearfix"></div>
          <hr />
          <p className="copy">&copy;Copyright 2023 Designed by BrainDrafts</p>
          <br />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
