"use strict";

describe('App', function() {
  var App = require('../index');
  var component;

  beforeEach(function() {
    component = renderIntoDocument(<App/>);
  });

  it('should render the App header', function() {
    var header = findByTag(component, 'h1');

    expect(header.getDOMNode().textContent).to.contain('Counter App');
  });
   
  it('should start the total count at 0', function() {
    var total = findByTag(component, 'h2');
    expect(total.getDOMNode().textContent).to.contain('Total: 0');
  });
  
//  it('should show the total of all counters', function() {
//  });
    
  it('should let the user add a counter', function() {
    var input = findByType(component, 'text');
    var submit = findByType(component, 'submit');
    input.value = 'Cats';
    ReactTestUtils.Simulate.click(submit);
    
    var counter = findByClass(component, 'counter');
    var label = findByTag(counter, 'label');
    expect(label.getDOMNode().textContent).to.contain('Cats');
  });
  //new counters should start at 0
  it('should start new counters at 0', function() {
    var counter = renderIntoDocument(<Counter name="Cats"/>);
    
  });
//  it('should let the user increment and decrement a counter', function() {
//  });
  
    
});
