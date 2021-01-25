import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const months = {
  "January": "01",
  "February": "02",
  "March": "03",
  "April": "04",
  "May": "05",
  "June": "06",
  "July": "07",
  "August": "08",
  "September": "09",
  "October": "10",
  "November": "11",
  "December": "12"
}

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      email_confirmation: "",
      month: "",
      day: "",
      year: "",
      gender: "",
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
  
  organizedState() {
    const { username, password, email, email_confirmation, month, day, year, gender } = this.state
   
    const newState = { 
      username,
      password,
      email,
      email_confirmation,
      birthday: `${year}-${month}-${day}`,
      gender
    }

    return newState;
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.signup(this.organizedState())
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
    const errors = this.props.errors;
    return (
      <div className="signup">
        <Link to="/">
          <img id="signup-logo" src={window.tonifyBlackURL} />      
        </Link>
        <h2 id="signup-form-heading">Sign up for free to start listening.</h2>
          
          <form className="session-form" onSubmit={this.handleSubmit}>

            <div className="form-input-container">
            <p className="form-prompt">What's your email?</p>
              <input
                type="text"
                value={this.props.email}
                placeholder="Enter your email."
                onChange={this.handleInput('email')}
                className={errors.email ? "input-error" : "signup-input" }
              />

            <p className="error-message">{errors.email}</p>
            </div>

            <div className="form-input-container">
              <p className="form-prompt">Confirm your email</p>
              <input
                type="text"
                value={this.props.email}
                placeholder="Enter your email again."
                onChange={this.handleInput('email_confirmation')}
                className={errors.email_confirmation ? "input-error" : "signup-input"}
              />
              <p className="error-message">{errors.email_confirmation}</p>
            </div>

            <div className="form-input-container">
            <p className="form-prompt">Create a password</p>
              <input
                type="password"
                value={this.props.password}
                placeholder="Create a password."
                onChange={this.handleInput('password')}
                className={errors.password ? "input-error" : "signup-input" }
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
                className={errors.username ?  "input-error" : "signup-input"}
              />
              <p className={errors.username ? "error-message" : "username-notice"}>
              {errors.username ? errors.username : "This appears on your profile."}
              </p>
            </div>

              <p id="birthday-prompt">What's your date of birth?</p>

              <div className="birthday-labels">
                <p id="month-label">Month</p>
                <p id="day-label">Day</p>
                <p id="year-label">Year</p>
              </div>

              <div className="birthday-container">
                <select
                  defaultValue="Month"
                  onChange={this.handleInput('month')}
                  id="month" placeholder="Month"
                  className={errors.birthday ? "month-error" : "" }
                >
                  <option disabled>Month</option>
                  {Object.keys(months).map( 
                    (month) => <option key={month} value={months[month]}>{month}</option>
                  )}
                </select>

                <input
                  type="text"
                  value={this.props.day}
                  placeholder="DD"
                  onChange={this.handleInput('day')}
                  className={errors.birthday ? "day-input-error" : "day-input"}
                />

                <input
                  type="text"
                  value={this.props.year}
                  placeholder="YYYY"
                  onChange={this.handleInput('year')}
                  className={errors.birthday ? "year-input-error" : "year-input"}
                />
              <p className="error-message">{errors.birthday}</p>
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

            <div className="policies">
              <p id="toc">
                By clicking on Sign up, you agree to Tonify's Terms and Conditions of Use.
              </p>

              <p>
                To learn more about how Tonify collects, uses, shares and protects your personal data please read Tonify's Privacy Policy.
              </p>
            </div>

            <button id="signup-submit-button" type="submit">SIGN UP</button>

            <button
              id="demo-button-signup"
              onClick={this.handleDemo}>
              LOG IN AS A DEMO USER INSTEAD
            </button>

          <p id="login-redirect">Have an account? <Link to="/login">Log In</Link>.</p>
          </form>
      </div>
    );
  }
}
 
export default Signup;