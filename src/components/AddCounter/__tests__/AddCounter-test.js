"use strict";

describe('AddCounter', function() {
  
  var AddCounter = require('../addcounter.js');
  var component, callback, input, form;

  beforeEach(function() {
    callback = sinon.spy();
    component = renderIntoDocument(<AddCounter onAddCounter={callback} />);
    input = findByClass(component, 'add-counter__input');
    form = findByTag(component, 'form');
  });
  
  it('should let the user add a counter with a custom name', function() {
    input.value = 'foo';
    //note: Simulating a click on the submit button DOES NOT trigger the 
    //forms onSubmit method in Mocha. Simulate the form submit directly.
    Simulate.submit(form);
    
    expect(callback).to.have.been.called;
    expect(callback).to.have.been.calledWith('foo');
  });
  
  it('should not allow blank input', function() {
    input.value = '';
    //note: Simulating a click on the submit button DOES NOT trigger the 
    //forms onSubmit method in Mocha. Simulate the form submit directly.
    Simulate.submit(form);
    
    expect(callback).to.not.have.been.called;
  });
});
