import React from 'react';
import Typed from 'react-typed';
import anime from 'animejs';
import Particles from './Particles.jsx';
import Projects from './Projects.jsx';


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
        this.setState({ render: true });

        anime({
          targets: '.to-render',
          opacity: 1,
          easing: 'easeInOutQuad',
          duration: 500,
        });
      }
    });

	}

	render() {
    let { render } = this.state;
		return (
			<>
				<div id='about'>
					<div id='about-content1'>
						 <div className='about-content1-left-block'>
							<div id='about-text1'>
								<span className='text-bold size-xxl'>
									LUAN TRAN
								</span>  	
                <div ref={this.ref} className='job-title'>		
								</div>
								{render && <div className="to-render"> <div className='margin-t'>
									<span className='size-xxl'>
										{' '}
										I love to {' '}
									</span>
									<span className='size-xxl'>
										<Typed
											strings={[' code.', 'break code.']}
											typeSpeed={40}
											backSpeed={40}
											backDelay={1000}
											loop
										/>
									</span>
               </div> </div> } 
							</div>
							{render && <div className="to-render"> <div className='about-text2'>
								<p className='skill-row-header'>
									<span className='text-bold-normal'>
										Front End:
									</span>
								</p>
								<div className='skill-row'>
									<div className='skill'>
										<img
											className='img'
											src='https://angular.io/assets/images/logos/angular/angular.png'
											alt='Angular'
										/>
										<div className='skill-text'>
											Angular
										</div>
									</div>
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
										<div className='skill-text'>
											Redux.js
										</div>
									</div>
									<div className='skill'>
										<img
											className='img'
											src='https://img.stackshare.io/service/1101/C9QJ7V3X.png'
											alt='Boostrap'
										/>
										<div className='skill-text'>
											Boostrap
										</div>
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
											src='https://www.styled-components.com/static/atom.png'
											alt='styledComponent'
										/>
										<div className='skill-text'>
											styled components
										</div>
									</div>
								</div>
								<p className='skill-row-header'>
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
										<div className='skill-text'>
											Node.js
										</div>
									</div>
									<div className='skill'>
										<img
											className='img'
											src='https://img.stackshare.io/service/1163/hashtag.png'
											alt='Express'
										/>
										<div className='skill-text'>
											Express.js
										</div>
									</div>
								</div>
								<p className='skill-row-header'>
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
										<div className='skill-text'>
											Postgres
										</div>
									</div>
									<div className='skill'>
										<img
											className='img'
											src='https://img.stackshare.io/service/1030/leaf-360x360.png'
											alt='Boostrap'
										/>
										<div className='skill-text'>
											MongoDB
										</div>
									</div>
									<div className='skill'>
										<img
											className='img'
											src='https://img.stackshare.io/service/1032/cassandra_small.png'
											alt='jQuery'
										/>
										<div className='skill-text'>
											Cassandra
										</div>
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
								<p class='skill-row-header'>
									<span className='text-bold-normal'>
										Deployment:
									</span>
								</p>
								<div className='skill-row'>
									<div className='skill'>
										<img
											className='img'
											src='https://agilealliance.org/wp-content/uploads/2015/05/Jenkins-You-Can-Take-th-Evening-Off.png'
											alt='Jenkins'
										/>
										<div className='skill-text'>
											Jenkins
										</div>
									</div>
									<div className='skill'>
										<img
											className='img'
											src='http://www.gcppodcast.com/images/logo_large.png'
											alt='Docker'
										/>
										<div className='skill-text'>GCP</div>
									</div>
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
										<div className='skill-text'>
											Amazon EC2
										</div>
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
							</div> </div> }
							{render && <div className="to-render"><p class='contact'>
								You can contact me at{' '}
								<a
									href='mailto:luan.p.tran@gmail.com'
									target='_blank'
								>
									luan.p.tran@gmail.com
								</a>
								, visit my{' '}
								<a
									href='http://linkedin.com/in/luanptran'
									target='_blank'
								>
									LinkedIn profile
								</a>
								, or visit my{' '}
								<a
									target='_blank'
									href='http://github.com/luantran96/'
								>
									Github.
								</a> 
                </p> </div>}   
						</div> 
              <Particles />
					</div>
				</div>
				<Projects />
			</>
		);
	}
}

export default About;
