import AppFilter from "../appFilter/AppFilter";
import AppInfo from "../appInfo/AppInfo";
import SearchPanel from "../searchPanel/SearchPanel";
import ShoppingList from "../shoppingList/ShoppingList";
import ShoppingAddForm from "../shoppingAddForm/ShoppingAddForm";
import "./app.css";

function App() {
  const data = [
    { name: "bread", price: 2, discount: false, bought: false },
    { name: "milk", price: 5, discount: true, bought: false },
    { name: "butter", price: 10, discount: false, bought: false },
  ];
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <ShoppingList data={data} />
      <ShoppingAddForm />
    </div>
  );
}

export default App;
