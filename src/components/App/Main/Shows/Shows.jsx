import React from 'react';
import styles from './Shows.css';
import Show from './Show/Show.jsx';
import PastShow from './PastShow/PastShow.jsx';


class Shows extends React.Component {

  // componentDidMount() {
  //   this.renderOrderedCurrent();
  // }

  // componentWillMount() {
  //   this.renderOrderedCurrent();
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //   };
  // }

  // onSort(sortedList, dropEvent) {
  //   console.log("sortedList", sortedList, dropEvent);
  // }

  // placeholder() {
  //   return(
  //     <div className="placeholderContent"></div>
  //   );
  // }

  // renderOrderedCurrent() {
  //   var listArr = [];

  //   return this.props.allShows.map((show, i) => {
  //     if (show.current == true) {
  //       listArr.push(
  //         { content:
  //           <Show
  //             key={i}
  //             position={i}
  //             show_id={show.show_id}
  //             name={show.name}
  //             show_date={show.show_date}
  //             venue={show.venue}
  //             location={show.location}
  //             website={show.website}
  //             loggedIn={this.props.loggedIn}
  //             handleGetShow={this.props.handleGetShow}
  //           />
  //         }
  //       );
  //       this.setState({
  //         list: listArr,
  //       })
  //     }
  //   })
  // }

  // renderDragSortableList() {
  //   const loggedIn = this.props.loggedIn;
  //   if (loggedIn) {
  //     return (
  //       <DragSortableList items={this.state.list} placeholder={this.placeholder()} onSort={this.onSort()} dropBackTransitionDuration={0.3} type="grid"/>
  //     );
  //   } else {
  //     return (
  //       <div className="upcoming">
  //         {this.renderAllUpcomingShows()}
  //       </div>
  //     );
  //   }
  // }

  renderAllUpcomingShows() {
    var sortedUpcomingShows = this.props.allShows.sort(function(a,b) {
      return new Date(a.date_literal).getTime() - new Date(b.date_literal).getTime()
    });

    return sortedUpcomingShows.map((show, i) => {
      if (show.current == true) {
        return (
          <Show
            key={i}
            position={i}
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
    var sortedPastShows = this.props.allShows.sort(function(a,b) {
      return new Date(b.date_literal).getTime() - new Date(a.date_literal).getTime()
    });

    return sortedPastShows.map((show, i) => {
      if (show.current == false) {
        return (
          <PastShow
            key={i}
            position={i}
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
      <div className="border-component">
        <div className="shows" id="shows">
          <h2 className="serif">Upcoming Shows:</h2>
          <div className="upcoming">
            {this.renderAllUpcomingShows()}
          </div>
          <h2 className="serif">Past Shows:</h2>
          <div className="past">
            {this.renderAllPastShows()}
          </div>
        </div>
      </div>
    );
  }
}


export default Shows;
