import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists, 
    currentList: null,
    taskCriteria: "increasing",
    dueDateCriteria: "increasing",
    completedCriteria: "increasing"
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  }

  sortItemsByTask = (e) => {
    if(this.state.taskCriteria === "increasing"){
        this.setState({taskCriteria: "decreasing"})
        console.log(this.state.taskCriteria);
    }
    else{
        this.setState({taskCriteria: "increasing"})
        console.log(this.state.taskCriteria);
    }

  }  

  sortItemsByDueDate = (e) => {
    
   
  } 

  sortItemsByStatus = (e) => {
    
  }

  deleteItem = (id) => {
    console.log(id);
  }

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists} />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList}
          deleteItem={this.deleteItem}
          loadList={this.loadList}
          sortItemsByTask={this.sortItemsByTask}
          sortItemsByDueDate={this.sortItemsByDueDate}
          sortItemsByStatus={this.sortItemsByStatus} />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;