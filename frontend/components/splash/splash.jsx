import React from 'react';
import { Link } from 'react-router-dom'

const Splash = ({ currentUser, logout, login, history }) => {
  const sessionLinks = () => {

    const handleDemo = (e) => {
      const demo = {
        username: "demo",
        password: "demopassword123"
      }
      login(demo)
        .then(() => history.push('/library'));
    }

    return (
      <div className="splash-container">
        <nav className="splash-nav">
          <img className="splash-logo" src={window.tonifyWhiteURL} />
          <ul class="splash-links-container">
            <li><a href="https://github.com/pramirez23/Tonify" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/paul-ramirez-432786152/" target="_blank">LinkedIn</a></li>
            <li><span> | </span></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log in</Link></li>
          </ul>
        </nav>

        <main id="splash">
          <div id="tagline">
            <h1 id="tagline-1">Music is</h1>
            <h1 id="tagline-2">everything</h1>
          </div>

          <h4 id="sub-tagline">
            Millions of songs. No credit card needed.
          </h4>
          
          <button
            id="splash-demo-button"
            onClick={() => handleDemo()}>
            LOG IN AS A DEMO USER
          </button>
        </main>

        <footer id="splash-footer">
          <img className="splash-logo" src={window.tonifyWhiteURL} />
          <p id="tech-stack-title">Tech Stack</p>
          <ul id="Tech Stack">
            <li>HTML 3</li>
            <li>CSS 5</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Rails</li> 
          </ul>
        </footer>
      </div>
    )
  }


  const personalGreeting = () => (
    <div>
      <h2>Welcome back to Tonify, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Splash;
