import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/library'));
  }

  handleDemo(e) {
    e.preventDefault();
    const demo = {
      username: "demo",
      password: "demopassword123"
    }
    this.props.login(demo)
      .then(() => this.props.history.push('/library'));
  }

  render() { 
    return (
      <div className="login">

        <Link to="/">
          <img id="login-logo" src={window.tonifyBlackURL} />
        </Link>

        <span id="header-border"></span>
        <h2 id="login-form-heading">To continue, log in to Tonify.</h2>
       
        <div id="login-error-container">
          {this.props.errors[0] ? <div className="login-error-message">{this.props.errors[0]}</div> : null}
        </div>

        <form className="session-form" onSubmit={this.handleSubmit}>

          <div className="form-input-container">
            <p className="form-prompt">Username</p>
                <input
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleInput('username')}
                className={this.props.errors[0] ? "input-error" : "login-input"}
              />
          </div>

          <div className="form-input-container">
            <p className="form-prompt">Password</p>
                <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                className={this.props.errors[0] ? "input-error" : "login-input"}
              />
          </div>

          <button id="login-button" type="submit">LOG IN</button>

          <button
            id="demo-button-login"
            onClick={this.handleDemo}>
            LOG IN AS A DEMO USER
          </button>

          <div id="bottom-border"></div>

          <p id="signup-link-heading">Don't have an account?</p>

          <Link to="/signup">
            <button id="signup-button" type="button">SIGN UP FOR TONIFY</button>
          </Link>

        </form>
      </div>
    );
  }
}
 
export default Login;