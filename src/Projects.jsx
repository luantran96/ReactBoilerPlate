import React from 'react';
import Projectitem from './ProjectItem.jsx';

export default class Projects extends React.Component {
  state = {
    projects: [{
      name: 'Eaten.',
      desc: 'Food journal/ tracker application',
      demo_url: 'http://ec2-3-14-88-202.us-east-2.compute.amazonaws.com/',
    },
    {
      name: 'Eaten.',
      desc: 'Food journal/ tracker application',
      demo_url: 'http://ec2-3-14-88-202.us-east-2.compute.amazonaws.com/',
    },
    {
      name: 'Eaten.',
      desc: 'Food journal/ tracker application',
      demo_url: 'http://ec2-3-14-88-202.us-east-2.compute.amazonaws.com/',
    }
  ]
  };

  renderProjects = () => {
    return this.state.projects.map(proj => {

      return (
        <Projectitem project= {proj} />
      );
    })
  }

  render() {
    return (
      <div className="projects">
        <h1>
          Projects
        </h1>
        <div className="projects-content">
          {this.renderProjects()}
        </div>
      </div>
    )
  }
}