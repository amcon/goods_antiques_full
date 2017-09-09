import React from 'react';
import styles from './Signup.css';
import { Redirect, Link } from 'react-router-dom';

class Signup extends React.Component {
  render() {

    const userCreated = this.props.userCreated;

    if (userCreated) {
      return(
        <Redirect to='login' />
      );
    }

    return(
      <div className="signup">
      <h1>Sign Up:</h1>
      <p>email:</p>
      <input
        type="text"
        placeholder="name@email.com"
        value={this.props.email}
        onChange={this.props.updateFormEmail}
      />
      <p>password:</p>
      <input
        type="password"
        placeholder="password"
        value={this.props.password}
        onChange={this.props.updateFormPassword}
      />
      <button onClick={this.props.handleCreateUser}>Sign Up</button>
      </div>
    );
  }
}

export default Signup;
