import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    const val = this.props.counter.value;
    return val === 0 ? "Zero" : val;
  }

  getBadgeClass() {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "info" : "primary";
    return classes;
  }

  renderCount() {
    return (
      <div className="ml-3">
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
      </div>
    );
  }

  renderButtons() {
    const {
      onDelete,
      onIncrement,
      onDecrement,
      counter,
      onResetInRow,
    } = this.props;
    return (
      <div className="col">
        <button onClick={onIncrement} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button
          onClick={onDecrement}
          className="btn btn-secondary btn-sm mx-2"
          disabled={counter.value === 0 ? "disabled" : ""}
        >
          Decrement
        </button>
        <button
          onClick={onResetInRow}
          className="btn btn-outline-warning btn-sm m-2 "
        >
          Reset
        </button>
        <button onClick={onDelete} className="btn btn-danger btn-sm ">
          Delete
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="row mb-3">
        {this.renderCount()}
        {this.renderButtons()}
      </div>
    );
  }
}

export default Counter;
