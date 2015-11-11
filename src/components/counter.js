"use strict";

class Counter {
  constructor(name) {
    this.name = name;
    this.count = 0;
  }
  
  get name() {
    return this.name;
  }
  
  get count() {
    return this.count;
  }
  
  add(n) {
    this.count += n;
  }
  subtract(n) {
    this.count -= n;
  }
  
  addOne() {
    this.add(1);
  }
  subtractOne() {
    this.subtract(1);
  }
}