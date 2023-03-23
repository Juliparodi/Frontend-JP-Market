const ItemListContainer = ({greeting, additionalComment}) => {
  return (
  <div>
    <h1> {greeting} </h1>
    <h5> {additionalComment}</h5>
  </div>
  )
}

export default ItemListContainer;
