import React from 'react';
import styles from './Login.css';
import { Redirect, Link } from 'react-router-dom';

class Login extends React.Component {

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

  checkForAdmin() {
    const adminPresent = this.state.adminPresent;

    if (!adminPresent) {
      return(
        <Link to="/signup"><p id='sign-up'>s/u</p></Link>
      );
    }
  }

  // updateSignUpState() {
  //   const adminData = this.props.adminData;

  //   console.log(adminData);

  //   // adminData.map((user) => {
  //   //   if (user.email === "goodsantiqueswisconsin@gmail.com") {
  //   //     this.setState({
  //   //       addSignUp: false,
  //   //     })
  //   //   } else {
  //   //     console.log(adminData)
  //   //   }
  //   // })
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
          {this.checkForAdmin()}
        </div>
      </div>
    );
  }
}

export default Login;
