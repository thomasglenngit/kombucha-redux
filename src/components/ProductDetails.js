import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';

function ProductDetails(props) {
  const { product, onLinkClick, onDeleteClick, onEditClick } = props;
  
  return (
    <React.Fragment>
      <h2>{product.name}</h2>
      <p>{product.brand}</p>
      <p>{product.flavor}</p>
      <p>{product.price}</p>
      <p>{product.pints}</p>
      <Button className='mb-3' variant='secondary' type='button' size='lg' block onClick={()=>onLinkClick('index')}>Back To Index</Button>
      <Button className='mb-3' variant='warning' type='button' size='lg' block onClick={()=>onEditClick(product.id)}>Edit Product</Button>
      <Button variant='danger' type='button' size='lg' block onClick={()=>onDeleteClick(product.id)}>Delete</Button>
    </React.Fragment>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.object,
  onLinkClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  onEditClick: propTypes.func
}

export default ProductDetails;