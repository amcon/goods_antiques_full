import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styles from './Store.css';
import Category from './Category/Category.jsx';
import Primitive from './Primitive/Primitive.jsx';

class Store extends React.Component {

  // componentDidMount() {
  //   console.log(this.props.allProducts);
  // }

  render() {
    return(
      <div className="store">
        <nav>
          <Link to={`${this.props.match.url}/primitive`}>Primitive</Link>
          <Link to={`${this.props.match.url}/country`}>Country Store</Link>
          <Link to={`${this.props.match.url}/general`}>General Store &amp; Advertising</Link>
          <Link to={`${this.props.match.url}/stoneware`}>Stoneware, Pottery &amp; Dishes</Link>
          <Link to={`${this.props.match.url}/victorian`}>Victorian &amp; East Lake</Link>
          <Link to={`${this.props.match.url}/folk`}>Folk Art &amp; Paintings</Link>
          <Link to={`${this.props.match.url}/liveedge`}>Live-Edge, Industrial & Painted</Link>
          <Link to={`${this.props.match.url}/other`}>Other</Link>
        </nav>
        <Route exact path={this.props.match.url} render={ (props) => (<Primitive allProducts={this.props.allProducts} {...props} />) } />
        <Route path={`${this.props.match.url}/:categoryId`} component={ Category } />
      </div>
    )
  }
}

export default Store;
