"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: 'AddCounter',
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onAddCounter(this.refs.name.value.trim());
    this.refs.name.value = '';
  },
  render: function () {
    return (
      <form className="add-counter" onSubmit={this.handleSubmit}>
        <label>New Counter</label>
        <input className="add-counter__input" type="text" placeholder="Counter name" ref="name" />
        <input className="add-counter__submit" type="submit" value="Add" />
      </form>
    );
  }
});