import React from 'react';
import styles from './EditShow.css';
import { Link, Redirect } from 'react-router-dom';

class EditShow extends React.Component {
  render() {

    const showEdited = this.props.showEdited;

    if (showEdited) {
      return(
        <Redirect to={'/shows'} />
      );
    }

    return(
      <div className="edit-show">
        <h1>Reference:</h1>
        <div className="edit-ref">
          <h1>{this.props.showDate}</h1>
          <h3>@ {this.props.showVenue}</h3>
          <h3>{this.props.showLocation}</h3>
          <h3>{this.props.showName}</h3>
          <p>{this.props.showWebsite}</p>
        </div>
        <h1>Edit Show:</h1>
        <p>*name</p>
        <input
          type="text"
          placeholder=""
          value={this.props.showName}
          onChange={this.props.updateShowName}
        />
        <p>*date</p>
        <input
          type="text"
          placeholder=""
          value={this.props.showDate}
          onChange={this.props.updateShowDate}
        />
        <p>*venue</p>
        <input
          type="text"
          placeholder=""
          value={this.props.showVenue}
          onChange={this.props.updateShowVenue}
        />
        <p>*location</p>
        <input
          type="text"
          placeholder=""
          value={this.props.showLocation}
          onChange={this.props.updateShowLocation}
        />
        <p>*website</p>
        <input
          type="text"
          placeholder=""
          value={this.props.showWebsite}
          onChange={this.props.updateShowWebsite}
        />
        <p>*upcoming</p>
        <select value={this.props.showCurrent} onChange={this.props.updateShowCurrent}>
          <option>Select One</option>
          <option value="true">Upcoming</option>
          <option value="false">Past</option>
        </select>
        <button onClick={this.props.handleShowEditSubmit}>Edit Show</button>
        <button onClick={this.props.handleShowDeleteSubmit} id="delete">Delete</button>
      </div>
    );
  }
}

export default EditShow;
