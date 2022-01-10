import ShoppingListItem from "../shoppingListItem/ShoppingListItem";
import "./ShoppingList.css";

const ShoppingList = ({ data, onDelete, toggleBought, toggleDiscount }) => {
  const items = data.map((item) => {
    return (
      <ShoppingListItem
        key={item.name}
        name={item.name}
        price={item.price}
        id={item.id}
        discount={item.discount}
        bought={item.bought}
        onDelete={() => onDelete(item.id)}
        toggleDiscount={toggleDiscount}
        toggleBought={toggleBought}
      />
    );
  });
  return <ul className="app-list list-group">{items}</ul>;
};

export default ShoppingList;
