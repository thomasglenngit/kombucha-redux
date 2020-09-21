export const deleteProduct = id => ({
  type: 'DELETE_PRODUCT', 
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addProduct = (product) => {
  const { name, brand, flavor, price, pints, id } = product;
  return {
    type: 'ADD_PRODUCT',
    name: name,
    brand: brand,
    flavor: flavor,
    price: price, 
    pints: pints,
    id
  }
}