import "./AppInfo.css";

const AppInfo = ({ total, withDiscount, totalPrice }) => {
  return (
    <div className="app-info">
      <h1 className="text-center">Product cart App</h1>
      <h2>Total products: {total}</h2>
      <h2>Discount: {withDiscount}</h2>
      <h2>Total price: {totalPrice}$</h2>
    </div>
  );
};

export default AppInfo;
