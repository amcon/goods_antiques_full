import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import styles from './Store.css';
import Category from './Category/Category.jsx';
import Primitive from './Primitive/Primitive.jsx';

class Store extends React.Component {
  render() {

    const productSelected = this.props.productSelected;

    if (productSelected) {
      return(
        <Redirect to={`/products/${this.props.productId}`} />
      );
    }

    return(
      <div className="border-component">
        <div className="store" id="store">
          <nav>
            <div className="store-nav-section">
              <Link to={`${this.props.match.url}/primitive`}>Primitive</Link>
              <p>|</p>
              <Link to={`${this.props.match.url}/country`}>Country Store</Link>
              <p>|</p>
              <Link to={`${this.props.match.url}/general`}>General Store &amp; Advertising</Link>
            </div>
            <div className="store-nav-section">
              <Link to={`${this.props.match.url}/stoneware`}>Stoneware, Pottery &amp; Dishes</Link>
              <p>|</p>
              <Link to={`${this.props.match.url}/victorian`}>Victorian &amp; East Lake</Link>
              <p>|</p>
              <Link to={`${this.props.match.url}/folk`}>Folk Art &amp; Paintings</Link>
            </div>
            <div className="store-nav-section">
              <Link to={`${this.props.match.url}/liveedge`}>Live-Edge, Industrial & Painted</Link>
              <p>|</p>
              <Link to={`${this.props.match.url}/other`}>Other</Link>
            </div>
          </nav>
          <Route exact path={this.props.match.url} component={ (props) => (<Primitive allProducts={this.props.allProducts} loggedIn={this.props.loggedIn} handleGetProduct={this.props.handleGetProduct} productSelected={this.props.productSelected} {...props} />) } />
          <Route path={`${this.props.match.url}/:categoryId`} component={ (props) => (<Category allProducts={this.props.allProducts} loggedIn={this.props.loggedIn} handleGetProduct={this.props.handleGetProduct} productSelected={this.props.productSelected} {...props} />) } />
        </div>
      </div>
    )
  }
}

export default Store;
