import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import currentPageReducer from '../../reducers/current-page-reducer';
import productListReducer from '../../reducers/product-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterList: {},
      currentPage: false
    });
  });

  test('Check that initial state of productListReducer matches root reducer', () => {
    expect(store.getState().masterList).toEqual(productListReducer(undefined, { type: null}));
  });

  test('Check that initial state of currentPage matches root reducer', () => {
    expect(store.getState().currentPage).toEqual(currentPageReducer(undefined, { type: null}));
  });
});