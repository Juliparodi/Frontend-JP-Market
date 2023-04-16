const items = [
  { id: '1', name: 'Iphone 13', nameWithDetail: 'Apple iPhone 13 (245 GB) - Negro', category: 'phone', stock: 25, price: 999.99, img: 'iphone13' },
  { id: '2', name: 'Iphone 12', nameWithDetail: 'Apple iPhone 12 (200 GB) - Negro', category: 'phone', stock: 25, price: 799.99, img: 'iphone12' },
  { id: '3', name: 'Iphone 11', nameWithDetail: 'Apple iPhone 11 (128 GB) - Blanco', category: 'phone', stock: 25, price: 687.99, img: 'iphone11' },
  { id: '4', name: 'Samsung S22 Ultra', nameWithDetail: 'Samsung S22 Ultra (245 GB) - Negro', category: 'phone', stock: 25, price: 855.99, img: 'samsung1' },
  { id: '5', name: 'Samsung A54', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 356.99, img: 'samsung2' },
  { id: '6', name: 'Samsung A34', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 299.99, img: 'samsung3' },
  { id: '7', name: 'Motorola 1', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 150.99, img: 'motorola1' },
  { id: '8', name: 'Motorola 2', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 199.99, img: 'motorola2' },
  { id: '9', name: 'Motorola 3', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 159.99, img: 'iphone14' },
  { id: '10', name: 'Notebook Dell', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'notebook', stock: 25, price: 1099.99, img: 'notebook1' },
  { id: '11', name: 'Notebook HP', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'notebook', stock: 25, price: 1199.99, img: 'notebook2' },
  { id: '12', name: 'Notebook 3', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'notebook', stock: 25, price: 999.99, img: 'notebook3' },
  { id: '13', name: 'Notebook 4', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'notebook', stock: 25, price: 899.99, img: 'notebook4' },
  { id: '14', name: 'Headphones 1', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'headphones', stock: 25, price: 143.99, img: 'auri1' },
  { id: '15', name: 'Headphones 2', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'headphones', stock: 25, price: 245.99, img: 'auri2' },
  { id: '16', name: 'Headphones 3', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'headphones', stock: 25, price: 367.99, img: 'auri3' },
  { id: '17', name: 'Headphones 4', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'headphones', stock: 25, price: 134.99, img: 'auri4' },
  { id: '18', name: 'Iphone 13', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 9.99, img: 'iphone13' },
  { id: '19', name: 'Iphone 12', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 19.99, img: 'iphone12' },
  { id: '20', name: 'Iphone 11', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 29.99, img: 'iphone11' },
  { id: '21', name: 'Samsung S22 Ultra', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 29.99, img: 'samsung1' },
  { id: '22', name: 'Samsung A54', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 29.99, img: 'samsung2' },
  { id: '23', name: 'Samsung A34', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 29.99, img: 'samsung3' },
  { id: '24', name: 'Motorola 1', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 29.99, img: 'motorola1' },
  { id: '25', name: 'Motorola 2', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 29.99, img: 'motorola2' },
  { id: '26', name: 'Motorola 3', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', ategory: 'phone', stock: 25, price: 29.99, img: 'iphone14' },
  { id: '27', name: 'Notebook Dell', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'notebook', stock: 25, price: 39.99, img: 'notebook1' },
  { id: '28', name: 'Notebook HP', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'notebook', stock: 25, price: 49.99, img: 'notebook2' },
  { id: '29', name: 'Notebook 3', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'notebook', stock: 25, price: 59.99, img: 'notebook3' },
  { id: '30', name: 'Notebook 4', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'notebook', stock: 25, price: 9.99, img: 'notebook4' },
  { id: '31', name: 'Headphones 1', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'headphones', stock: 25, price: 19.99, img: 'auri1' },
  { id: '32', name: 'Headphones 2', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'headphones', stock: 25, price: 29.99, img: 'auri2' },
  { id: '33', name: 'Headphones 3', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'headphones', stock: 25, price: 39.99, img: 'auri3' },
  { id: '34', name: 'Headphones 4', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'headphones', stock: 25, price: 49.99, img: 'auri4' },
  { id: '35', name: 'Samsung S22 Ultra', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 29.99, img: 'samsung1' },
  { id: '36', name: 'Samsung A54', nameWithDetail: 'Apple iPhone 13 (128 GB) - Negro', category: 'phone', stock: 25, price: 29.99, img: 'samsung2' },
];

export const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items)
    }, 1000)
  })
}

export const getItemById = (id) => {
  return new Promise((resolve) => {
      resolve(items.find(item => item.id === id))
  })
}
