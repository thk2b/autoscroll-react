import React from 'react';
import logo from './logo.svg';
import './App.css';

import ScrolledList from './ScrolledList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        inputText: '',
        items: 'abcdefghijklmnopqrstuvwxyz1234567890'.split('')
    }
  }
  render() {
    const { items } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
        <input type="text" 
            value={this.state.inputText}
            onChange={e => this.setState({ inputText: e.target.value })}
        />
        <button 
            onClick={e => this.setState({ items: [this.state.inputText].concat(items)})}
        >add</button>
        <button
          onClick={e => this.setState({ items: '12345'.split('').concat(this.state.items)})}
        >add 5 to begining</button>
        <ScrolledList
          items={items}
          onScrolled={e => console.log('the list was scrolled!')}
          onScrolledTop={e => alert('scrolled to top!')}
        />
      </div>
    );
  }
}

export default App;
