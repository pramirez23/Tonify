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

  // renderErrors() {
  //   const errors = this.props.errors.map((error, i) => (
  //     <li key={i}>{error}</li>
  //   ));

  //   return (
  //     <ul className="errors">
  //       {errors}
  //     </ul>
  //   );
  // }

  render() { 
    const errors = this.props.errors;

    return (
      <div className="signup">

        <h2>Sign up for free to start listening.</h2>
          <form onSubmit={this.handleSubmit}>
            <label className="form-input-title">What's your email?
              <input
                type="text"
                value={this.props.email}
                placeholder="Enter your email."
                onChange={this.handleInput('email')}
              />
            <p className="error-message">{errors.email}</p>
            </label>
            <label className="form-input-title">What should we call you?
              <input
                type="text"
                value={this.props.username}
                placeholder="Enter a username."
                onChange={this.handleInput('username')}
              />
              <p className={errors.username ? "error-message" : ""}>
                  {errors.username ? errors.username : "This appears on your profile."}
              </p>
            </label>
            <label className="form-input-title">Create a password
              <input
                type="password"
                value={this.props.password}
                placeholder="Create a password."
                onChange={this.handleInput('password')}
              />
              <p className="error-message">{errors.password}</p>
            </label>
            <label className="form-input-title">What's your gender?
              <div className="male">
                <label className="gender-input-title">
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
                <label className="gender-input-title">
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
                <label className="gender-input-title">
                  Non-binary
                    <input
                    type="radio"
                    name="gender"
                    value="NB"
                    onChange={this.handleInput("gender")}
                    />
                </label>
              </div>
              <p className="error-message">{errors.gender}</p>
            </label>
            <button type="submit">Sign Up</button>
          </form>
      </div>
    );
  }
}
 
export default Signup;