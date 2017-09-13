import React from 'react';
import styles from './OneProduct.css';
import { Link, Redirect } from 'react-router-dom';

class OneProduct extends React.Component {

  renderProductEdit() {
    const loggedIn = this.props.loggedIn;

    if (loggedIn) {
      return(
        <div className="edit-delete">
          <button onClick={() => this.activateEditForm()} id="edit">Edit</button>
          <button onClick={this.props.handleProductDeleteSubmit} id="delete">Delete</button>
        </div>
      );
    }
  }

  activateEditForm() {
    const form = document.getElementsByClassName("product-edit")[0];

    form.style.height = "950px";
    form.style.opacity = "1";
    form.style.zIndex = "1";
    form.style.fontSize = ".85em";
  }

  renderEditForm() {
    return(
      <div className="product-edit">
        <h1>Edit {this.props.productName} :</h1>
        <p>*name:</p>
        <input
          type="text"
          placeholder="ex. Primitive Cabinet"
          value={this.props.productName}
          onChange={this.props.updateProductName}
        />
        <p>*description:</p>
        <input
          type="text"
          placeholder="ex. This Primitive cabinet is from..."
          value={this.props.productDescription}
          onChange={this.props.updateProductDescription}
        />
        <p>*price:</p>
        <input
          type="text"
          placeholder="ex. $100"
          value={this.props.productPrice}
          onChange={this.props.updateProductPrice}
        />
        <p>*sku:</p>
        <input
          type="text"
          placeholder="ex. PRIM-0001"
          value={this.props.productSku}
          onChange={this.props.updateProductSku}
        />
        <p>*category:</p>
        <select value={this.props.productCategory} onChange={this.props.updateProductCategory}>
          <option>Select One</option>
          <option value="primitive">Primitive</option>
          <option value="country">Country Store</option>
          <option value="general">General Store &amp; Advertising</option>
          <option value="stoneware">Stoneware, Pottery &amp; Dishes</option>
          <option value="victorian">Victorian &amp; East Lake</option>
          <option value="folk">Folk Art &amp; Paintings</option>
          <option value="liveedge">Live-Edge, Industrial & Painted</option>
          <option value="other">Other</option>
        </select>
        <p>*main image:</p>
        <input
          type="text"
          placeholder="for now just be a url to picture"
          value={this.props.imageMain}
          onChange={this.props.updateImageMain}
        />
        <p>first suplemental image:</p>
        <input
          type="text"
          placeholder="for now just be a url to picture"
          value={this.props.imageSupOne || ""}
          onChange={this.props.updateImageSupOne}
        />
        <p>second suplemental image:</p>
        <input
          type="text"
          placeholder="for now just be a url to picture"
          value={this.props.imageSupTwo || ""}
          onChange={this.props.updateImageSupTwo}
        />
        <p>third suplemental image:</p>
        <input
          type="text"
          placeholder="for now just be a url to picture"
          value={this.props.imageSupThree || ""}
          onChange={this.props.updateImageSupThree}
        />
        <p>sold:</p>
        <select value={this.props.productSold} onChange={this.props.updateProductSold}>
          <option>Select One</option>
          <option value="false">Available</option>
          <option value="true">Sold</option>
        </select>
        <button onClick={this.props.handleProductEditSubmit}>Edit Product</button>
      </div>
    );
  }

  render() {

    const productEdited = this.props.productEdited;

    if (productEdited) {
      return(
        <Redirect to={`/store/${this.props.clickedProduct.category}`} />
      );
    }

    return(
      <div className="one-product">
        <div className="product-box">
          <div className="one-product-images">
            <img className="main-img" src={this.props.clickedProduct.main_img} />
              <div className="one-product-sup-images">
                <img className="sup-img" src={this.props.clickedProduct.main_img} />
                <img className="sup-img" src={this.props.clickedProduct.sup_img_1} />
                <img className="sup-img" src={this.props.clickedProduct.sup_img_2} />
                <img className="sup-img" src={this.props.clickedProduct.sup_img_3} />
              </div>
          </div>
          <div className="one-product-text">
            <h1>{this.props.clickedProduct.name}</h1>
            <p>{this.props.clickedProduct.description}</p>
            <h2>{this.props.clickedProduct.price}</h2>
            <button>BUY</button>
          </div>
        </div>
        {this.renderProductEdit()}
        {this.renderEditForm()}
      </div>
    );
  }
}

export default OneProduct;
