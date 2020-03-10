import React, { Component, } from 'react';
import List from "./components/List";
import ListForm from "./components/ListForm";
import './App.css';
import Footer from './components/Footer';

class App extends Component {
  
  state = { groceryList: [] }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  getUniqueId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  addItem = (name) => {
    const { groceryList } = this.state;
    const listItem = { name, id: this.getUniqueId(), complete: false }
    this.setState({ groceryList: [listItem, ...groceryList] })
  }

  handleClick =(id) => {
    const { groceryList, } = this.state;
    this.setState({
      groceryList: groceryList.map( item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
  }

  visibleItems = () => {
    const { groceryList, filter } = this.state;
    switch(filter) {
      case 'Active':
        return groceryList.filter( t => !t.complete )
      case 'Complete':
        return groceryList.filter( t=> t.complete )
      default:
        return groceryList;
    }
  }

  render() {
    const { groceryList, filter } = this.state;
    return (
      <div >
        <ListForm addItem={this.addItem} />
        <Footer filter={filter} setFilter={this.setFilter} />
        <List name="Grocery List" items={this.visibleItems()} itemClick={this.handleClick} />
        {/* <List name="Grocery List" items={groceryList} itemClick={this.handleClick}/> */}
        
        
      </div>
    )
  }
}

export default App;