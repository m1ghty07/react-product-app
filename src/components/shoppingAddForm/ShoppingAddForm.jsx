import { Component } from "react";
import "./ShoppingAddForm.css";

class ShoppingAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
    };
    this.maxId = 4;
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onItemAdd = (e) => {
    e.preventDefault();
    this.props.onItemAdd(this.state.name, this.state.price);
    this.setState({
      name: "",
      price: "",
    });
  };

  render() {
    const { name, price } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add new product</h3>
        <form className="add-form d-flex" onSubmit={this.onItemAdd}>
          <input
            name="name"
            onChange={this.onValueChange}
            type="text"
            value={name}
            className="form-control new-post-label"
            placeholder="product name?"
          />
          <input
            name="price"
            onChange={this.onValueChange}
            type="number"
            value={price}
            className="form-control new-post-label"
            placeholder="price"
          />

          <button type="submit" className="btn btn-outline-light">
            Add new
          </button>
        </form>
      </div>
    );
  }
}

export default ShoppingAddForm;
