import ItemList from "../ItemList/ItemList";
import {useState} from "react";
import './itemListContainer.css'
import Filter from './../filter/Filter'
import { useQuery } from '@tanstack/react-query';
import { getProducts } from "../../services/shopService";


const ItemListContainer = ({ greeting, additionalComment }) => {

  const [selectedFilter, setSelectedFilter] = useState("all");

  const { data: items = [], isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };


  if (isError) {
      return <div>Error loading products.</div>;
  }

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
