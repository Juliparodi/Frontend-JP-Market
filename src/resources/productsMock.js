const items = [
  { id: 1, name: 'Notebook Dell', category: 'phone', stock: 25, price: 9.99, img: 'notebook1' },
  { id: 2, name: 'Samsung S21', category: 'phone', stock: 25, price: 19.99, img: 'phone1' },
  { id: 3, name: 'Iphone 8', category: 'phone', stock: 25, price: 29.99, img: 'phone2' },
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
