"use strict";

describe('App', function() {
  var App = require('../index');
  var Counter = require('../counter.js');
  var AddCounter = require('../counter.js');
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
  
  it('should show the total of all counters', function() {
    
  });
    
  it('should let the user add a counter and give it a name', function() {
    var input = findByClass(component, 'add-counter__input');
    var submit = findByClass(component, 'add-counter__submit');
    input.value = 'Cats';
    Simulate.click(submit);
    
    var counter = findByClass(component, 'counter');
    var label = findByTag(counter, 'label');
    expect(label.getDOMNode().textContent).to.contain('Cats');
  });
    
  //new counters should start at 0
  it('should start new counters at 0', function() {
    //using Shallow Rendering
    var renderer = TestUtils.createRenderer();
    renderer.render(<Counter name="Cats"/>);
    var counter = renderer.getRenderOutput();
    
    var count = findByClass(counter, 'counter__count');
    expect(count.getDOMNode().textContent).to.contain('0');
  });
    
  it('should let the user increment and decrement a counter', function() {
    var input = findByClass(component, 'add-counter__input');
    var submit = findByClass(component, 'add-counter__submit');
    input.value = 'Cats';
    Simulate.click(submit);
    
    var btnPlus = findByClass(component, 'counter__plus');
    var btnMinus = findByClass(component, 'counter__minus');
    var count = findByClass(component, 'counter__count');
    
    expect(count.getDOMNode().textContent).to.contain('0');
    Simulate.click(btnPlus);
    expect(count.getDOMNode().textContent).to.contain('1');
    Simulate.click(btnPlus);
    expect(count.getDOMNode().textContent).to.contain('2');
    Simulate.click(btnMinus);
    expect(count.getDOMNode().textContent).to.contain('1');
  });
  
    
});
