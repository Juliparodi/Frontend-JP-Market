const items = [
  { id: 1, name: 'Product 1', category: 'phone', stock: 25, price: 9.99, img: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', category: 'phone', stock: 25, price: 19.99, img: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', category: 'phone', stock: 25, price: 29.99, img: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', category: 'phone', stock: 25, price: 39.99, img: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', category: 'phone', stock: 25, price: 49.99, img: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', category: 'phone', stock: 25, price: 59.99, img: 'https://via.placeholder.com/150' },
];

export const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items)
    }, 500)
  })
}
