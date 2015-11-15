"use strict";

var React = require('react');
var Counter = require('../Counter/counter.js');
var AddCounter = require('../AddCounter/addcounter.js');

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

