import productListReducer from '../../reducers/product-list-reducer';

describe('productListReducer', () => {

  let action;
  const productData = {
    name: 'Fantasy Island',
    brand: 'Heavenly Bootch',
    flavor: 'Ginger Balls',
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
      [id] : {
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
    expect(productListReducer({}, { type: null})).toEqual({});
  });
});