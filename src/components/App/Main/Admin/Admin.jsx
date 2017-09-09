import React from 'react';
import styles from "./Admin.css";
import { Redirect } from 'react-router-dom';

class Admin extends React.Component {
  render() {

    const loggedIn = this.props.loggedIn;
    const showCreated = this.props.showCreated;
    const productCreated = this.props.productCreated;
    const category = this.props.productCategory;



    if (!loggedIn) {
      return(
        <Redirect to='/login' />
      );
    }

    if (showCreated) {
      return(
        <Redirect to='/shows' />
      );
    }

    if (productCreated) {
      return(
        <Redirect to={`/store/${this.props.productCategory}`} />
      );
    }

    return (
      <div className="admin">
        <h1>Create a new item:</h1>
        <div className="create-product">
          <p>*name:</p>
          <input
            type="text"
            placeholder="Primitive Cabinet"
            value={this.props.productName}
            onChange={this.props.updateProductName}
          />
          <p>*description:</p>
          <input
            type="text"
            placeholder="This Primitive cabinet is from..."
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
            placeholder="PRIM-0001"
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
            placeholder="this should just be a url to picture"
            value={this.props.imageMain}
            onChange={this.props.updateImageMain}
          />
          <p>sold:</p>
          <select value={this.props.productSold} onChange={this.props.updateProductSold}>
            <option>Select One</option>
            <option value="false">Available</option>
            <option value="true">Sold</option>
          </select>
        </div>
        <button onClick={this.props.handleCreateProduct}>create product</button>
        <h1>Create a new show:</h1>
        <div className="create-show">
          <p>*name:</p>
          <input
            type="text"
            placeholder=""
            value={this.props.showName}
            onChange={this.props.updateShowName}
          />
          <p>*date:</p>
          <input
            type="text"
            placeholder=""
            value={this.props.showDate}
            onChange={this.props.updateShowDate}
          />
          <p>*venue:</p>
          <input
            type="text"
            placeholder=""
            value={this.props.showVenue}
            onChange={this.props.updateShowVenue}
          />
          <p>*location:</p>
          <input
            type="text"
            placeholder=""
            value={this.props.showLocation}
            onChange={this.props.updateShowLocation}
          />
          <p>*website:</p>
          <input
            type="text"
            placeholder="must have: http://www.example.com"
            value={this.props.showWebsite}
            onChange={this.props.updateShowWebsite}
          />
          <p>*upcoming or past:</p>
          <select value={this.props.showCurrent} onChange={this.props.updateShowCurrent}>
            <option>Select One</option>
            <option value="true">Upcoming</option>
            <option value="false">Past</option>
          </select>
        </div>
        <button onClick={this.props.handleCreateShow}>create show</button>
      </div>
    );
  }
}

export default Admin;
