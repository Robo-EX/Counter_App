import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      counters,
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      onAddProduct,
      onResetInRow,
    } = this.props;
    return (
      <div>
        <div className="mr-2 mb-2 mt-2">
          <button onClick={onAddProduct} className="btn btn-success btn-sm">
            Add Product
          </button>
          <button onClick={onReset} className="btn btn-warning btn-sm ml-2">
            ResetAll
          </button>
        </div>
        {counters.map((counter) => (
          <Counter
            onIncrement={() => onIncrement(counter)}
            onDecrement={() => onDecrement(counter)}
            onDelete={() => onDelete(counter)}
            onReset={() => onReset(counter)}
            onResetInRow={() => onResetInRow(counter)}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
