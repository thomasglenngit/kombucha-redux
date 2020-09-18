import productListReducer from '../../reducers/product-list-reducer';

describe('productListReducer', () => {

  const currentState = {
    1: {
      name: 'Fantasy Island',
      brand: 'Heavenly Bootch',
      flavor: 'Ginger',
      price: '8.00',
      pints: '124',
      id: 1
    },
    2: {
      name: 'Tummy Tamer',
      brand: 'Heavenly Bootch',
      flavor: 'Grapefruit',
      price: '8.99',
      pints: '123',
      id: 2
    }
  }

  const currentProduct = {
    1: {
      name: 'Fantasy Island',
      brand: 'Heavenly Bootch',
      flavor: 'Ginger',
      price: '8.00',
      pints: '124',
      id: 1
    }
  }

  const editedProduct = {
    1: {
      name: 'Road Runner',
      brand: 'Heavenly Bootch',
      flavor: 'Cayenne',
      price: '8.50',
      pints: '124',
      id: 1
    }
  }


  let action;
  const productInfo = {
    name: 'Fantasy Island',
    brand: 'Heavenly Bootch',
    flavor: 'Ginger',
    price: '8.00',
    pints: '124',
    id: 1
  }

  test('Should successfully add new product information to the masterList', () => {
    const { name, brand, flavor, price, pints, id } = productInfo;
    action = {
      type: 'ADD_PRODUCT',
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      pints: pints,
      id: id
    };

    expect(productListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        pints: pints,
        id: id
      }
    });
  });

  test('Should return default state if there is no action passed into the reducer', () => {
    expect(productListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully delete a product', () => {
    action = {
      type: 'DELETE_PRODUCT',
      id: 1
    };
    expect(productListReducer(currentState, action)).toEqual({
      2: {
        name: 'Tummy Tamer',
        brand: 'Heavenly Bootch',
        flavor: 'Grapefruit',
        price: '8.99',
        pints: '123',
        id: 2
      }
    });
  });

  test('Should successfully update the properties of a product', () => {
    const { name, brand, flavor, price, pints, id } = productInfo;
    action = { 
      type: 'UPDATE_PRODUCT',
      id: 1
    };
    expect(productListReducer(currentProduct, action)).toBe({
      1: {
        name: 'Fantasy Island',
        brand: 'Heavenly Bootch',
        flavor: 'Ginger',
        price: '8.00',
        pints: '124',
        id: 1
      }
    })
    expect(productListReducer(editedProduct, action)).toBe({
      1: {
        name: 'Road Runner',
        brand: 'Heavenly Bootch',
        flavor: 'Cayenne',
        price: '8.50',
        pints: '124',
        id: 1
      }
    });
  });
});