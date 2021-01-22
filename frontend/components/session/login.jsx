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
    const demo = {
      username: "demo",
      password: "demopassword123"
    }
    this.props.login(demo)
      .then(() => this.props.history.push('/library'));
  }

  renderErrors() {
    const errors = this.props.errors.map( (error, i) => (
      <li key={i}>{error}</li>
    ));

    return (
      <ul className="errors">
        {errors}
      </ul>
    );
  }

  render() { 
    return (
      <div className="login">
        <h2 className="session-form-heading">To continue, log in to Tonify.</h2>
        <button
          className="demo-button"
          onClick={ () => this.handleDemo() }>
          Log in as a Demo User
        </button>
        <div className="login-errors">{this.renderErrors()}</div>
          <form className="session-form" onSubmit={this.handleSubmit}>
            <label>Username
                <input
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleInput('username')}
              />
            </label>
            <label>Password
                <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
            <button type="submit">Log In</button>
            <p className="signup-link-heading">Don't have an account yet?</p>
            <Link to="/signup">
              <button id="sign-up" type="button">SIGN UP FOR TONIFY</button>
            </Link>
          </form>
      </div>
    );
  }
}
 
export default Login;