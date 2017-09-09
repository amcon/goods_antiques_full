import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './Main.css';
import Home from './Home/Home.jsx';
import Store from './Store/Store.jsx';
import About from './About/About.jsx';
import Shows from './Shows/Shows.jsx';
import MapPage from './Map/Map.jsx';
import Login from './Login/Login.jsx';
import Admin from './Admin/Admin.jsx';
import Signup from './Signup/Signup.jsx';
import EditProduct from './EditProduct/EditProduct.jsx';
import EditShow from './EditShow/EditShow.jsx';


class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/store' component={ (props) =>
            <Store
              allProducts={this.props.allProducts}
              loggedIn={this.props.loggedIn}
              {...props}
            />
          }/>
          <Route path='/editproduct' component={ EditProduct } />
          <Route path='/editshow' component={ EditShow } />
          <Route path='/about' component={ About } />
          <Route path='/shows' component={ (props) =>
            <Shows
              allShows={this.props.allShows}
              loggedIn={this.props.loggedIn}
              {...props}
            />
          }/>
          <Route path='/map' component={ MapPage } />
          <Route path='/signup' render={ (props) =>
            <Signup
              handleCreateUser={this.props.handleCreateUser}
              userCreated={this.props.userCreated}
              email={this.props.email}
              password={this.props.password}
              updateFormEmail={this.props.updateFormEmail}
              updateFormPassword={this.props.updateFormPassword}
              {...props}
            />
          }/>
          <Route path='/login' render={ (props) =>
            <Login
              updateFormEmail={this.props.updateFormEmail}
              updateFormPassword={this.props.updateFormPassword}
              handleLoginSubmit={this.props.handleLoginSubmit}
              email={this.props.email}
              password={this.props.password}
              loggedIn={this.props.loggedIn}
              errors={this.props.errors}
              {...props}
            />
          }/>
          <Route path='/admin' render={ (props) =>
            <Admin
              loggedIn={this.props.loggedIn}
              showCreated={this.props.showCreated}
              productCreated={this.props.productCreated}
              showName={this.props.showName}
              showDate={this.props.showDate}
              showLocation={this.props.showLocation}
              showWebsite={this.props.showWebsite}
              showVenue={this.props.showVenue}
              showCurrent={this.props.showCurrent}
              updateShowName={this.props.updateShowName}
              updateShowDate={this.props.updateShowDate}
              updateShowLocation={this.props.updateShowLocation}
              updateShowWebsite={this.props.updateShowWebsite}
              updateShowVenue={this.props.updateShowVenue}
              updateShowCurrent={this.props.updateShowCurrent}
              handleCreateShow={this.props.handleCreateShow}
              productName={this.props.productName}
              productDescription={this.props.productDescription}
              productPrice={this.props.productPrice}
              productSku={this.props.productSku}
              productCategory={this.props.productCategory}
              productSold={this.props.productSold}
              updateProductName={this.props.updateProductName}
              updateProductDescription={this.props.updateProductDescription}
              updateProductPrice={this.props.updateProductPrice}
              updateProductSku={this.props.updateProductSku}
              updateProductCategory={this.props.updateProductCategory}
              updateProductSold={this.props.updateProductSold}
              handleCreateProduct={this.props.handleCreateProduct}
              imageMain={this.props.imageMain}
              updateImageMain={this.props.updateImageMain}
              {...props} /> }
            />
        </Switch>
      </main>
    )
  }
}

export default Main;
