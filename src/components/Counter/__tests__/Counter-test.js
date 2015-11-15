"use strict";

describe('Counter', function() {
  var Counter = require('../counter.js');
  var component, callback, btnPlus, btnMinus, count, label;

  beforeEach(function() {
    callback = sinon.spy();
    component = renderIntoDocument(<Counter name="Cats" onChange={callback}/>);
                                   
    btnPlus = findByClass(component, 'counter__plus');
    btnMinus = findByClass(component, 'counter__minus');
    count = findByClass(component, 'counter__count');
    label = findByTag(component, 'label');
  });

  it('should show a customisable name', function() {
    expect(label.textContent).to.contain('Cats');
  });
  
  it('should show count', function() {
    expect(count);
  });
  
  it('should start new counters at 0', function() {
    expect(count.textContent).to.contain('0');
  });
    
  it('should let the user increment and decrement a counter', function() {
    expect(count.textContent).to.contain('0');
    Simulate.click(btnPlus);
    expect(count.textContent).to.contain('1');
    Simulate.click(btnPlus);
    expect(count.textContent).to.contain('2');
    Simulate.click(btnMinus);
    expect(count.textContent).to.contain('1');
  });
    
  it('should trigger onChange when value changes and pass the changed amount', function() {
    Simulate.click(btnPlus);
    expect(callback).to.have.been.calledWith(1);
    Simulate.click(btnMinus);
    expect(callback).to.have.been.calledWith(-1);
  });
});
