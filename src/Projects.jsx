import React from 'react';
import Projectitem from './ProjectItem.jsx';

export default class Projects extends React.Component {
  state = {
    projects: [{
      name: 'Eaten.',
      desc: 'Food journal/ tracker application',
      img_url: 'https://hopping-couch-images.s3-us-west-1.amazonaws.com/Screen+Shot+2019-07-21+at+6.26.07+PM.png',
      demo_url: 'http://ec2-3-14-88-202.us-east-2.compute.amazonaws.com/',
    },
    // {
    //   name: 'Eaten.',
    //   desc: 'Food journal/ tracker application',
    //   demo_url: 'http://ec2-3-14-88-202.us-east-2.compute.amazonaws.com/',
    // },
    // {
    //   name: 'Eaten.',
    //   desc: 'Food journal/ tracker application',
    //   demo_url: 'http://ec2-3-14-88-202.us-east-2.compute.amazonaws.com/',
    // }
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