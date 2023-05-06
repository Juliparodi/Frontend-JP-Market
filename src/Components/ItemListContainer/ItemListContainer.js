import ItemList from "../ItemList/ItemList";
import {useContext, useEffect, useState} from "react";
import {getItems} from "../../resources/productsMock";
import './itemListContainer.css'
import Filter from './../filter/Filter'
import { db } from "../../Configuration/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const getProducts = async () => {
  const productsCollection = collection(db, "Item");
  const productsDocsRef = await getDocs(productsCollection);
  const productDocs = productsDocsRef.docs;
  const products = productDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  console.log(products);
  return products;
};


const ItemListContainer = ({ greeting, additionalComment }) => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    getProducts()
      .then((response) => {
        let res = [];
        for (let i = 0; i < 4; i++) {
          res = res.concat(response);
        }
        setItems(res);
        setIsLoading(false);
      })
      .catch((error) => {
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
