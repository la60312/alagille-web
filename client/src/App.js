import React from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProjectDescription from './ProjectDescription';
import References from './References';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Screening for Alagille Syndrome by facial image analysis with artificial intelligence</h1>
      </header>
      <nav className="TableOfContents">
        <ul>
          <li><a href="#about-us">About us</a></li>
          <li><a href="#project-description">Project Description</a></li>
          <li><a href="#references">References</a></li>
        </ul>
      </nav>
      <main>
        <AboutUs />
        <ProjectDescription />
        <References />
      </main>
    </div>
  );
}

export default App;