import React from 'react';
import { Motion, spring } from 'react-motion';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderText: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    console.log(window.pageYOffset);
    let y = window.pageYOffset;

    if(y >= 4) {
      this.setState({ renderText: true });
    }

    if(y === 0) {
      this.setState({ renderText: false });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {

    let { renderText } = this.state;

    const SVG = (
      <svg version="1.1" id="Calque_2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 635.3 844.6" enableBackground="new 0 0 635.3 844.6">
      <path id="z0" fill="none" stroke="#010202" strokeWidth="20" strokeLinejoin="round" strokeMiterlimit="10" d="M259.3,834.6
        c0,0-93.9,4.9-142.4-74c-25.5-41.5-27-117-27-117l0.5-143.5c0,0-1-65-80.3-77.7l0,0c79.3-12.7,79.9-77.7,79.9-77.7l-0.5-143.5
        c0,0,1.5-75.5,27-117c48.5-78.9,142.4-74,142.4-74" style={{'strokeDasharray': 1107.41, 'strokeDashoffset': 0}} />
      <path id="z1" fill="none" stroke="#010202" strokeWidth="20" strokeLinejoin="round" strokeMiterlimit="10" d="M376,834.6
        c0,0,93.9,4.9,142.4-74c25.5-41.5,27-117,27-117l-0.5-143.5c0,0,1-65,80.3-77.7l0,0c-79.3-12.7-79.9-77.7-79.9-77.7l0.5-143.5
        c0,0-1.5-75.5-27-117c-48.5-78.9-142.4-74-142.4-74" style={{'strokeDasharray': 1107.41, 'strokeDashoffset': 0}}/>
    </svg>
    );

    return (
    <Motion
    defaultStyle={{opacity: 0}}
    style={{opacity: renderText ? spring(1, {stiffness: 10, damping: 6}) : spring(0, {stiffness: 10, damping: 6})}}
    >
      {style => 
        <div id="about" style={{opacity: style.opacity}}>
          <div id="about-content1">
            {SVG}
            <div id="about-text">
              <span className="text-light">FULL-STACK</span> <span className="text-bold">DEV</span>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>

              </div>
          </div>
          <div id="about-content2">
            <div id="about-text">
              <span className="text-bold">Projects</span>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>

              </div>
          </div>
        </div>
      }
    </Motion>
    );
  }
}

export default About;