import React from 'react';
import PropTypes from 'prop-types';
import v1 from 'uuid';
import ProductForm from './ProductForm';

function AddProduct(props) {
  const { onLinkClick, onAddingProduct } = props;

  function handleAddingNewProduct(event) {
    onAddingProduct({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      pints: 124,
      id: v1()
    })
  }

  return (
    <ProductForm
      onLinkClick={onLinkClick}
      onSubmittingForm={handleAddingNewProduct}
      buttonText="Add Product" />
  )
}

AddProduct.propTypes = {
  onLinkClick: PropTypes.func,
  onAddingProduct: PropTypes.func
}

export default AddProduct;