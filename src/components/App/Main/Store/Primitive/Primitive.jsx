import React from 'react';
import styles from './Primitive.css';
import Product from './Product/Product.jsx';
import Sold from './Sold/Sold.jsx';
import Link from 'react-router-dom';

class Primitive extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      soldItemPresent: false,
    };
  }

  componentDidMount() {
    // console.log(this.props.allProducts);
    // console.log('this is from the Primitive page');
    this.checkForSold();
    this.renderSoldHeader();
  }

  checkForSold() {
    this.props.allProducts.map((product, i) => {
      if (product.category === 'primitive' && product.sold == true) {
        this.setState({
          soldItemPresent: true,
        })
      }
    });
  }

  renderSoldHeader() {
    if (this.state.soldItemPresent == true) {
      return (
        <h2 className="serif">Recently Sold</h2>
      );
    }
  }

  renderPrimitiveProducts() {
    var sortedPrimitiveAvailable = this.props.allProducts.sort(function(a, b){return a.product_position - b.product_position});

    return sortedPrimitiveAvailable.map((product, i) => {
      if (product.category === 'primitive' && product.sold == false ) {
        return (
          <Product
            key={i}
            id={product.product_id}
            name={product.name}
            price={product.price}
            description={product.description}
            mainImage={product.main_img}
            loggedIn={this.props.loggedIn}
            handleGetProduct={this.props.handleGetProduct}
            productSelected={this.props.productSelected}
          />
        );
      }
    });
  }

  renderPrimitiveSold() {
    var sortedPrimitiveSold = this.props.allProducts.sort(function(a, b){return a.product_position - b.product_position});

    return sortedPrimitiveSold.map((product, i) => {
      if (product.sold == true && product.category === 'primitive') {
        return (
          <Sold
            key={i}
            id={product.product_id}
            name={product.name}
            price={product.price}
            description={product.description}
            mainImage={product.main_img}
            loggedIn={this.props.loggedIn}
            handleGetProduct={this.props.handleGetProduct}
            productSelected={this.props.productSelected}
          />
        );
      }
    });
  }

  render() {
    return(
      <div className="category">
        <h1 className="category-title">PRIMITIVE</h1>
        <div className="available">
          {this.renderPrimitiveProducts()}
        </div>
        {this.renderSoldHeader()}
        <div className="sold-items">
          {this.renderPrimitiveSold()}
        </div>
      </div>
    )
  }
}

export default Primitive;
