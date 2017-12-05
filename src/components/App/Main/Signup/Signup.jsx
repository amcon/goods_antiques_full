import React from 'react';
import styles from './Signup.css';
import { Redirect, Link } from 'react-router-dom';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      admin: {email: ''},
      adminPresent: false,
    };
  }

  componentWillMount() {
    this.getAdmin();
  }

  getAdmin() {
    fetch(`/api/users/admin`)
    .then(r => r.json())
    .then((data) => {
      if (data !== null) {
        this.setState({
          admin: data,
        })
        // console.log(data);
      }
      if (this.state.admin.email === 'goodsantiqueswisconsin@gmail.com') {
        this.setState({
          adminPresent: true,
        })
        console.log(this.state.adminPresent);
      }
    })
    .catch(err => console.log(err));
  }

  render() {
    const userCreated = this.props.userCreated;
    const adminPresent = this.state.adminPresent;

    if (userCreated) {
      return(
        <Redirect to='login' />
      );
    }

    if (adminPresent) {
      return(
        <Redirect to='login' />
      );
    }


    return(
      <div className="border-component">
        <div className="signup" id="signup">
          <h1>Sign Up:</h1>
          <input
            type="text"
            placeholder="email ex. name@email.com"
            value={this.props.email}
            onChange={this.props.updateFormEmail}
          />
          <input
            type="password"
            placeholder="password"
            value={this.props.password}
            onChange={this.props.updateFormPassword}
          />
          <button onClick={this.props.handleCreateUser} onTouchStart={this.props.handleCreateUser}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Signup;
