import "./AppFilter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-light">
        All products
      </button>
      <button type="button" className="btn btn-outline-light">
        Discount
      </button>
      <button type="button" className="btn btn-outline-light">
        over 100$
      </button>
    </div>
  );
};

export default AppFilter;
