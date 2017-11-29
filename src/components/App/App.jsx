import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import request from 'superagent';
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
      clickedProduct: [],
      email: '',
      password: '',
      userCreated: false,
      loggedIn: false,
      productSelected: false,
      errors: [],
      showName: '',
      showDate: '',
      showLocation: '',
      showWebsite: '',
      showVenue: '',
      showCurrent: '',
      showCreated: false,
      showEdited: false,
      productName: '',
      productDescription: '',
      productPrice: '',
      productSku: '',
      productCategory: '',
      productSold: '',
      productCreated: false,
      productEdited: false,
      chosenImage: '',
      imageMain: '',
      imageSupOne: '',
      imageSupTwo: '',
      imageSupThree: '',
      productId: 0,
      showId: 0,
      uploadedFile: {},
      uploadedSupOneFile: {},
      uploadedSupTwoFile: {},
      uploadedSupThreeFile: {},
    };
  }

  getAllProducts() {
    fetch(`/api/products`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        allProducts: data,
        productCreated: false,
        productEdited: false,
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
        showEdited: false,
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

  updateImageSupOne(e) {
    this.setState({
      imageSupOne: e.target.value,
    })
  }

  updateImageSupTwo(e) {
    this.setState({
      imageSupTwo: e.target.value,
    })
  }

  updateImageSupThree(e) {
    this.setState({
      imageSupThree: e.target.value,
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
        sup_img_1: this.state.imageSupOne,
        sup_img_2: this.state.imageSupTwo,
        sup_img_3: this.state.imageSupThree,
      })
    })
    .then(this.setState({
      productName: '',
      productDescription: '',
      productPrice: '',
      productSku: '',
      productSold: '',
      imageMain: '',
      imageSupOne: '',
      imageSupTwo: '',
      imageSupThree: '',
      uploadedFile: {},
      uploadedSupOneFile: {},
      uploadedSupTwoFile: {},
      uploadedSupThreeFile: {},
    }))
    .then(() => {
      this.getAllProducts()
      this.setState({
        productCreated: true,
      })
    })
    .catch(err => console.log(err))
  }

