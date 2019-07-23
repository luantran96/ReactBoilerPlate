import React, { Component } from 'react';

export default class Experiences extends Component {
  render() {
    return (
      <div className="experience">
        <h1>EXPERIENCE</h1>
        <div className="experience-item">
          <div className="experience-item-header">
            <h2>Software Engineer</h2>
            <div className="text-align-right">
              <p>San Francisco, CA</p>
              <p>June 2019 – Present</p>
            </div>
          </div>
          <ul className="experience-item-content">
            <li>Assembled and developed atmospheric robots and controllers</li>
            <li>
              Wrote testing procedures using Assembly and achieved 80% code
              coverage
            </li>
            <li>
              Assisted senior engineers with robot configuration at various
              customer’s locations and sped up the process by 25%
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="experience-item-header">
            <h2>Project Engineering Intern</h2>
            <div className="text-align-right">
              <p>Milpitas, CA</p>
              <p>July 2017 – August 2017 • 2 months</p>
            </div>
          </div>
          <ul className="experience-item-content">
            <li>Assembled and developed atmospheric robots and controllers</li>
            <li>
              Wrote testing procedures using Assembly and achieved 80% code
              coverage
            </li>
            <li>
              Assisted senior engineers with robot configuration at various
              customer’s locations and sped up the process by 25%
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
