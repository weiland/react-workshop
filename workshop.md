# React

- eslint for javascript linting
- ES2015 
- jsx
- transpiler: babel

- webpack 

- react is a library

- fixed API
  - render
  - getInitialState
  - getDefaultProps
  - propTypes
  - mixins
  - componentn (will mount, did mount, will receive props, will update, did update, will unmount)

```bash
# install dependencies
npm i -D browserify babel babelify

# install react
npm install --save react react-dom

```


## Basic react component
```js
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```

## Basic react component
```js
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {
    return <h1>hello es2015</h1>
  }
}

export default App;

ReactDom.render(<App />, document.getElementById('example'));
```


## React Link component
```js
var Link = React.createClass({
  render: function() {
    return (
      <a href="http://google.com" onClick= {this.handleClick}>Google</a>
    );
  },

  handleClick: function(e) {
    e.preventDefault();

    alert('You clicked me!');
  }
});


React.render(<Link />, document.getElementById('content'));
```

## React Props
```js
// Parent Component
var LikeList = React.createClass({
  render: function() {
    return (
      <ul>
        <LikeListItem text='turtles.' />
      </ul>
    );
  }
});


// Child Component
var LikeListItem = React.createClass({
  render: function() {
    return (
      <li>
        {this.props.text}
      </li>
    );
  }
});

React.render(<LikeList />, document.getElementById('content'));
```

Resources:
- https://github.com/enaqx/awesome-react
- https://github.com/mikechau/react-primer-draft
- https://github.com/reactjs/react-tutorial
- https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement
