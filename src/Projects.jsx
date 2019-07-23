import React, { useState } from 'react';
import Projectitem from './ProjectItem';
import ParticlesSnow from './ParticlesSnow';
import Modal from 'react-responsive-modal';

export default class Projects extends React.Component {
  state = {
    showModal: false,
    projects: [
      {
        name: 'Eaten.',
        desc: 'Food journal/ tracker application',
        img_url:
          'https://hopping-couch-images.s3-us-west-1.amazonaws.com/Screen+Shot+2019-07-21+at+6.26.07+PM.png',
        demo_url: 'http://ec2-3-14-88-202.us-east-2.compute.amazonaws.com/',
      },
    ],
  };

  onOpenModal = () => {
    this.setState({ showModal: true });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  renderProjects = () => {
    return this.state.projects.map(proj => {
      return (
        <div onClick={this.onOpenModal}>
          <Projectitem project={proj} />
        </div>
      );
    });
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="projects">
        <ParticlesSnow />
        <h1>PROJECTS</h1>
        <div className="projects-content">{this.renderProjects()}</div>
        <Modal open={showModal} onClose={this.onCloseModal} center>
          <div className="font-black modal-content">
            <h2> Simple centered modal </h2>
          </div>
        </Modal>
      </div>
    );
  }
}
