import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import 'animate.css';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentDidMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  componentDidUpdate() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  
  toggleMenuVisibility = () => {
    var menuContainer = document.getElementById("menuContainer");
    var currentValue = menuContainer.style.visibility;

    if (currentValue != "visible"){
      menuContainer.style.visibility = "visible";
      menuContainer.style.opacity = 1;
      document.getElementById("menuDropdown").style.opacity = 1;
      document.getElementById("menuDropdown").style.pointerEvents= "all";
      document.getElementById("menuDropdownBackdrop").style.backdropFilter = "blur(5px)";
      document.getElementById("menuDropdownBackdrop").style.webkitBackdropFilter= "blur(5px)";
    }
    else {
      menuContainer.style.visibility = "hidden";
      menuContainer.style.opacity = 0;
      document.getElementById("menuDropdown").style.opacity = 0;
      document.getElementById("menuDropdown").style.pointerEvents= "none";
      document.getElementById("menuDropdownBackdrop").style.webkitBackdropFilter= "blur(0px)";
    }
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 850;

    if (isMobile){
      return (
        <div>
          <ul id="navBar" className='mobile'>
            <button id="menu" onClick={() => this.toggleMenuVisibility()}></button>
          </ul>
          <div id="menuContainer">
            <div id="menuDropdownBackdrop" onClick={() => this.toggleMenuVisibility()}/>
            <div id="menuDropdown">
              <a href="#welcome" onClick={this.toggleMenuVisibility}>Welcome </a>
              <a href="#education" onClick={this.toggleMenuVisibility}>Education</a>
              <a href="#awards" onClick={this.toggleMenuVisibility}>Awards</a>
              <a href="#skills" onClick={this.toggleMenuVisibility}>Skills</a>
              <a href="#projects" onClick={this.toggleMenuVisibility}>Projects</a>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <ul id="navBar">
          <a href="#projects"><li>Projects</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#awards"><li>Awards</li></a>
          <a href="#education"><li>Education</li></a>
          <a href="#welcome"><li>Welcome</li></a>
        </ul>
      );
    }
  } 
}

class Welcome extends React.Component {
  render() {
    return (
      <div id="welcome">
          <h1>Mark Sandland</h1>
          <h2>Computer Science Graduate</h2>
          <h3>
            Hey, welcome to my website!<br/> 
            I'm a recent computer science graduate, with a diverse knowledge in full-stack development, app development, video game development and more!<br/>
            Please feel free to take a look around at some things I've made.
          </h3>
          <a href="https://www.linkedin.com/in/mark-sandland/" target="_blank" id="linkedin" alt="linked in"/>
          <a href="https://codepen.io/marksandland" target="_blank" id="codepen" alt="codepen"/>
          <a href="https://github.com/marksandland" target="_blank" id="github" alt="github"/>
          <a href="mailto:marksandland22@gmail.com" target="_blank" id="email" alt="email"/>
      </div>
    );
  }
}

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      revealed: false,
    };
  }
  setRevealed(r) {
    this.setState({ revealed: r });
  }
  render() {
    const { revealed } = this.state;
    return (
        <div id="projects">
            <Fade duration={1000} onReveal={ () => this.setRevealed(true)}>
              <Slide top duration={1000}>
                <h1>Some things I've made</h1>
              </Slide>
            </Fade>

            <Fade delay={500} duration={5000} when={revealed} force>
                <div>
                  <h2>Project Management Simulation Game - Unity Game - <a href="https://marksandland.itch.io/software-development-fantasy" target="_blank">Download on itch.io</a></h2>
                  <h4>
                    This work was completed as my third year university project for which I was awarded a 1st!<br/> 
                    The game is intended to be a fun way for players to gain an experience of what it is like to be a project manager in the software development industry featuring resource management, client and team meetings and events such as employee conflicts and feature issues. Also, the player is resposible for maintaining the company by managing funds and hiring/organising employees.<br/>
                  </h4>
                </div>
            </Fade>

            <Fade delay={1000} duration={5000} when={revealed} force>
                <div>
                  <h2>Amongst the Stars - Unity Game - <a href="https://marksandland.itch.io/amongst-the-stars" target="_blank">Download on itch.io</a></h2>
                  <h4>
                    This is a platformer game I was working on back in 2019.<br/> 
                    The game features levels to complete, enemies to defeat using the hero's sword or gun, upgrades, outfits and an endless scroller mode. Future plans for the game include a revision to the melee combat and improved level design.<br/>
                  </h4>
                </div>
            </Fade>

            <Fade delay={1500} duration={5000} when={revealed} force>
                <div>
                  <h2>Online Diary Desktop App Prototype - <a href="https://github.com/marksandland/Diary-Desktop-Web-App-Prototype" target="_blank">View on GitHub</a></h2>
                  <h4>
                    This is a prototype I made for an online diary web app.<br/> 
                    The app is created with HTML, CSS and vanilla JS.<br/>
                  </h4>
                </div>
            </Fade>

            <Fade delay={2000} duration={5000} when={revealed} force>
                <div>
                  <h2>Personal Website</h2>
                  <h4>
                    This is the website you are on right now!<br/> 
                    It was developed using react.js and I began this around the time of my graduation as a fun project to practise my front-end development skills and showcase a few of my personal projects.
                    I used this project as an opportunity to learn and use react.js for the very first time and I plan to indefinitely improve and update it.<br/>
                  </h4>
                </div>
            </Fade>
        </div>
    );
  }
}

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      revealed: false,
    };
  }
  setRevealed(r) {
    this.setState({ revealed: r });
  }
  render() {
    const { revealed } = this.state;
    return (
        <div id="education">
            <Fade duration={1000} onReveal={ () => this.setRevealed(true)}>
              <Slide top duration={1000}>
                <h1>Education</h1>
              </Slide>
            </Fade>

            <Fade delay={500} duration={5000} when={revealed} force>
                <div>
                  <h2>BSc, Computer Science - 1st class honours </h2><h4>University of Leicester<br/>September 2019 - June 2022</h4>
                </div>
            </Fade>

            <Fade delay={1000} duration={5000} when={revealed} force>
                <div>
                  <h2>A-Level Computer Science, Mathematics and Physics</h2>
                  <h4>Landau Forte Academy Tamworth Sixth Form<br/>September 2017 - June 2019</h4>
                </div>
            </Fade>
        </div>
    );
  }
}

