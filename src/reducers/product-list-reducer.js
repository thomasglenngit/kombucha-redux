export default (state = {}, action) => {
  const { name, brand, flavor, price, pints, id } = action;
  switch (action.type) {
    case 'ADD_TICKET':
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
  default:
      return state;
  } 
};