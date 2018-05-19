import React from 'react';
import logo from './logo.svg';
import './App.css';

import ScrolledList from './ScrolledList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: this.createItems(20)
    }
  }
  createItem(){
    return Math.random() * 10
  }
  createItems(n){
    const arr = []
    for (let i = 0; i < n; i++){
      arr.push(this.createItem())
    }
    return arr
  }
  addItemToStart(){
    this.setState({
      items: [this.createItem(), ...this.state.items]
    })
  }
  addItemsToStart(n){
    this.setState({
      items: [...this.createItems(n), ...this.state.items]
    })
  } 
  addItemToEnd(){
    this.setState({
      items: this.state.items.concat(this.createItem())
    })
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
        <button
          onClick={e => this.addItemToEnd()}
        >
          add 1 to end
        </button>
        <button
          onClick={e => this.addItemToStart()}
        >
          add 1 to start
        </button>
        <button
          onClick={e => this.addItemsToStart(5)}
        >
          add 5 to start
        </button>
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
