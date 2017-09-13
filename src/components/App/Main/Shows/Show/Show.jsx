import React from 'react';
import styles from './Show.css';
import { Link } from 'react-router-dom';

class Show extends React.Component {

  renderShowEdit() {
    const loggedIn = this.props.loggedIn;

    if (loggedIn) {
      return(
        <Link to={`/show/${this.props.show_id}`}><button onClick={() => this.props.handleGetShow(this.props.show_id)}>Edit</button></Link>
      );
    }
  }

  render() {
    return(
      <div className="show">
        <h1>{this.props.show_date}</h1>
        <h3>@ {this.props.venue}</h3>
        <h3>{this.props.location}</h3>
        <h3>{this.props.name}</h3>
        <p>to learn more about the event click
          <a href={this.props.website}>here</a>
        </p>
        {this.renderShowEdit()}
      </div>
    )
  }
}

export default Show;
