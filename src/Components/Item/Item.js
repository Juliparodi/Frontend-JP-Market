import './item.css';

const Item = ({isSelected, onSelectedChange, name}) => {
  return <div
      className={isSelected ? `item item-selected` : 'item'}
      onClick={() => onSelectedChange(!isSelected)} > {name}</div>;
}

export default Item;


