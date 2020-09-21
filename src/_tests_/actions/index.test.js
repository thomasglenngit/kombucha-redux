import * as actions from './../../actions';

describe('kombucha actions', () => {
  it('deleteProduct should create DELETE_PRODUCT action', () => {
    expect(actions.deleteProduct(1)).toEqual({
      type: 'DELETE_PRODUCT', 
      id: 1
    })
  })
})