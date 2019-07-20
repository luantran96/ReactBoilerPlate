import React from 'react';
import Typed from 'react-typed';
import Particles from './Particles.jsx';

class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			renderText: false,
		};

		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		let y = window.pageYOffset;

		if (y >= 4) {
			this.setState({ renderText: true });
		}

		if (y === 0) {
			this.setState({ renderText: false });
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	render() {
		let { renderText } = this.state;

		return (
			<>
				<Particles />
				<div id='about'>
					<div id='about-content1'>
						<div className='about-content1-left-block'>
							<div id='about-text1'>
								<span className='text-bold .size-s'>
									Things about me:
								</span>
								<div className='margin-t'>
									<span className='size-xxl'>
										{' '}
										I love to{' '}
									</span>
									<span className='size-xxl'>
										<Typed
											strings={[' code', 'break code']}
											typeSpeed={40}
											backSpeed={40}
											backDelay={1000}
											loop
										/>
									</span>
								</div>
							</div>
						</div>
						<div className='about-content1-right-block'>
							<p>
								<span className='text-bold-normal'>
									Front End:
								</span>
							</p>
							<div className='skill-row'>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/1020/OYIaJ1KK.png'
										alt='React'
									/>
									<div className='skill-text'>React</div>
								</div>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/4074/redux.png'
										alt='Redux'
									/>
									<div className='skill-text'>Redux.js</div>
								</div>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/1101/C9QJ7V3X.png'
										alt='Boostrap'
									/>
									<div className='skill-text'>Boostrap</div>
								</div>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/1021/jquery_avatar.png'
										alt='jQuery'
									/>
									<div className='skill-text'>jQuery</div>
								</div>
								<div className='skill'>
									<img
										className='img'
										src='./styledComponents.png'
										alt='styledComponent'
									/>
									<div className='skill-text'>
										styled components
									</div>
								</div>
							</div>
							<p>
								<span className='text-bold-normal'>
									Back End:
								</span>
							</p>
							<div className='skill-row'>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/1011/GWnVTc9j.png'
										alt='Node'
									/>
									<div className='skill-text'>Node.js</div>
								</div>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/1163/hashtag.png'
										alt='Express'
									/>
									<div className='skill-text'>Express.js</div>
								</div>
							</div>
							<p>
								<span className='text-bold-normal'>
									Database:
								</span>
							</p>
							<div className='skill-row'>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/1025/logo-mysql-170x170.png'
										alt='React'
									/>
									<div className='skill-text'>mySQL</div>
								</div>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/1028/ASOhU5xJ.png'
										alt='Redux'
									/>
									<div className='skill-text'>Postgres</div>
								</div>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/1030/leaf-360x360.png'
										alt='Boostrap'
									/>
									<div className='skill-text'>MongoDB</div>
								</div>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/1032/cassandra_small.png'
										alt='jQuery'
									/>
									<div className='skill-text'>Cassandra</div>
								</div>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/1031/redis.png'
										alt='styledComponent'
									/>
									<div className='skill-text'>Redis</div>
								</div>
							</div>
							<p>
								<span className='text-bold-normal'>
									Deployment:
								</span>
							</p>
							<div className='skill-row'>
								<div className='skill'>
									<img
										className='img'
										src='https://xebialabs.com/wp-content/uploads/2018/10/docker.jpg'
										alt='Docker'
									/>
									<div className='skill-text'>Docker</div>
								</div>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/18/amazon-ec2.png'
										alt='Amazon EC2'
									/>
									<div className='skill-text'>Amazon EC2</div>
								</div>
								<div className='skill'>
									<img
										className='img'
										src='https://img.stackshare.io/service/133/3wgIDj3j.png'
										alt='Boostrap'
									/>
									<div className='skill-text'>Heroku</div>
								</div>
							</div>
						</div>
					</div>
					<div id='about-content2'>
						<div id='about-text'>
							<span className='text-bold'>Projects</span>
							<p>
								"Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est
								laborum."
							</p>
						</div>
						{/* <div id='footer'>
						<a href='http://github.com/luantran96/'>
							<img src='./github.png' />
						</a>
						<a href='https://www.linkedin.com/in/luanptran/'>
							<img src='./linkedin.png' />
						</a>
						<a href='#'>
							<img src='./resume.png' />
						</a>
					</div> */}
					</div>
				</div>
			</>
		);
	}
}

export default About;
