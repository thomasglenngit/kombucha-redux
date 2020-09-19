import currentPageReducer from './current-page-reducer';
import productListReducer from './product-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  masterList: productListReducer
});

export default rootReducer;