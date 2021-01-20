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

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then( () => this.props.history.push('/library'));
  }

  render() { 
    return (
      <div className="signup">
        <h2>Sign up for free to start listening.</h2>
          <form onSubmit={this.handleSubmit}>
            <label>What's your email?
              <input
                type="text"
                value={this.state.email}
                placeholder="Enter your email."
                onChange={this.handleInput('email')}
              />
            </label>
            <label>What should we call you?
                <input
                type="text"
                value={this.state.username}
                placeholder="Enter a username."
                onChange={this.handleInput('username')}
              />
              <p>This appears on your profile.</p>
            </label>
            <label>Create a password
              <input
                type="password"
                value={this.state.password}
                placeholder="Create a password."
                onChange={this.handleInput('password')}
              />
            </label>
            <label>What's your gender?
              <div className="male">
                <label>
                  Male
                  <input
                    type="radio"
                    name="gender"
                    value="M"
                    onChange={this.handleInput("gender")}
                  />
                </label>
              </div>
              <div className="female">
                <label>
                  Female
                  <input
                    type="radio"
                    name="gender"
                    value="F"
                    onChange={this.handleInput("gender")}
                  />
                </label>
              </div>
              <div className="nonbinary">
                <label>
                  Non-binary
                    <input
                    type="radio"
                    name="gender"
                    value="NB"
                    onChange={this.handleInput("gender")}
                    />
                </label>
              </div>
            </label>
            <button type="submit">Sign Up</button>
          </form>
      </div>
    );
  }
}
 
export default Signup;