import React from 'react';
import styles from './Login.css';
import { Redirect, Link } from 'react-router-dom';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addSignUp: true,
    };
  }

  componentWillMount() {
    const adminPresent = this.props.adminPresent;

    if (adminPresent === true) {
      this.setState({
        addSignUp: false,
      })
    }
  }

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
          {this.state.addSignUp ?
            <Link to="/signup"><p id='sign-up'>Click here to sign up</p></Link> :
            null
          }
        </div>
      </div>
    );
  }
}

export default Login;
