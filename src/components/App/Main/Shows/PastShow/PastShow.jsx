import React from 'react';
import styles from './PastShow.css';
import { Link } from 'react-router-dom';

class PastShow extends React.Component {

  renderShowEdit() {
    const loggedIn = this.props.loggedIn;

    if (loggedIn) {
      return(
        <Link to='/editshow'><button>Edit</button></Link>
      );
    }
  }

  render() {
    return (
      <div className="past-show">
        <h1>{this.props.show_date}</h1>
        <h3>{this.props.location}</h3>
        <h3>{this.props.name}</h3>
        {this.renderShowEdit()}
      </div>
    )
  }
}

export default PastShow;
