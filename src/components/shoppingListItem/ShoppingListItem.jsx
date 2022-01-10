import { Component } from "react";
import "./ShoppingListItem.css";

class ShoppingListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: false,
      bought: false,
    };
  }

  onDiscount = () => {
    this.setState(({ discount }) => ({
      discount: !discount,
    }));
  };

  onBought = () => {
    this.setState(({ bought }) => ({
      bought: !bought,
    }));
  };
  render() {
    const { name, price, onDelete } = this.props;
    const { discount, bought } = this.state;
    let classNames = "list-group-item d-flex justify-content-between";
    if (discount) {
      classNames += " discount";
    }
    if (bought) {
      classNames += " like";
    }
    return (
      <li className={classNames}>
        <span onClick={this.onBought} className="list-group-item-label">
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={price + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.onDiscount}
            type="button"
            className="btn-cookie btn-sm "
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            onClick={onDelete}
            type="button"
            className="btn-trash btn-sm "
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-check"></i>
        </div>
      </li>
    );
  }
}

export default ShoppingListItem;
