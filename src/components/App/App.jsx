import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.css';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      allProducts: [],
      allShows: [],
      user: {},
      email: '',
      password: '',
      userCreated: false,
      loggedIn: false,
      errors: [],
      showName: '',
      showDate: '',
      showLocation: '',
      showWebsite: '',
      showVenue: '',
      showCurrent: '',
      showCreated: false,
      productName: '',
      productDescription: '',
      productPrice: '',
      productSku: '',
      productCategory: '',
      productSold: '',
      productCreated: false,
      imageMain: '',
    };
  }

  getAllProducts() {
    fetch(`/api/products`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        allProducts: data,
        productCreated: false,
        productCategory: '',
      });
      // console.log(this.state.allProducts);
    })
    .catch(err => console.log(err));
  }

  getAllShows() {
    fetch(`/api/shows`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        allShows: data,
        showCreated: false,
      });
      // console.log(this.state.allShows);
    })
    .catch(err => console.log(err));
  }

  updateFormEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  updateFormPassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleCreateUser() {
    fetch('/api/users/', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then(this.setState({
      email: '',
      password: '',
    }))
    .then(() => {
      this.setState({
        userCreated: true,
      })
    })
    .catch(err => console.log(err))
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    fetch(`/api/users/login`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then(this.setState({
      email: '',
      password: '',
    }))
    .then(r => r.json())
    .then(token => {
      // console.log(token);
      localStorage.setItem('userAuthToken', token);
      this.setState({
        loggedIn: true,
      })
    })
    .catch(err => {
      console.log(err);
      this.setState({
        errors: err,
      })
    });
  }

  updateShowName(e) {
    this.setState({
      showName: e.target.value,
    });
  }

  updateShowDate(e) {
    this.setState({
      showDate: e.target.value,
    });
  }

  updateShowLocation(e) {
    this.setState({
      showLocation: e.target.value,
    });
  }

  updateShowWebsite(e) {
    this.setState({
      showWebsite: e.target.value,
    });
  }

  updateShowVenue(e) {
    this.setState({
      showVenue: e.target.value,
    });
  }

  updateShowCurrent(e) {
    this.setState({
      showCurrent: e.target.value === "true",
    });
  }

  handleCreateShow() {
    fetch('/api/shows', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.showName,
        show_date: this.state.showDate,
        location: this.state.showLocation,
        website: this.state.showWebsite,
        venue: this.state.showVenue,
        current: this.state.showCurrent,
      })
    })
    .then(this.setState({
      showName: '',
      showDate: '',
      showLocation: '',
      showWebsite: '',
      showVenue: '',
      showCurrent: '',
    }))
    .then(() => {
      this.getAllShows()
      this.setState({
        showCreated: true,
      })
    })
    .catch(err => console.log(err))
  }


  updateProductName(e) {
    this.setState({
      productName: e.target.value,
    });
  }

  updateProductDescription(e) {
    this.setState({
      productDescription: e.target.value,
    });
  }

  updateProductPrice(e) {
    this.setState({
      productPrice: e.target.value,
    });
  }

  updateProductSku(e) {
    this.setState({
      productSku: e.target.value,
    });
  }

  updateProductCategory(e) {
    this.setState({
      productCategory: e.target.value,
    });
  }

  updateProductSold(e) {
    this.setState({
      productSold: e.target.value === "true",
    });
  }

  updateImageMain(e) {
    this.setState({
      imageMain: e.target.value,
    })
  }

  handleCreateProduct() {
    fetch('/api/products', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.productName,
        description: this.state.productDescription,
        price: this.state.productPrice,
        sku: this.state.productSku,
        category: this.state.productCategory,
        sold: this.state.productSold,
        main_img: this.state.imageMain,
      })
    })
    .then(this.setState({
      productName: '',
      productDescription: '',
      productPrice: '',
      productSku: '',
      productSold: '',
      imageMain: '',
    }))
    // .then(() => this.handleCreateImageMain())
    .then(() => {
      this.getAllProducts()
      this.setState({
        productCreated: true,
      })
    })
    .catch(err => console.log(err))
  }



  componentWillMount() {
    this.getAllProducts();
    this.getAllShows();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main
          key="main"
          email={this.state.email}
          password={this.state.password}
          allProducts={this.state.allProducts}
          allShows={this.state.allShows}
          loggedIn={this.state.loggedIn}
          userCreated={this.state.userCreated}
          errors={this.state.errors}
          showName={this.state.showName}
          showDate={this.state.showDate}
          showLocation={this.state.showLocation}
          showWebsite={this.state.showWebsite}
          showVenue={this.state.showVenue}
          showCurrent={this.state.showCurrent}
          showCreated={this.state.showCreated}
          productName={this.state.productName}
          productDescription={this.state.productDescription}
          productPrice={this.state.productPrice}
          productSku={this.state.productSku}
          productCategory={this.state.productCategory}
          productSold={this.state.productSold}
          productCreated={this.state.productCreated}
          imageMain={this.state.imageMain}
          updateImageMain={this.updateImageMain.bind(this)}
          updateFormEmail={this.updateFormEmail.bind(this)}
          updateFormPassword={this.updateFormPassword.bind(this)}
          handleCreateUser={this.handleCreateUser.bind(this)}
          handleLoginSubmit={this.handleLoginSubmit.bind(this)}
          updateShowName={this.updateShowName.bind(this)}
          updateShowDate={this.updateShowDate.bind(this)}
          updateShowLocation={this.updateShowLocation.bind(this)}
          updateShowWebsite={this.updateShowWebsite.bind(this)}
          updateShowVenue={this.updateShowVenue.bind(this)}
          updateShowCurrent={this.updateShowCurrent.bind(this)}
          handleCreateShow={this.handleCreateShow.bind(this)}
          updateProductName={this.updateProductName.bind(this)}
          updateProductDescription={this.updateProductDescription.bind(this)}
          updateProductPrice={this.updateProductPrice.bind(this)}
          updateProductSku={this.updateProductSku.bind(this)}
          updateProductCategory={this.updateProductCategory.bind(this)}
          updateProductSold={this.updateProductSold.bind(this)}
          handleCreateProduct={this.handleCreateProduct.bind(this)}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
