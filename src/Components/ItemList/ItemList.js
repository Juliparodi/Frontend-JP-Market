import Item from "../Item/Item";

const items = [
  { id: 1, name: 'Product 1', price: 9.99, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fproducts&psig=AOvVaw2f5sglcMjDn55Ao0Ss8J-g&ust=1680135508667000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLjxxdLu__0CFQAAAAAdAAAAABAE' },
  { id: 2, name: 'Product 2', price: 19.99, img: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 29.99, img: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 39.99, img: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: 49.99, img: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: 59.99, img: 'https://via.placeholder.com/150' },
];

function ItemList({ handleAddToCart }) {
  return (
      <div className="item-list">
        {items.map((item) => (
            <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
        ))}
      </div>
  );
}

export default ItemList;
