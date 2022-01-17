import { Component } from "react";

import "./AppFilter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };
  }

  onUpdateFilter = (e) => {
    const filter = e.target.name;
    this.setState({ filter });
    this.props.onUpdateFilter(filter);
  };

  render() {
    return (
      <div className="btn-group">
        <button
          onClick={this.onUpdateFilter}
          name="all"
          type="button"
          className="btn btn-light"
        >
          All products
        </button>
        <button
          onClick={this.onUpdateFilter}
          name="discount"
          type="button"
          className="btn btn-outline-light"
        >
          Discount
        </button>
        <button
          onClick={this.onUpdateFilter}
          name="over"
          type="button"
          className="btn btn-outline-light"
        >
          over 10$
        </button>
      </div>
    );
  }
}

export default AppFilter;