// DROPZONE

  onImageMainDrop(files) {
    this.setState({
      uploadedFile: files[0],
    });
    this.handleImageMainUpload(files[0]);
  }

  onImageSupOneDrop(files) {
    this.setState({
      uploadedSupOneFile: files[0],
    });
    this.handleImageSupOneUpload(files[0]);
  }

  onImageSupTwoDrop(files) {
    this.setState({
      uploadedSupTwoFile: files[0],
    });
    this.handleImageSupTwoUpload(files[0]);
  }

  onImageSupThreeDrop(files) {
    this.setState({
      uploadedSupThreeFile: files[0],
    });
    this.handleImageSupThreeUpload(files[0]);
  }

  handleImageMainUpload(file) {
    const CLOUDINARY_UPLOAD_PRESET = 'br6wctso';
    const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/aacon/upload';

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.log(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          imageMain: response.body.secure_url
        });
        console.log('main image uploaded')
      }
    });
  }

  handleImageSupOneUpload(file) {
    const CLOUDINARY_UPLOAD_PRESET = 'br6wctso';
    const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/aacon/upload';

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.log(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          imageSupOne: response.body.secure_url
        });
        console.log('first supplemental image uploaded')
      }
    });
  }

  handleImageSupTwoUpload(file) {
    const CLOUDINARY_UPLOAD_PRESET = 'br6wctso';
    const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/aacon/upload';

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.log(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          imageSupTwo: response.body.secure_url
        });
        console.log('second supplemental image uploaded')
      }
    });
  }

  handleImageSupThreeUpload(file) {
    const CLOUDINARY_UPLOAD_PRESET = 'br6wctso';
    const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/aacon/upload';

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.log(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          imageSupThree: response.body.secure_url
        });
        console.log('third supplemental image uploaded')
      }
    });
  }

  handleGetProduct(id) {
    this.setState({
      productId: id,
      productSelected: true,
    }, () => this.getOneProduct());
    // this.getOneProduct();
  }

  handleGetShow(show_id) {
    this.setState({
      showId: show_id,
    }, () => this.getOneShow());
  }

  getOneShow() {
    fetch(`/api/shows/${this.state.showId}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        clickedShow: data,
      })
    })
    .then(() => {
      this.setState({
        showName: this.state.clickedShow.name,
        showDate: this.state.clickedShow.show_date,
        showLocation: this.state.clickedShow.location,
        showWebsite: this.state.clickedShow.website,
        showVenue: this.state.clickedShow.venue,
        showCurrent: this.state.clickedShow.current,
      })
      // console.log(this.state.clickedShow)
    })
    .catch(err => console.log(err));
  }

  getOneProduct() {
    fetch(`/api/products/${this.state.productId}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        clickedProduct: data,
        productSelected: false,
      })
    })
    .then(() => {
      this.setState({
        productName: this.state.clickedProduct.name,
        productDescription: this.state.clickedProduct.description,
        productPrice: this.state.clickedProduct.price,
        productSku: this.state.clickedProduct.sku,
        productCategory: this.state.clickedProduct.category,
        productSold: this.state.clickedProduct.sold,
        chosenImage: this.state.clickedProduct.main_img,
        imageMain: this.state.clickedProduct.main_img,
        imageSupOne: this.state.clickedProduct.sup_img_1,
        imageSupTwo: this.state.clickedProduct.sup_img_2,
        imageSupThree: this.state.clickedProduct.sup_img_3,
      })
      // console.log(this.state.clickedProduct)
    })
    .catch(err => console.log(err));
  }

  handleShowEditSubmit() {
    fetch(`/api/shows/${this.state.showId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
        name: this.state.showName,
        show_date: this.state.showDate,
        venue: this.state.showVenue,
        location: this.state.showLocation,
        website: this.state.showWebsite,
        current: this.state.showCurrent,
      })
    })
    .then(this.setState({
      showName: '',
      showDate: '',
      showVenue: '',
      showLocation: '',
      showWebsite: '',
      showCurrent: '',
    }))
    .then(() => {
      this.getAllShows()
      this.setState({
        showEdited: true,
        showId: 0,
      })
    })
    .catch(err => console.log(err))
  }

  handleProductEditSubmit() {
    fetch(`/api/products/${this.state.productId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
        name: this.state.productName,
        description: this.state.productDescription,
        price: this.state.productPrice,
        sku: this.state.productSku,
        category: this.state.productCategory,
        sold: this.state.productSold,
        main_img: this.state.imageMain,
        sup_img_1: this.state.imageSupOne,
        sup_img_2: this.state.imageSupTwo,
        sup_img_3: this.state.imageSupThree,
      })
    })
    .then(this.setState({
      productName: '',
      productDescription: '',
      productPrice: '',
      productSku: '',
      productCategory: '',
      productSold: '',
      imageMain: '',
      imageSupOne: '',
      imageSupTwo: '',
      imageSupThree: '',
      uploadedFile: {},
      uploadedSupOneFile: {},
      uploadedSupTwoFile: {},
      uploadedSupThreeFile: {},
    }))
    .then(() => {
      this.getAllProducts()
      this.setState({
        productEdited: true,
        productId: 0,
      })
    })
    .catch(err => console.log(err))
  }

  handleProductDeleteSubmit() {
    fetch(`/api/products/${this.state.productId}`, {
      method: 'delete'
    })
    .then(() => {
      this.getAllProducts()
      this.setState({
        productEdited: true,
        productId: 0,
      })
    })
    .catch(err => console.log(err))
  }

  handleShowDeleteSubmit() {
    fetch(`/api/shows/${this.state.showId}`, {
      method: 'delete'
    })
    .then(() => {
      this.getAllShows()
      this.setState({
        showEdited: true,
        showId: 0,
      })
    })
    .catch(err => console.log(err))
  }

  chooseMainImage(image) {
    if (image) {
      this.setState({
        chosenImage: image
      })
    }
  }

  clearShowAndProductState() {
    this.setState({
      showName: '',
      showDate: '',
      showLocation: '',
      showWebsite: '',
      showVenue: '',
      showCurrent: '',
      productName: '',
      productDescription: '',
      productPrice: '',
      productSku: '',
      productCategory: '',
      productSold: '',
    })
  }

  checkForToken() {
    console.log(localStorage.userAuthToken);

    if (localStorage.userAuthToken) {
      this.setState({
        loggedIn: true,
      })
      console.log("i run");
    }
  }


  componentWillMount() {
    this.getAllProducts();
    this.getAllShows();
    this.clearShowAndProductState();
    this.checkForToken();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main
          key="main"
          adminData={this.state.admin}
          adminPresent={this.state.adminPresent}
          email={this.state.email}
          password={this.state.password}
          allProducts={this.state.allProducts}
          allShows={this.state.allShows}
          loggedIn={this.state.loggedIn}
          userCreated={this.state.userCreated}
          productSelected={this.state.productSelected}
          errors={this.state.errors}
          showName={this.state.showName}
          showDate={this.state.showDate}
          showLocation={this.state.showLocation}
          showWebsite={this.state.showWebsite}
          showVenue={this.state.showVenue}
          showCurrent={this.state.showCurrent}
          showCreated={this.state.showCreated}
          showEdited={this.state.showEdited}
          productName={this.state.productName}
          productDescription={this.state.productDescription}
          productPrice={this.state.productPrice}
          productSku={this.state.productSku}
          productCategory={this.state.productCategory}
          productSold={this.state.productSold}
          productCreated={this.state.productCreated}
          productEdited={this.state.productEdited}
          productId={this.state.productId}
          chosenImage={this.state.chosenImage}
          imageMain={this.state.imageMain}
          imageSupOne={this.state.imageSupOne}
          imageSupTwo={this.state.imageSupTwo}
          imageSupThree={this.state.imageSupThree}
          clickedProduct={this.state.clickedProduct}
          uploadedFile={this.state.uploadedFile}
          uploadedSupOneFile={this.state.uploadedSupOneFile}
          uploadedSupTwoFile={this.state.uploadedSupTwoFile}
          uploadedSupThreeFile={this.state.uploadedSupThreeFile}
          updateImageMain={this.updateImageMain.bind(this)}
          updateImageSupOne={this.updateImageSupOne.bind(this)}
          updateImageSupTwo={this.updateImageSupTwo.bind(this)}
          updateImageSupThree={this.updateImageSupThree.bind(this)}
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
          handleShowEditSubmit={this.handleShowEditSubmit.bind(this)}
          handleShowDeleteSubmit={this.handleShowDeleteSubmit.bind(this)}
          updateProductName={this.updateProductName.bind(this)}
          updateProductDescription={this.updateProductDescription.bind(this)}
          updateProductPrice={this.updateProductPrice.bind(this)}
          updateProductSku={this.updateProductSku.bind(this)}
          updateProductCategory={this.updateProductCategory.bind(this)}
          updateProductSold={this.updateProductSold.bind(this)}
          handleCreateProduct={this.handleCreateProduct.bind(this)}
          handleGetProduct={this.handleGetProduct.bind(this)}
          handleProductEditSubmit={this.handleProductEditSubmit.bind(this)}
          handleProductDeleteSubmit={this.handleProductDeleteSubmit.bind(this)}
          handleGetShow={this.handleGetShow.bind(this)}
          onImageMainDrop={this.onImageMainDrop.bind(this)}
          onImageSupOneDrop={this.onImageSupOneDrop.bind(this)}
          onImageSupTwoDrop={this.onImageSupTwoDrop.bind(this)}
          onImageSupThreeDrop={this.onImageSupThreeDrop.bind(this)}
          chooseMainImage={this.chooseMainImage.bind(this)}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
