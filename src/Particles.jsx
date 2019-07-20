import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Canvas extends Component {
	constructor() {
		super();
		this.state = { width: '800px', height: '910px' };
	}

	render() {
		const { width, height } = this.state;
		console.log(width, height);
		return (
			<Particles
				className='particle-container'
				height={height}
				width={width}
				params={{
					fps_limit: 40,
					particles: {
						number: {
							value: 950,
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
								size: 12,
								distance: 70,
							},
						},
					},
				}}
			/>
		);
	}
}

export default Canvas;
