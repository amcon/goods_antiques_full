import React from 'react';
import styles from './Primitive.css';
import Product from './Product/Product.jsx';
import Sold from './Sold/Sold.jsx';

class Primitive extends React.Component {

  // componentDidMount() {
  //   console.log(this.props.allProducts);
  //   console.log('this is from the Primitive page');
  // }

  renderPrimitiveProducts() {
    return this.props.allProducts.map((product, i) => {
      if (product.category === 'primitive' && product.sold == false ) {
        return (
          <Product
            key={i}
            name={product.name}
            price={product.price}
            description={product.description}
            mainImage={product.main_img}
            loggedIn={this.props.loggedIn}
          />
        );
      }
    });
  }

  renderPrimitiveSold() {
    return this.props.allProducts.map((product, i) => {
      if (product.sold == true && product.category === 'primitive') {
        return (
          <Sold
            key={i}
            name={product.name}
            price={product.price}
            description={product.description}
            mainImage={product.main_img}
            loggedIn={this.props.loggedIn}
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
        <h2>Recently Sold</h2>
        <div className="sold">
          {this.renderPrimitiveSold()}
        </div>
      </div>
    )
  }
}

export default Primitive;
