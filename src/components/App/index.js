"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: 'App',
  
  getInitialState: function() {
    return {
      total: 0,
      counters: []
    }
  },
  updateTotal: function (n) {
    this.setState({total: this.state.total + n});
  },
  addCounter: function (name) {
    var _counters = this.state.counters.slice();
    _counters.push(name);
    this.setState(
      {counters: _counters}
    );
  },
  render: function() {
    var appContext = this;
    return (
      <div className="App">
        <h1 className="App__header">Counter App</h1>
        <h2>Total: {this.state.total}</h2>
        
        {this.state.counters.map(function (name) {
          return (
            <Counter name={name} onChange={appContext.updateTotal}/>
          );
        })}
        
        <AddCounter onAddCounter={this.addCounter}/>
      </div>
    );
  },
});

var Counter = React.createClass({
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
        <label>{this.props.name}</label>: {this.state.count}
        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleMinus}>-</button>
      </div>);
  }
});

var AddCounter = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onAddCounter(this.refs.name.value.trim());
    this.refs.name.value = '';
  },
  render: function () {
    return (
      <form className="add-counter" onSubmit={this.handleSubmit}>
        <label>New Counter</label>
        <input type="text" placeholder="Counter name" ref="name" />
        <input type="submit" value="Add" />
      </form>
    );
  }
});