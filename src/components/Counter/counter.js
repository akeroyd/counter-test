"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: 'Counter',
  getInitialState: function() {
    return {
      count: 0
    };
  },
  handlePlus: function(e) {
    this.changeCount(1);
  },
  handleMinus: function(e) {
    this.changeCount(-1);
  },
  changeCount: function(n) {
    this.setState({count: this.state.count + n});
    this.props.onChange(n);
  },
  render: function () {
    return (
      <div className="counter">
        <label>{this.props.name}</label>: <span className="counter__count">{this.state.count}</span>
        <button className="counter__plus" onClick={this.handlePlus}>+</button>
        <button className="counter__minus" onClick={this.handleMinus}>-</button>
      </div>);
  }
});