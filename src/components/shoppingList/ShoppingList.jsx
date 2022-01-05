import ShoppingListItem from "../shoppingListItem/ShoppingListItem";
import "./ShoppingList.css";

const ShoppingList = ({ data }) => {
  const items = data.map((item) => {
    return (
      <ShoppingListItem
        key={item.name}
        name={item.name}
        price={item.price}
        discount={item.discount}
      />
    );
  });
  return <ul className="app-list list-group">{items}</ul>;
};

export default ShoppingList;
