"use strict";

describe('App', function() {
  var App = require('../index');
  var Counter = require('../../Counter/counter.js');
  var AddCounter = require('../../AddCounter/addcounter.js');
  var component, total;

  beforeEach(function() {
    component = renderIntoDocument(<App/>);
    total = findByTag(component, 'h2');
  });

  it('should render the App header', function() {
    var header = findByTag(component, 'h1');

    expect(header.textContent).to.contain('Counter App');
  });
   
  it('should start the total count at 0', function() {
    
    expect(total.textContent).to.contain('Total: 0');
  });
  
  it('should show update the total', function() {
    expect(total.textContent).to.contain('Total: 0');
    component.updateTotal(1);
    expect(total.textContent).to.contain('Total: 1');
    component.updateTotal(1);
    expect(total.textContent).to.contain('Total: 2');
    component.updateTotal(-1);
    expect(total.textContent).to.contain('Total: 1');
  });  
});