# Counter JavaScript test

## Problem
  Develop an app using JavaScript and ReactJS that allows you to track multiple counter totals in the browser.

  The app should consist of the following. A total counter, the ability to add a counter and the ability to increment and decrement that counter. (See layout for example UI).

| Example UI            |
|:--------------------- |
|![Example](https://raw.githubusercontent.com/everydayhero/counter-test/master/example_ui.png)|

## Provided
You can use the boilerplate provided in the repo, or create your own structure if you prefer.

### Includes
- **[Browserify](http://browserify.org/)** for modularity
- **[babel](https://babeljs.io/)** for [jsx](http://jsx.github.io/) transforms
- **[Mocha](https://mochajs.org/)** for tests
- **[Chai](http://chaijs.com/)** for extend assertions
- **[Sinon](http://sinonjs.org/)** stubs, mocks and spies
- **[Express](http://expressjs.com/)** to serve the application on PORT 5000

### Commands

> Assumes you have node 0.12 installed. We are aware of issues installing on node 4+.

```sh
$ npm run setup     # install global dependencies, node modules and build production assets
$ npm run build     # build assets
$ npm test          # run tests
$ npm start         # start server on localhost:5000
```

### Testing
For convenience the most common React TestUtils methods are exposed globally in the tests. These include:
```js
TestUtils
renderIntoDocument
Simulate
scryByType
findByType
scryByClass
findByClass
scryByTag
findByTag
scryByProp
findByProp
```

## Requirements
* App should work on latest Chrome and Firefox
