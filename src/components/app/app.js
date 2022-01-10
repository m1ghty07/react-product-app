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

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <ShoppingList
          data={this.state.data}
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
