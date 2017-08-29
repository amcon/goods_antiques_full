import React from 'react';
import styles from './Category.css';

class Category extends React.Component {

  // componentDidMount() {
  //   console.log(this.props.allCategory);
  //   console.log('this is from the Category page');
  // }

  render() {
    return(
      <h1>This is the {this.props.match.params.categoryId} page</h1>
    )
  }
}

export default Category;
