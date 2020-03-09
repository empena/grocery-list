import React, { Component, } from 'react';
import List from "./components/List";
import ListForm from "./components/ListForm";
import ListItems from "./components/ListItems"

class App extends Component {
  
  state = { groceryList: [] }

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

  render() {
    const { groceryList, } = this.state;
    return (
      <div>
        <ListForm addItem={this.addItem} />
        <List name="Grocery List" items={groceryList} itemClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;
