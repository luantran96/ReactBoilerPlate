import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Canvas extends Component {
	constructor() {
		super();
		this.state = { width: '800px', height: '850px' };
	}

	render() {
		const { width, height } = this.state;
		console.log(width, height);
		return (
			<Particles
				// height= {height}
				// width= {width}
				// className='particle-container'
				// params={{
				// 	particles: {
				// 		number: {
				// 			value: 80,
				// 			density: {
				// 				enable: true,
				// 				value_area: 800,
				// 			},
				// 		},
				// 		color: {
				// 			value: '#ffffff',
				// 		},
				// 		shape: {
				// 			type: 'circle',
				// 			stroke: {
				// 				width: 0,
				// 				color: '#000000',
				// 			},
				// 			polygon: {
				// 				nb_sides: 5,
				// 			},
				// 			image: {
				// 				src: 'img/github.svg',
				// 				width: 100,
				// 				height: 100,
				// 			},
				// 		},
				// 		opacity: {
				// 			value: 0.5,
				// 			random: false,
				// 			anim: {
				// 				enable: false,
				// 				speed: 1,
				// 				opacity_min: 0.1,
				// 				sync: false,
				// 			},
				// 		},
				// 		size: {
				// 			value: 3,
				// 			random: true,
				// 			anim: {
				// 				enable: false,
				// 				speed: 40,
				// 				size_min: 0.1,
				// 				sync: false,
				// 			},
				// 		},
				// 		line_linked: {
				// 			enable: true,
				// 			distance: 150,
				// 			color: '#ffffff',
				// 			opacity: 0.4,
				// 			width: 1,
				// 		},
				// 		move: {
				// 			enable: true,
				// 			speed: 6,
				// 			direction: 'none',
				// 			random: false,
				// 			straight: false,
				// 			out_mode: 'out',
				// 			bounce: false,
				// 			attract: {
				// 				enable: false,
				// 				rotateX: 600,
				// 				rotateY: 1200,
				// 			},
				// 		},
				// 	},
				// 	interactivity: {
				// 		detect_on: 'canvas',
				// 		events: {
				// 			onhover: {
				// 				enable: true,
				// 				mode: 'repulse',
				// 			},
				// 			onclick: {
				// 				enable: true,
				// 				mode: 'push',
				// 			},
				// 			resize: true,
				// 		},
				// 		modes: {
				// 			grab: {
				// 				distance: 400,
				// 				line_linked: {
				// 					opacity: 1,
				// 				},
				// 			},
				// 			bubble: {
				// 				distance: 400,
				// 				size: 40,
				// 				duration: 2,
				// 				opacity: 8,
				// 				speed: 3,
				// 			},
				// 			repulse: {
				// 				distance: 200,
				// 				duration: 0.4,
				// 			},
				// 			push: {
				// 				particles_nb: 4,
				// 			},
				// 			remove: {
				// 				particles_nb: 2,
				// 			},
				// 		},
				// 	},
				// 	retina_detect: true,
				// }}

				className='particle-container'
				height={height}
				width={width}
				params={{
					fps_limit: 40,
					particles: {
						number: {
							value: 900,
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
						scale: 2.3,
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
								color: 'rgba(17, 0, 20, 1)',
							},
						},
					},
					retina_detect: true,
					interactivity: {
						events: {
							onresize: {
								enable: true,
								density_auto: true,
								density_area: 400,
							},
							onhover: {
								enable: true,
								mode: 'bubble',
							},
						},
						modes: {
							bubble: {
								size: 6,
								distance: 40,
							},
						},
					},
				}}
			/>
		);
	}
}

export default Canvas;