class Awards extends React.Component {
  constructor() {
    super();
    this.state = {
      revealed: false,
    };
  }
  setRevealed(r) {
    this.setState({ revealed: r });
  }
  render() {
    const { revealed } = this.state;
    return (
        <div id="awards">
            <Fade duration={1000} onReveal={ () => this.setRevealed(true)}>
              <Slide top duration={1000}>
                <h1>Awards</h1>
              </Slide>
            </Fade>

            <Fade delay={500} duration={5000} when={revealed} force>
                <div>
                  <h2>Computer Science Departmental Prize 2021</h2>
                  <h4>University of Leicester - July 2022<br/>Awarded to the best second-year computer science student.</h4>
                </div>
            </Fade>

            <Fade delay={1000} duration={5000} when={revealed} force>
                <div>
                  <h2>The Leicester Gold Award</h2>
                  <h4>University of Leicester - October 2021<br/>"The Leicester Award Gold is a career development programme delivered in conjunction with the Software engineering project, CO2201 module. Students
submit a tailored application, relating their strengths, transferable skills and motivations to a suitable opportunity. Through completing the Award, students
have demonstrated their commitment to professional development and enhanced skills in self-reflection, career planning, and commercial awareness".</h4>
                </div>
            </Fade>

            <Fade delay={1500} duration={5000} when={revealed} force>
                <div>
                  <h2>The Leicester Award</h2>
                  <h4>University of Leicester - January 2020<br/>"The Leicester Award is a personal development programme completed in conjunction with the CO1101 Computing fundamentals module. The workshops and assessment helps students develop their transferable skills, self-awareness and reflect on their experiences. Students successfully identify strengths, motivations and articulate their skills which is essential for any application process.
By completing the Leicester Award, they have demonstrated a reflective and critical approach to their personal development".</h4>
                </div>
            </Fade>
        </div>
    );
  }
}

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      revealed: false,
    };
  }
  setRevealed(r) {
    this.setState({ revealed: r });
  }
  render() {
    const { revealed } = this.state;
    return (
        <div id="skills">
            <Fade duration={1000} onReveal={ () => this.setRevealed(true)}>
              <Slide top duration={1000}>
                <h1>Skills</h1>
              </Slide>
            </Fade>

            <Fade delay={500} duration={5000} when={revealed} force>
                <div>
                  <h2>Video Game Development</h2>
                  <h4>- Unity Game Engine<br/>
                      - C#<br/>
                  </h4>
                </div>
            </Fade>

            <Fade delay={1000} duration={5000} when={revealed} force>
                <div>
                  <h2>Front-end Web Development</h2>
                  <h4>- HTML, CSS and JS<br/>
                      - React.js <br/>
                      - jQuery<br/>
                      - Ajax
                  </h4>
                </div>
            </Fade>

            <Fade delay={1500} duration={5000} when={revealed} force>
                <div>
                  <h2>Back-end Web Development</h2>
                  <h4>- Spring Boot Framework<br/>
                      - Java<br/>
                      - MySQL
                  </h4>
                </div>
            </Fade>

            <Fade delay={2000} duration={5000} when={revealed} force>
                <div>
                  <h2>App Development</h2>
                  <h4>- Android Studio<br/>
                      - Java<br/>
                      - SQLite
                  </h4>
                </div>
            </Fade>

            <Fade delay={2500} duration={5000} when={revealed} force>
                <div>
                  <h2>Other Skills</h2>
                  <h4>- Python<br/>
                      - Agile Methodologies (Scrum)<br/>
                      - Git Version Control<br/>
                      - Database Design, Normalisation and Implementation<br/>
                      - API Development<br/>
                      - Unit and Integration Testing<br/>
                      - Visual Basic<br/>
                      - Problem Solving<br/>
                      - Collaboration and Communication
                  </h4>
                </div>
            </Fade>
        </div>
    );
  }
}

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentDidMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 850;
    if (isMobile){
      return (
        <div id="main" className="mobile">
          <Welcome />
          <Education />
          <Awards />
          <Skills />
          <Projects />
          <div id='footer'><h3>&copy; Mark Sandland 2022 - <em>Have an issue or a comment about this site? Contact me at <a href="mailto:admin@msandland.com">admin@msandland.com</a></em></h3></div>
        </div>
      );
    }
    else {
      return (
        <div id="main">
          <Welcome />
          <Education />
          <Awards />
          <Skills />
          <Projects />
          <div id='footer'><h3>&copy; Mark Sandland 2022 - <em>Have an issue or a comment about this site? Contact me at <a href="mailto:admin@msandland.com">admin@msandland.com</a></em></h3></div>
        </div>
      );
    }
  } 
}

class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 850;
    if (isMobile) {
      return (
        <div id="wrapper" className="mobile">
          <NavBar />
          <Main />
        </div>
      )
    }
    else {
      return (
        <div id="wrapper">
          <NavBar />
          <Main />
        </div>
      )
    }
  }
}

class App extends React.Component {
  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.title = "Mark Sandland";

  }
  render(){
      return (
          <Wrapper />
      )
  }
}

export default App;
