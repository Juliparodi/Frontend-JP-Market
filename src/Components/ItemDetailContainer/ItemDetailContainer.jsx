import {Container} from "react-bootstrap";
import './itemDetailContainer.css'
import {useParams} from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useQuery } from '@tanstack/react-query';
import { getProductById } from "../../services/shopService";

function ItemDetailContainer({handleAddToCart }) {

  const {itemId} = useParams();

  const { data: item, isLoading, isError } = useQuery({
    queryKey: ['product', itemId],
    queryFn: () => getProductById(itemId),
    enabled: !!itemId,
  });


  if (isError) {
      return <Container className='item-detail-container'><p>Error loading product details.</p></Container>;
  }

  return (
      <Container className='item-detail-container'>
        {isLoading ? <p>Loading...</p> : (item ? <ItemDetail key={item.id} item={item} handleAddToCart={handleAddToCart} /> : <p>Product not found.</p>)}
      </Container>
  );
}

export default ItemDetailContainer;
