"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: 'App',

  getInitialState: function() {
    return {
      total: 0
    }
  },
  updateTotal: function (n) {
    this.setState({total: this.state.total + n});
  },
  addCounter: function (name) {
    
  },
  render: function() {
    return (
      <div className="App">
        <h1 className="App__header">Counter App</h1>
        <div>Total: {this.state.total}</div>
        
        <Counter name="Dogs" onChange={this.updateTotal} />
        <Counter name="Cats" onChange={this.updateTotal} />
        
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
        {this.props.name}: {this.state.count}
        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleMinus}>-</button>
      </div>);
  }
});

var AddCounter = React.createClass({
  handleSubmit: function () {
    this.props.onAddCounter({this.refs.name});
  },
  render: function () {
    return (
      <form className="add-counter" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Counter name" ref="name" />
        <input type="submit" value="Add" />
      </form>
    );
  }
});