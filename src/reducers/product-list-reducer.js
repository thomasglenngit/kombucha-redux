import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, flavor, price, pints, id } = action;
  switch (action.type) {
    case c.ADD_PRODUCT:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          flavor: flavor,
          price: price,
          pints: pints,
          id: id
        }
      });
    case c.DELETE_PRODUCT:
      const newState = { ...state };
      delete newState[id];
      return newState;
  default:
      return state;
  } 
};