import React, { Component } from "react";
import ConditionalRendering from "./components/ConditionalRendering";
import { allProducts } from "./components/data";

class App extends Component {
  constructor() {
    super();
    this.state = { ProductsShow: "all" };
  }

  render() {
    const productsToShow =
      this.state.ProductsShow === "all"
        ? allProducts
        : allProducts.filter(
            (item) => item.category === this.state.ProductsShow,
          );

    return (
      <div className="container">
        <h1 className="text-center mt-3">Menu</h1>

        <div className="row">
          {productsToShow.map((val) => (
            <ConditionalRendering
              key={val.id}
              pName={val.name}
              pPrice={val.price}
              pCat={val.category}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
