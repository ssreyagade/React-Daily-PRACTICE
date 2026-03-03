import React, { Component } from "react";

export default class ApiCall3 extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products").then((result) => {
      result.json().then((data) => {
        console.log(data);
        this.setState({ products: data });
      });
    });
  }
  render() {
    return (
      <div>
        <h2>Products List</h2>

        {this.state.products.map((product) => (
          <div key={product.id} style={{ marginBottom: "20px" }}>
            <img src={product.image} alt={product.title} width="100" />
            <p>
              <b>{product.title}</b>
            </p>
            <p>Price: ₹{product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    );
  }
}
