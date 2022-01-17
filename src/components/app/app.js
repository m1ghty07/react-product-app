import { Component } from "react";

import AppFilter from "../appFilter/AppFilter";
import AppInfo from "../appInfo/AppInfo";
import SearchPanel from "../searchPanel/SearchPanel";
import ShoppingList from "../shoppingList/ShoppingList";
import ShoppingAddForm from "../shoppingAddForm/ShoppingAddForm";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      term: "",
      filter: "",
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, price) => {
    const newItem = {
      name,
      price,
      discount: false,
      bought: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  componentDidMount = () => {
    this.setState({
      data: JSON.parse(localStorage.getItem("products")),
    });
  };

  componentDidUpdate = () => {
    localStorage.setItem("products", JSON.stringify(this.state.data));
  };

  toggleDiscount = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);

      const old = data[index];

      const newObj = { ...old, discount: !old.discount };
      const newArr = [
        ...data.slice(0, index),
        newObj,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  };

  toggleBought = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, bought: !item.bought };
        }
        return item;
      }),
    }));
  };

  searchProducts = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  filterProducts = (items, filter) => {
    switch (filter) {
      case "discount":
        return items.filter((item) => item.discount);
      case "over":
        return items.filter((item) => item.price > 10);
      default:
        return items;
    }
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const total = this.state.data.length;
    const withDiscount = this.state.data.filter((item) => item.discount).length;
    let totalPrice = 0;
    this.state.data.map((item) => {
      return (totalPrice += +item.price);
    });
    const filteredData = this.searchProducts(data, term);
    const visibleData = this.filterProducts(filteredData, filter);

    return (
      <div className="app">
        <AppInfo
          total={total}
          withDiscount={withDiscount}
          totalPrice={totalPrice}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateFilter={this.onUpdateFilter} />
        </div>

        <ShoppingList
          data={visibleData}
          onDelete={this.deleteItem}
          toggleDiscount={this.toggleDiscount}
          toggleBought={this.toggleBought}
        />
        <ShoppingAddForm onItemAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
