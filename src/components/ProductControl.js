import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ProductDetails from './ProductDetails';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';


class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // currentPage: 'index',
      currentProduct: null,
      pints: 1,
      show: true,
      max: 124,
      min: 0

    };
  }
 
  handleSellPint = (id) => {
    const newMasterList = this.props.masterList[id];
    let productToSell = this.props.pints;
    if( productToSell !== 0 ) {
      this.setState({ 
        masterList: newMasterList,
        currentProduct: productToSell - 1
      }); 
    } else {
      return 'SOLD OUT';
    }
  }
 

  // handleUpdateValue = (e) => {
  //   this.setState({ quantity: e.target.value });
  // }

  handleLinks = (pageName) => {
    this.setState({
      currentPage: pageName
    });
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        selectedProduct: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewProduct = (newProduct) => {
    const { dispatch } = this.props;
    // const { name, brand, flavor, price, pints, id} = newProduct;
    const action = a.addProduct(newProduct);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
    // this.setState({
    //   currentPage: 'index',
    // });
  }

  handleClickingEdit = (id) => {
    const productToEdit = this.props.masterList[id];
    this.setState({
      currentPage: 'edit',
      currentProduct: productToEdit
    });
  }

  handleEditProduct = (editedProduct) => {
   const { dispatch } = this.props;
  //  const { name, brand, flavor, price, pints, id } = editedProduct;
   const action = a.addProduct(editedProduct);
   dispatch(action);
    this.setState({
      editing: false,
      currentPage: 'details',
      currentProduct: editedProduct
    }); 
  }

  handleDeleteProduct = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteProduct(id);
    dispatch(action);
    this.setState({
      currentPage: 'index',
      currentProduct: null
    });
  }

  handleViewingDetails = (id) => {
    const productToView = this.props.masterList[id],
    this.setState({
      currentPage: 'details',
      currentProduct: productToView
    });
  }

  render() {
    let pageToDisplay = null;
    if (this.props.currentPage === 'index') {
      pageToDisplay = <ProductList
        productList = {this.props.masterList} 
        onLinkClick = {this.handleLinks}
        onSellClick = {this.handleSellPint} //to sell pints
        onProductClick = {this.handleViewingDetails} />
    } else if (this.props.currentPage === 'create') {
      pageToDisplay = <AddProduct 
        onLinkClick = {this.handleLinks}
        onAddingProduct = {this.handleAddingNewProduct} />
    } else if (this.props.currentPage === 'details') {
      pageToDisplay = <ProductDetails
        product = {this.props.currentProduct}
        onLinkClick = {this.handleLinks} 
        onDeleteClick ={this.handleDeleteProduct}
        onEditClick = {this.handleClickingEdit} />
    } else if (this.props.currentPage === 'edit') {
      pageToDisplay = <EditProduct
        product = {this.props.currentProduct}
        onLinkClick = {this.handleLinks}
        onEditProduct = {this.handleEditProduct}/>
    } else if (this.props.currentPage === 'edit') {
      pageToDisplay = <EditProduct
        product = {this.props.currentProduct}
        onLinkClick = {this.handleLinks}
        onEditProduct = {this.handleEditProduct}/>
    }
    return (
      <React.Fragment>
        {pageToDisplay}
      </React.Fragment>
    )
  }
}

ProductControl.propTypes = {
  masterList: PropTypes.object
};

const mapStateToProps = state => {
  return { 
    masterList: state.masterList,
    currentPage: state.currentPage
  }
}

ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl;