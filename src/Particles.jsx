import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Canvas extends Component {
  constructor() {
    super();
    console.log(`${window.innerWidth / 2}px`);
    console.log(`${window.innerHeight / 2}px`);

    this.state = {
      width: `${Math.ceil(window.innerWidth / 2)}px`,
      height: `${Math.ceil(window.innerHeight)}px`,
    };
  }

  render() {
    const { width, height } = this.state;
    return (
      <Particles
        className="particle-container"
        height={height}
        width={width}
        params={{
          fps_limit: 28,
          particles: {
            number: {
              value: 700,
              density: {
                enable: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 30,
              opacity: 0.4,
            },
            move: {
              speed: 1,
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 2,
                sync: false,
              },
              value: 0.4,
            },
          },
          polygon: {
            enable: true,
            scale: 1.5,
            type: 'inline',
            move: {
              radius: 10,
            },
            url: '/4IZ2-small-deer.2a0425af.svg',
            inline: {
              arrangement: 'equidistant',
            },
            draw: {
              enable: true,
              stroke: {
                color: 'rgba(255, 255, 255, .2)',
              },
            },
          },
          retina_detect: false,
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              bubble: {
                size: 10,
                distance: 80,
              },
            },
          },
        }}
        // params={{
        // 	fps_limit: 40,
        // 	particles: {
        // 		number: {
        // 			value: 950,
        // 			density: {
        // 				enable: false,
        // 			},
        // 		},
        // 		line_linked: {
        // 			enable: true,
        // 			distance: 40,
        // 			opacity: 0.4,
        // 		},
        // 		move: {
        // 			speed: 1,
        // 		},
        // 		opacity: {
        // 			anim: {
        // 				enable: true,
        // 				opacity_min: 0.05,
        // 				speed: 2,
        // 				sync: false,
        // 			},
        // 			value: 0.4,
        // 		},
        // 	},
        // 	polygon: {
        // 		enable: true,
        // 		scale: 2.3,
        // 		type: 'inline',
        // 		move: {
        // 			radius: 10,
        // 		},
        // 		url: '/4IZ2-small-deer.2a0425af.svg',
        // 		inline: {
        // 			arrangement: 'equidistant',
        // 		},
        // 		draw: {
        // 			enable: true,
        // 			stroke: {
        // 				color: 'rgba(17, 0, 20, 1)',
        // 			},
        // 		},
        // 	},
        // 	retina_detect: true,
        // 	interactivity: {
        // 		events: {
        // 			onresize: {
        // 				enable: true,
        // 				density_auto: true,
        // 				density_area: 400,
        // 			},
        // 			onhover: {
        // 				enable: true,
        // 				mode: 'bubble',
        // 			},
        // 		},
        // 		modes: {
        // 			bubble: {
        // 				size: 12,
        // 				distance: 70,
        // 			},
        // 		},
        // 	},
        // }}
      />
    );
  }
}

export default Canvas;
