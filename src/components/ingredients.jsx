import React, { Component } from "react";
import Counter from "./counter";

class Ingredients extends Component {
  state = {
    ingredients: [{ id: 1, names: [], value: 1 }]
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Ingredients;
