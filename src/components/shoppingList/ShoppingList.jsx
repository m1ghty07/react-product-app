import ShoppingListItem from "../shoppingListItem/ShoppingListItem";
import "./ShoppingList.css";

const ShoppingList = ({ data, onDelete }) => {
  const items = data.map((item) => {
    return (
      <ShoppingListItem
        key={item.name}
        name={item.name}
        price={item.price}
        discount={item.discount}
        onDelete={() => onDelete(item.id)}
      />
    );
  });
  return <ul className="app-list list-group">{items}</ul>;
};

export default ShoppingList;
