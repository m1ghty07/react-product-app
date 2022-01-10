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
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };
  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <ShoppingList data={this.state.data} onDelete={this.deleteItem} />
        <ShoppingAddForm onItemAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
