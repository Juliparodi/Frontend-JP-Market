import ItemList from "../ItemList/ItemList";
import {useContext, useEffect, useState} from "react";
import {getItems} from "../../resources/productsMock";
import './itemListContainer.css'
import Filter from './../filter/Filter'
import {CartContext} from "../context/CartContext";

const ItemListContainer = ({ greeting, additionalComment }) => {

  const { handleAddToCart } = useContext(CartContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
      getItems()
      .then((response) => {
        setItems(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };


  return (
      <div className='item-container'>
        <h1> {greeting} </h1>
        <h5> {additionalComment}</h5>
        <div className='items-and-filter-container'>
          {!isLoading && <Filter handleFilter={handleFilter} />}
          {isLoading ? (
              <p>Loading... please wait in just seconds you will see list of products! </p>
          ) : (
              <ItemList items={items.filter((item) =>
                  selectedFilter === "all" ? true : item.category === selectedFilter
              )}/>
          )}
        </div>
      </div>
  );
}

export default ItemListContainer;
