import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ProductDetails from './ProductDetails';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: 'index',
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

  handleAddingNewProduct = (newProduct) => {
    const { dispatch } = this.props;
    const { name, brand, flavor, price, pints, id} = newProduct;
    const action = {
      type:'ADD_PRODUCT',
      name: name,
          brand: brand,
          flavor: flavor,
          price: price,
          pints: pints,
          id: id
    }
    dispatch(action);
    this.setState({
      currentPage: 'index',
    });
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
   const { name, brand, flavor, price, pints, id } = editedProduct;
   const action = {
     type: 'ADD_PRODUCT',
     name: name,
     brand: brand,
     flavor: flavor,
     price: price, 
     pints: pints,
     id: id
   }
   dispatch(action);
    this.setState({
      editing: false,
      currentPage: 'details',
      currentProduct: editedProduct
    }); 
  }

  handleDeleteProduct = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_PRODUCT',
      id: id
    }
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
    if (this.state.currentPage === 'index') {
      pageToDisplay = <ProductList
        productList = {this.state.masterList} 
        onLinkClick = {this.handleLinks}
        onSellClick = {this.handleSellPint} //to sell pints
        onProductClick = {this.handleViewingDetails} />
    } else if (this.state.currentPage === 'create') {
      pageToDisplay = <AddProduct 
        onLinkClick = {this.handleLinks}
        onAddingProduct = {this.handleAddingNewProduct} />
    } else if (this.state.currentPage === 'details') {
      pageToDisplay = <ProductDetails
        product = {this.state.currentProduct}
        onLinkClick = {this.handleLinks} 
        onDeleteClick ={this.handleDeleteProduct}
        onEditClick = {this.handleClickingEdit} />
    } else if (this.state.currentPage === 'edit') {
      pageToDisplay = <EditProduct
        product = {this.state.currentProduct}
        onLinkClick = {this.handleLinks}
        onEditProduct = {this.handleEditProduct}/>
    } else if (this.state.currentPage === 'edit') {
      pageToDisplay = <EditProduct
        product = {this.state.currentProduct}
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
    masterList: state
  }
}

ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl;