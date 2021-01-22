import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      birthday: "",
      gender: "",
      country: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.signup(this.state)
      .then(() => this.props.history.push('/library'));
  }

  handleDemo(e) {
    const demo = {
      username: "demo",
      password: "demopassword123"
    }
    this.props.loginDemo(demo)
      .then(() => this.props.history.push('/library'));
  }

  render() { 
    const errors = this.props.errors;

    return (
      <div className="signup">
        <img className="session-logo" src={window.tonifyBlackURL} />
        <h2 id="signup-form-heading">Sign up for free to start listening.</h2>
          
          <form className="session-form" onSubmit={this.handleSubmit}>

            <div className="form-input-container">
            <p className="form-prompt">What's your email?</p>
              <input
                type="text"
                value={this.props.email}
                placeholder="Enter your email."
                onChange={this.handleInput('email')}
                className="signup-input"
              />
            <p className="error-message">{errors.email}</p>
            </div>

            <div className="form-input-container">
            <p className="form-prompt">Create a password</p>
              <input
                type="password"
                value={this.props.password}
                placeholder="Create a password."
                onChange={this.handleInput('password')}
                className="signup-input"
              />
              <p className="error-message">{errors.password}</p>
            </div>

            <div className="form-input-container">
            <p className="form-prompt">What should we call you?</p>
              <input
                type="text"
                value={this.props.username}
                placeholder="Enter a username."
                onChange={this.handleInput('username')}
                className="signup-input"
              />
              <p className={errors.username ? "error-message" : "username-notice"}>
                {errors.username ? errors.username : "This appears on your profile."}
              </p>
            </div>

            <div className="form-input-container">
              <p className="form-prompt">What's your gender?</p>
              <div className="signup-radios">
                  <label className="gender-radio">
                    <input
                      type="radio"
                      name="gender"
                      value="M"
                      onChange={this.handleInput("gender")}
                      />
                      Male
                  </label>
                  <label className="gender-radio">
                    <input
                      type="radio"
                      name="gender"
                      value="F"
                      onChange={this.handleInput("gender")}
                    />
                    Female
                  </label>
                  <label className="gender-radio">
                    <input
                      type="radio"
                      name="gender"
                      value="NB"
                      onChange={this.handleInput("gender")}
                    />
                    Non-binary
                  </label>
              </div>
                <p className="error-message">{errors.gender}</p>
            </div>
            <button id="signup-submit-button" type="submit">SIGN UP</button>

            <button
              id="demo-button"
              onClick={() => this.handleDemo()}>
              LOG IN AS A DEMO USER INSTEAD
            </button>

          <p id="login-redirect">Have an account? <Link to="/login">Log In</Link>.</p>
          </form>
      </div>
    );
  }
}
 
export default Signup;