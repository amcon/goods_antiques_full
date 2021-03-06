import React from 'react';
import styles from './PastShow.css';
import { Link } from 'react-router-dom';

class PastShow extends React.Component {

  renderShowEdit() {
    const loggedIn = this.props.loggedIn;

    if (loggedIn) {
      return(
        <Link to={`/show/${this.props.show_id}`}><button onClick={() => this.props.handleGetShow(this.props.show_id)}>Edit</button></Link>
      );
    }
  }

  render() {
    return (
      <div className="past-show">
        <h1>{this.props.show_date}</h1>
        <h3 className="serif">{this.props.location}</h3>
        <h3 className="serif">{this.props.name}</h3>
        {this.renderShowEdit()}
      </div>
    )
  }
}

export default PastShow;
