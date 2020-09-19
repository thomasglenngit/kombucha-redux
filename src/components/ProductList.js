import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

function ProductList(props) {
  // const { productList, onSellClick, onLinkClick, onProductClick } = props;
  return (
    <React.Fragment>
      <hr/ >
      <CardColumns>
        {Object.values(props.productList.map((products) => 
          <Product
            onProductClick={props.onProductClick}
            // onSellClick={onSellClick}
            name={products.name}
            brand={products.brand}
            flavor={products.flavor}
            price={products.price}
            pints={products.pints}
            id={products.id}
            key={products.id} />
        ))}
      </CardColumns>
      <Button variant='info' type='button' size='sm' block onClick={()=>onSellClick()}>Sell a Pint</Button>
      <Button variant='primary' type='button' size='lg' block onClick={()=>onLinkClick('create')}>Order a Product</Button>
    </React.Fragment>
  )
}

ProductList.propTypes = {
  productList: PropTypes.object,
  onLinkClick: PropTypes.func,
  onProductClick: PropTypes.func
}

export default ProductList;