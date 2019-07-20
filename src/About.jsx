import React from "react";
import { Motion, spring } from "react-motion";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderText: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    console.log(window.pageYOffset);
    let y = window.pageYOffset;

    if (y >= 4) {
      this.setState({ renderText: true });
    }

    if (y === 0) {
      this.setState({ renderText: false });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    let { renderText } = this.state;
    const SVG = (
      <svg
        version="1.1"
        id="Calque_2"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 635.3 844.6"
        enableBackground="new 0 0 635.3 844.6"
      >
        <path
          id="z0"
          fill="none"
          stroke="#010202"
          strokeWidth="20"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M259.3,834.6
        c0,0-93.9,4.9-142.4-74c-25.5-41.5-27-117-27-117l0.5-143.5c0,0-1-65-80.3-77.7l0,0c79.3-12.7,79.9-77.7,79.9-77.7l-0.5-143.5
        c0,0,1.5-75.5,27-117c48.5-78.9,142.4-74,142.4-74"
          style={{ strokeDasharray: 1107.41, strokeDashoffset: 0 }}
        />
        <path
          id="z1"
          fill="none"
          stroke="#010202"
          strokeWidth="20"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M376,834.6
        c0,0,93.9,4.9,142.4-74c25.5-41.5,27-117,27-117l-0.5-143.5c0,0,1-65,80.3-77.7l0,0c-79.3-12.7-79.9-77.7-79.9-77.7l0.5-143.5
        c0,0-1.5-75.5-27-117c-48.5-78.9-142.4-74-142.4-74"
          style={{ strokeDasharray: 1107.41, strokeDashoffset: 0 }}
        />
      </svg>
    );

    return (
      <Motion
        defaultStyle={{ opacity: 0 }}
        style={{
          opacity: renderText
            ? spring(1, { stiffness: 10, damping: 6 })
            : spring(0, { stiffness: 10, damping: 6 })
        }}
      >
        {style => (
          <div id="about" style={{ opacity: style.opacity }}>
            <div id="about-content1">
              {SVG}
              <div id="about-text1">
                <span className="text-light">About me</span>
                <ul>
                  <li>Dreams in Javascript</li>
                  <li>Tackles any challenge at hand</li>
                  <li>Eats literally anything</li>
                  <li>Aspiring bedroom DJ</li>
                </ul>
              </div>
              <div>
                <p>
                  <span className="text-bold-normal">Front End:</span>
                </p>
                <div className="skill-row">
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/1020/OYIaJ1KK.png"
                      alt="React"
                    />
                    <div className="skill-text">React</div>
                  </div>
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/4074/redux.png"
                      alt="Redux"
                    />
                    <div className="skill-text">Redux.js</div>
                  </div>
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/1101/C9QJ7V3X.png"
                      alt="Boostrap"
                    />
                    <div className="skill-text">Boostrap</div>
                  </div>
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/1021/jquery_avatar.png"
                      alt="jQuery"
                    />
                    <div className="skill-text">jQuery</div>
                  </div>
                  <div>
                    <img
                      class="img"
                      src="./styledComponents.png"
                      alt="styledComponent"
                    />
                    <div className="skill-text">styled components</div>
                  </div>
                </div>
                <p>
                  <span className="text-bold-normal">Back End:</span>
                </p>
                <div className="skill-row">
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/1011/GWnVTc9j.png"
                      alt="Node"
                    />
                    <div className="skill-text">Node.js</div>
                  </div>
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/1163/hashtag.png"
                      alt="Express"
                    />
                    <div className="skill-text">Express.js</div>
                  </div>
                </div>
                <p>
                  <span className="text-bold-normal">Database:</span>
                </p>
                <div className="skill-row">
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/1025/logo-mysql-170x170.png"
                      alt="React"
                    />
                    <div className="skill-text">mySQL</div>
                  </div>
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/1028/ASOhU5xJ.png"
                      alt="Redux"
                    />
                    <div className="skill-text">Postgres</div>
                  </div>
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/1030/leaf-360x360.png"
                      alt="Boostrap"
                    />
                    <div className="skill-text">MongoDB</div>
                  </div>
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/1032/cassandra_small.png"
                      alt="jQuery"
                    />
                    <div className="skill-text">Cassandra</div>
                  </div>
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/1031/redis.png"
                      alt="styledComponent"
                    />
                    <div className="skill-text">Redis</div>
                  </div>
                </div>
                <p>
                  <span className="text-bold-normal">Deployment:</span>
                </p>
                <div className="skill-row">
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/586/docker.png"
                      alt="React"
                    />
                    <div className="skill-text">Docker</div>
                  </div>
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/18/amazon-ec2.png"
                      alt="Redux"
                    />
                    <div className="skill-text">Amazon EC2</div>
                  </div>
                  <div>
                    <img
                      class="img"
                      src="https://img.stackshare.io/service/133/3wgIDj3j.png"
                      alt="Boostrap"
                    />
                    <div className="skill-text">Heroku</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="about-content2">
              <div id="about-text">
                <span className="text-bold">Projects</span>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
              <div id="footer">
                <a href="http://github.com/luantran96/">
                  <img src="./github.png" />
                </a>
                <a href="https://www.linkedin.com/in/luanptran/">
                  <img src="./linkedin.png" />
                </a>
                <a href="#">
                  <img src="./resume.png" />
                </a>
              </div>
            </div>
          </div>
        )}
      </Motion>
    );
  }
}

export default About;
