import React from 'react';
import styles from './OneProduct.css';
import { Link, Route, Redirect } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import Buy from './Buy/Buy.jsx';

class OneProduct extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        renderDeleteWarning: false,
      };
    }

    activateDeleteWarning() {
      this.setState({
        renderDeleteWarning: true,
      })
    }

    removeDeleteWarning() {
      this.setState({
        renderDeleteWarning: false,
      })
    };

  renderProductEdit() {
    const loggedIn = this.props.loggedIn;

    if (loggedIn) {
      return(
        <div className="edit-delete">
          <button onClick={() => this.activateEditForm()} id="edit">Edit</button>
          <button onClick={() => this.activateDeleteWarning()} id="delete">Delete</button>
        </div>
      );
    }
  }

  activateEditForm() {
    const form = document.getElementsByClassName("product-edit")[0];

    form.classList.add("edit-selected");
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
        <div className="drop-section">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.props.onImageMainDrop}
            value={this.props.imageMain}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
          <div className="image-preview">
            {this.props.imageMain === '' ? null :
            <div>
              <p>{this.props.uploadedFile.name}</p>
              <img height="200px" src={this.props.imageMain} />
            </div>
            }
          </div>
        </div>
        <p>first suplemental image:</p>
        <div className="drop-section">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.props.onImageSupOneDrop}
            value={this.props.imageSupOne}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
          <div className="image-preview">
            {this.props.imageSupOne === '' ? null :
            <div>
              <p>{this.props.uploadedSupOneFile.name}</p>
              <img height="200px" src={this.props.imageSupOne} />
            </div>
            }
          </div>
        </div>
        <p>second suplemental image:</p>
        <div className="drop-section">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.props.onImageSupTwoDrop}
            value={this.props.imageSupTwo}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
          <div className="image-preview">
            {this.props.imageSupTwo === '' ? null :
            <div>
              <p>{this.props.uploadedSupTwoFile.name}</p>
              <img height="200px" src={this.props.imageSupTwo} />
            </div>
            }
          </div>
        </div>
        <p>third suplemental image:</p>
        <div className="drop-section">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.props.onImageSupThreeDrop}
            value={this.props.imageSupThree}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
          <div className="image-preview">
            {this.props.imageSupThree === '' ? null :
            <div>
              <p>{this.props.uploadedSupThreeFile.name}</p>
              <img height="200px" src={this.props.imageSupThree} />
            </div>
            }
          </div>
        </div>
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
            <img className="main-img" src={this.props.chosenImage} alt='' />
              <div className="one-product-sup-images">
                <img className="sup-img" onClick={() => this.props.chooseMainImage(this.props.clickedProduct.main_img)} src={this.props.clickedProduct.main_img} alt="" />
                <img className="sup-img" onClick={() => this.props.chooseMainImage(this.props.clickedProduct.sup_img_1)} src={this.props.clickedProduct.sup_img_1} alt="" />
                <img className="sup-img" onClick={() => this.props.chooseMainImage(this.props.clickedProduct.sup_img_2)} src={this.props.clickedProduct.sup_img_2} alt="" />
                <img className="sup-img" onClick={() => this.props.chooseMainImage(this.props.clickedProduct.sup_img_3)} src={this.props.clickedProduct.sup_img_3} alt="" />
              </div>
          </div>
          <div className="one-product-text">
            <h1>{this.props.clickedProduct.name}</h1>
            <p>{this.props.clickedProduct.description}</p>
            <h2>{this.props.clickedProduct.price}</h2>
            <Link to='/buy' target="_blank">
              <button>BUY</button>
            </Link>
          </div>
        </div>
        {this.renderProductEdit()}
        {this.renderEditForm()}
        {this.state.renderDeleteWarning ?
          <div className="delete-warning">
            <div className="delete-message">
              <p>Are you sure you want to delete {this.props.showName}?</p>
              <div className="delete-buttons">
                <button onClick={this.props.handleProductDeleteSubmit}>Yes</button>
                <button onClick={() => this.removeDeleteWarning()}>Cancel</button>
              </div>
            </div>
          </div> :
          null
        }
      </div>
    );
  }
}

export default OneProduct;
