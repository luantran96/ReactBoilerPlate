import React from 'react';
import { StaggeredMotion, Motion, spring } from 'react-motion';
import About from './About.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollUp: false,
    };
  }
  // {opacity: spring(1, {stiffness: 4, damping: 1}), 
  // y: spring(0, {stiffness: 140, damping: 30})

  render() {
    let { scrollUp } = this.state;
    return (
      <div id="home">
        <StaggeredMotion
        defaultStyles={[ {opacity: 0, y: 0}, {opacity: 0} ]} // starting style
        styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
          return i === 0
            ? {opacity: spring(1, {stiffness: 14, damping: 6})}
            : {opacity: spring(prevInterpolatedStyles[i - 1].opacity, {stiffness: 14, damping: 6})}
        })
        }  
        >
        {interpolatingStyles => (
          <div id="header">
            {interpolatingStyles.map((style, i) => {
              return i === 0 ?
              <div key={i} style={{opacity: style.opacity}}>Welcome</div> : <div key={i} style={{opacity: style.opacity}}>My name is Luan</div>
            })}
          </div>
        )}
        </StaggeredMotion>
        <div className="down-button"> </div>
      </div>
    );
  }
}

export default Home;