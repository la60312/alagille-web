import React from 'react';
import FlippingNumber from "./FlippingNumber";
import './ProjectDescription.css';
import Dashboard from './Dashboard';

function ProjectDescription() {
  return (
      <section id="project-description" className="ProjectDescription">
          <h2>Facilitate the early diagnosis of Alagille syndrome by facial image analysis</h2>
          <p>This section describes the whole project in detail.</p>
          <div className="dashboard">
              <div className="dashboard-item">
                  <h2>Patients</h2>
                  <FlippingNumber targetNumber={80} intervalSpeed={20}/>
              </div>
              <div className="dashboard-item">
                  <h2>Photos</h2>
                  <FlippingNumber targetNumber={121} intervalSpeed={10}/>
              </div>
              <div className="dashboard-item">
                  <h2>Countries</h2>
                  <FlippingNumber targetNumber={10} intervalSpeed={50}/>
              </div>
          </div>
      </section>
  );
}

export default ProjectDescription;