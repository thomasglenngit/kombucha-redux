import * as actions from './../../actions';

describe('kombucha actions', () => {
  it('deleteProduct should create DELETE_PRODUCT action', () => {
    expect(actions.deleteProduct(1)).toEqual({
      type: 'DELETE_PRODUCT', 
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addProduct should creat ADD_PRODUCT action', () => {
    expect(actions.addProduct({name: 'Hello Tummy', brand: 'Moby Scobie', flavor: 'Juniper Berry', price: '9.00', pints: 124, id: 1})).toEqual({
      type: 'ADD_PRODUCT', 
      name: 'Hello Tummy',
      brand: 'Moby Scobie',
      flavor: 'Juniper Berry',
      price: '9.00',
      pints: 124,
      id: 1
    });
  });
});