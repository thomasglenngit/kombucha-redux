import React from 'react';
import PropTypes from 'prop-types';
import ProductForm from './ProductForm';


function EditProduct(props) {
  const { product, onLinkClick, onEditProduct} = props;

  function handleEditProduct(event) {
    onEditProduct({
      name: event.target.name.value, 
      brand: event.target.brand.value,
      flavor: event.target.brand.value,
      price: event.target.price.value, 
      pints: event.target.pints.value,
      id: product.id
    });
  }


  return (
    <ProductForm
      onLinkClick={onLinkClick}
      onSubmittingForm={handleEditProduct}
      buttonText="Update Product"
      defaultName={product.name}
      defaultBrand={product.brand}
      defaultFlavor={product.flavor}
      defaultPrice={product.price}
      defaultPints={product.pints} 
    />
  )
}

EditProduct.propTypes = {
  product: PropTypes.object,
  onLinkClick: PropTypes.func,
  onEditProduct: PropTypes.func
}

export default EditProduct;