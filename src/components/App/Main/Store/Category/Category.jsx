import React from 'react';
import styles from './Category.css';
import Product from '../Primitive/Product/Product.jsx';
import Sold from '../Primitive/Sold/Sold.jsx';

class Category extends React.Component {

  // componentDidMount() {
  //   console.log(this.props.allProducts)
  //   console.log(this.props.match.params.categoryId.toString());
  //   console.log('this is from the Category page');
  // }

  createPageTitle() {
    const categoryName = this.props.match.params.categoryId.toString();
    if (categoryName === "country") {
      return(
        <h1 className="category-title">Country Store</h1>
      );
    } else if (categoryName === "general") {
      return(
        <h1 className="category-title">General Store &amp; Advertising</h1>
      );
    } else if (categoryName === "stoneware") {
      return(
        <h1 className="category-title">Stoneware, Pottery &amp; Dishes</h1>
      );
    } else if (categoryName === "victorian") {
      return(
        <h1 className="category-title">Victorian &amp; East Lake</h1>
      );
    } else if (categoryName === "folk") {
      return(
        <h1 className="category-title">Folk Art &amp; Paintings</h1>
      );
    } else if (categoryName === "liveedge") {
      return(
        <h1 className="category-title">Live-Edge, Industrial &amp; Painted</h1>
      );
    } else {
      return(
        <h1 className="category-title">{categoryName}</h1>
      );
    }
  }

  renderCategoryProducts() {
    const categoryName = this.props.match.params.categoryId.toString();

    return this.props.allProducts.map((product, i) => {
      if (product.category === categoryName && product.sold == false) {
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

  renderCategorySold() {
    const categoryName = this.props.match.params.categoryId.toString();

    return this.props.allProducts.map((product, i) => {
      if (product.category === categoryName && product.sold == true) {
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
        {this.createPageTitle()}
        <div className="available">
          {this.renderCategoryProducts()}
        </div>
        <h2>Recently Sold</h2>
        <div className="sold-items">
          {this.renderCategorySold()}
        </div>
      </div>
    )
  }
}

export default Category;
