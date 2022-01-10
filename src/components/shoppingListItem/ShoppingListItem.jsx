import "./ShoppingListItem.css";

const ShoppingListItem = (props) => {
  const {
    name,
    price,
    id,
    onDelete,
    toggleDiscount,
    toggleBought,
    discount,
    bought,
  } = props;
  
  let classNames = "list-group-item d-flex justify-content-between";
  if (discount) {
    classNames += " discount";
  }
  if (bought) {
    classNames += " like";
  }
  return (
    <li className={classNames}>
      <span onClick={() => toggleBought(id)} className="list-group-item-label">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={price + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => toggleDiscount(id)}
          type="button"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button onClick={onDelete} type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-check"></i>
      </div>
    </li>
  );
};

export default ShoppingListItem;
