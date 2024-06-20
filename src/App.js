// src/App.js
import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="projects">
          <h1>Projects</h1>
          <Project 
            title="FIRE Calculator" 
            description="A web application to calculate the timeline for financial independence and early retirement."
            link="https://github.com/ethandCS/FIRE_Calculator"
          />
          {/* Add more Project components as needed */}
        </section>
        <section id="about">
          <h1>About</h1>
          <p>Hello! I'm Ethan Diaz, a software developer passionate about creating impactful projects. Welcome to my portfolio!</p>
          <p>Fun Fact: At the moment I love Boxing and Bluffing!</p>
          <div className="photo-gallery">
            <img src="/images/photo1.jpg" alt="Fun moment 1" />
            <img src="/images/photo2.jpg" alt="Fun moment 2" />
          </div>
        </section>
        <section id="contact">
          <h1>Contact</h1>
          <p>You can reach me at <a href="mailto:diazethan488@gmail.com">diazethan488@gmail.com</a>.</p>
          <p>Check out my profiles:</p>
          <ul>
            <li><a href="https://leetcode.com/u/ethan__diaz/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
            <li><a href="https://www.linkedin.com/in/ethan-diaz-b8326926a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
