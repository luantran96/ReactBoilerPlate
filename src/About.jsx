import React from 'react';
import Typed from 'react-typed';
import anime from 'animejs';
import Particles from './Particles';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import Experiences from './Experiences';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      render: false,
      renderText: false,
    };

    this.ref = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const y = window.pageYOffset;

    if (y >= 4) {
      this.setState({ renderText: true });
    }

    if (y === 0) {
      this.setState({ renderText: false });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    anime({
      targets: this.ref.current,
      width: '381px',
      easing: 'easeInOutQuad',
      duration: 1500,
      complete: () => {
        this.ref.current.innerText = 'SOFTWARE ENGINEER @ PwC NEW VENTURES';
        // this.setState({ render: true });

        anime({
          targets: '.to-render',
          opacity: 1,
          easing: 'easeInOutQuad',
          duration: 500,
        });
      },
    });
  }

  render() {
    let { render } = this.state;
    return (
      <>
        <div id="about">
          <div id="about-content1">
            <div className="about-content1-left-block">
              <div id="about-text1">
                <span className="text-bold size-xxl">LUAN TRAN</span>
                <div ref={this.ref} className="job-title"></div>
                <div className="margin-t to-render">
                  <span className="size-xxl"> I </span>
                  <span className="size-xxl">
                    <Typed
                      strings={[' code.', 'break code.']}
                      typeSpeed={40}
                      backSpeed={40}
                      backDelay={1000}
                      loop
                    />
                  </span>
                </div>
              </div>
            </div>
            <Particles />
          </div>
        </div>
        <Projects />
        <Experiences />
        <Skills />
        <Footer />
      </>
    );
  }
}

export default About;
