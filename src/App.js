import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  handleOrder = (e) => {
    console.log("-----------", e.target.value);
    const sortVal = e.target.value;
    this.setState({
      sort: sortVal,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sortVal === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sortVal === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    });
  };

  handleFilter = (e) => {
    console.log("-----------", e.target.value);
    if (e.target.value === "") {
      this.setState({
        size: e.target.value,
        products: data.products,
      });
    } else {
      console.log("in else");
      this.setState({
        size: e.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(e.target.value) >= 0
        ),
      });
    }
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Shopping Cart</a>
        </header>
        <main>
          <Filter
            items={this.state.products.length}
            sort={this.state.sort}
            size={this.state.size}
            handleOrder={this.handleOrder}
            handleFilter={this.handleFilter}
          ></Filter>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All rights reserved.</footer>
      </div>
    );
  }
}

export default App;
