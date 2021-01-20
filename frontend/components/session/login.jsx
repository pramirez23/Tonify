import React from 'react';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    this.props.login(this.state)
      .then(() => this.props.history.push('/library'));
  }

  render() { 
    return (
      <div className="login">
        <h2>To continue, log in to Tonify.</h2>
        <form onSubmit={this.handleSubmit}>
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
        </form>
      </div>
    );
  }
}
 
export default Login;