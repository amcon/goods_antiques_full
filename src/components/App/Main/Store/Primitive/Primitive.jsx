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
    return this.props.allProducts.map(function(product, i) {
      if (product.category === 'primitive') {
        return (
          <Product
            key={i}
            name={product.name}
            price={product.price}
            description={product.description}
            mainImage={product.images[0].url}
          />
        );
      }
    });
  }

  renderPrimitiveSold() {
    return this.props.allProducts.map(function(product, i) {
      if (product.sold == true) {
        return (
          <Sold
            key={i}
            name={product.name}
            price={product.price}
            description={product.description}
            mainImage={product.images[0].url}
          />
        );
      }
    });
  }

  render() {
    return(
      <div className="primitive">
        <h1>PRIMITIVE</h1>
        {this.renderPrimitiveProducts()}
        {this.renderPrimitiveSold()}
      </div>
    )
  }
}

export default Primitive;
