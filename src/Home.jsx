import React from 'react';
import { StaggeredMotion, Motion, spring } from 'react-motion';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollUp: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    console.log(window.pageYOffset);
    let y = window.pageYOffset;

    if(y >= 4) {
      this.setState({ scrollUp: true });
    }

    if(y === 0) {
      this.setState({ scrollUp: false });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  render() {
    let { scrollUp } = this.state;

    return (
    <Motion
    defaultStyle={{y:0}}
    style= {{y: scrollUp ? spring(-1920, {stiffness: 14, damping: 7}) : spring(0,{stiffness: 14, damping: 7}) }}
    >
    {style => 
    <div id="home" 
        style={{transform: `translateY(${style.y}px)`}}
    >
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
            <div key={i} style={{opacity: style.opacity, 'fontSize': '25px', 'fontStyle': 'italic'}}>Hi, I'm </div> : <div key={i} style={{opacity: style.opacity}}><strong style={{'fontSize': '130%'}}>Luan Tran</strong></div>
          })}
        </div>
      )}
      </StaggeredMotion>
      {/* <div className="down-button"> </div> */}
    </div>
    }
    </Motion>
    );
  }
}

export default Home; 