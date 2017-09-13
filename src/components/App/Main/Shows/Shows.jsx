import React from 'react';
import styles from './Shows.css';
import Show from './Show/Show.jsx';
import PastShow from './PastShow/PastShow.jsx';


class Shows extends React.Component {

  // componentDidMount() {
  //   console.log('this message is comming from the shows page');
  //   console.log(this.props.allShows);
  // }

  renderAllUpcomingShows() {
    return this.props.allShows.map((show, i) => {
      if (show.current == true) {
        return (
          <Show
            key={i}
            show_id={show.show_id}
            name={show.name}
            show_date={show.show_date}
            venue={show.venue}
            location={show.location}
            website={show.website}
            loggedIn={this.props.loggedIn}
            handleGetShow={this.props.handleGetShow}
          />
        );
      }
    })
  }

  renderAllPastShows() {
    return this.props.allShows.map((show, i) => {
      if (show.current == false) {
        return (
          <PastShow
            key={i}
            show_id={show.show_id}
            name={show.name}
            show_date={show.show_date}
            venue={show.venue}
            location={show.location}
            website={show.website}
            loggedIn={this.props.loggedIn}
            handleGetShow={this.props.handleGetShow}
          />
        );
      }
    })
  }

  render() {
    return (
      <div className="shows">
        <h2>Upcoming Shows:</h2>
        <div className="upcoming">
          {this.renderAllUpcomingShows()}
        </div>
        <h2>Past Shows:</h2>
        <div className="past">
          {this.renderAllPastShows()}
        </div>
      </div>
    );
  }
}


export default Shows;
