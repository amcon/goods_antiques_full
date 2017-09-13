import React from 'react';
import styles from './Login.css';
import { Redirect, Link } from 'react-router-dom';

class Login extends React.Component {

  // componentDidMount() {
  //   console.log(this.props.errors);
  // }

  render() {

    const loggedIn = this.props.loggedIn;

    if (loggedIn) {
      return(
        <Redirect to='/admin' />
      );
    }

    return (
      <div className="login">
        <h1>Log In</h1>
        <div className="login-form">
          <input
            type="text"
            placeholder="EMAIL"
            value={this.props.email}
            onChange={this.props.updateFormEmail}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={this.props.password}
            onChange={this.props.updateFormPassword}
          />
          <button onClick={this.props.handleLoginSubmit} >SUBMIT</button>
          <Link to="/signup"><p>Click here to sign up</p></Link>
        </div>
      </div>
    );
  }
}

export default Login;
