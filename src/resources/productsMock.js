const items = [
  { id: 1, name: 'Notebook Dell', category: 'notebook', stock: 25, price: 9.99, img: 'notebook1' },
  { id: 2, name: 'Samsung S21', category: 'phone', stock: 25, price: 19.99, img: 'phone1' },
  { id: 3, name: 'Iphone 8', category: 'phone', stock: 25, price: 29.99, img: 'phone2' },
  { id: 4, name: 'Product 4', category: 'tablet', stock: 25, price: 39.99, img: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', category: 'tablet', stock: 25, price: 49.99, img: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', category: 'notebook', stock: 25, price: 59.99, img: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Notebook Dell', category: 'notebook', stock: 25, price: 9.99, img: 'notebook1' },
  { id: 8, name: 'Samsung S21', category: 'phone', stock: 25, price: 19.99, img: 'phone1' },
  { id: 9, name: 'Iphone 8', category: 'phone', stock: 25, price: 29.99, img: 'phone2' },
  { id: 10, name: 'Product 4', category: 'tablet', stock: 25, price: 39.99, img: 'https://via.placeholder.com/150' },
  { id: 11, name: 'Product 5', category: 'tablet', stock: 25, price: 49.99, img: 'https://via.placeholder.com/150' },
  { id: 12, name: 'Product 6', category: 'notebook', stock: 25, price: 59.99, img: 'https://via.placeholder.com/150' },
  { id: 13, name: 'Notebook Dell', category: 'notebook', stock: 25, price: 9.99, img: 'notebook1' },
  { id: 14, name: 'Samsung S21', category: 'phone', stock: 25, price: 19.99, img: 'phone1' },
  { id: 15, name: 'Iphone 8', category: 'phone', stock: 25, price: 29.99, img: 'phone2' },
  { id: 16, name: 'Product 4', category: 'tablet', stock: 25, price: 39.99, img: 'https://via.placeholder.com/150' },
  { id: 17, name: 'Product 5', category: 'tablet', stock: 25, price: 49.99, img: 'https://via.placeholder.com/150' },
  { id: 18, name: 'Product 6', category: 'notebook', stock: 25, price: 59.99, img: 'https://via.placeholder.com/150' },
];

export const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items)
    }, 500)
  })
}
