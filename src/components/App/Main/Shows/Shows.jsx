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
            name={show.name}
            show_date={show.show_date}
            venue={show.venue}
            location={show.location}
            website={show.website}
            loggedIn={this.props.loggedIn}
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
            name={show.name}
            show_date={show.show_date}
            venue={show.venue}
            location={show.location}
            website={show.website}
            loggedIn={this.props.loggedIn}
          />
        );
      }
    })
  }

  render() {
    return (
      <div className="shows">
        <h1>Shows</h1>
        <div className="upcoming">
          <h2>Upoming Shows:</h2>
          {this.renderAllUpcomingShows()}
        </div>
        <div className="past">
          <h2>Past Shows:</h2>
          {this.renderAllPastShows()}
        </div>
      </div>
    );
  }
}


export default Shows;
