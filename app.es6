import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {
    return <h1>hello es2015</h1>
  }
}

export default App;

ReactDom.render(<App />, document.getElementById('example'));
