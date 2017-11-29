import React from 'react';
import styles from './Show.css';
import { Link } from 'react-router-dom';

class Show extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showClass: 'show'
    };
  }

  componentWillMount() {
    this.undraggable();
  }

  undraggable() {
    const loggedIn = this.props.loggedIn;

    if (!loggedIn) {
      this.setState({
        showClass: 'show no-drag'
      })
    }
  }

  renderShowEdit() {
    const loggedIn = this.props.loggedIn;

    if (loggedIn) {
      return(
        <div>
          <Link to={`/show/${this.props.show_id}`}><button onClick={() => this.props.handleGetShow(this.props.show_id)}>Edit</button></Link>
        </div>
      );
    }
  }

  render() {
    return(
      <div className={this.state.showClass} id="show">
        <h1>{this.props.show_date}</h1>
        <h3 className="serif">@ {this.props.venue}</h3>
        <h3 className="serif">{this.props.location}</h3>
        <h3 className="serif">{this.props.name}</h3>
        <p>to learn more about the event click
          <a href={this.props.website}>here</a>
        </p>
        {this.renderShowEdit()}
      </div>
    )
  }
}

export default Show;

// const items = [
//   {key: 1, position: 1},
//   {key: 2, position: 2},
//   {key: 3, position: 3},
// ];

// function renderItems() {
//   var itemArr = [];
//   var sortedArr = [];
//   items.map((item, i) => {
//     itemArr.push(item.key)
//   })
//   items.map((item) => {
//     if (item.position == Math.min(...itemArr)) {
//       itemArr.shift(item.key);
//       sortedArr.unshift(item);
//       console.log(itemArr);
//     } else {
//       sortedArr.push(item);
//     }
//   })
//   console.log(sortedArr);
// }

// function moveToFront() {
//   items[items.length - 1].position = 1;
//   items[0].position++;
//   items[1].position++;
//   console.log(items);
// }

// moveToFront()
// renderItems()


