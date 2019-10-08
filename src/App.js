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
    taskCriteria: "increasingTask",
    dueDateCriteria: "increasingDate",
    completedCriteria: "increasingStatus",
    currentCriteria: null
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
    //e.stopPropagation();
    if(this.state.taskCriteria === "increasingTask"){
        this.setState({taskCriteria: "decreasingTask"})
        this.setState({currentCriteria: "decreasingTask"}, this.callback)
        console.log("after setting state to task, the criteria is" + this.state.currentCriteria);

    }
    else{
        this.setState({taskCriteria: "increasingTask"})
        this.setState({currentCriteria: "increasingTask"}, this.callback)
        console.log("after setting state to task, the criteria is" + this.state.currentCriteria);

    }


  }  

  sortItemsByDueDate = (e) => {
    //e.stopPropagation();
    if(this.state.dueDateCriteria === "increasingDate"){
      this.setState({dueDateCriteria: "decreasingDate"})
      this.setState({currentCriteria: "decreasingDate"}, this.callback)
      console.log("after setting state to date, the criteria is" + this.state.currentCriteria);

    }
    else{
      this.setState({dueDateCriteria: "increasingDate"})
      this.setState({currentCriteria: "increasingDate"}, this.callback)
      console.log("after setting state to date, the criteria is" + this.state.currentCriteria);

    }
   
  } 

  sortItemsByStatus = (e) => {
    //e.stopPropagation();
    if(this.state.completedCriteria === "increasingStatus"){
      this.setState({completedCriteria: "decreasingStatus"})
      this.setState({currentCriteria: "decreasingStatus"}, this.callback)
      console.log("after setting state to status, the criteria is" + this.state.currentCriteria);

    }
    else{
      this.setState({completedCriteria: "increasingStatus"})
      this.setState({currentCriteria: "increasingStatus"}, this.callback)
      console.log("after setting state to status, the criteria is" + this.state.currentCriteria);

    }

  }

  callback = () => {
    this.state.currentList.items.sort(this.compare);
    this.loadList(this.state.currentList);
  }

  deleteItem = (id) => {
    console.log(id);
  }

  compare = (item1, item2) => {
    console.log("the current criteria is" + this.state.currentCriteria)
    // IF IT'S A DECREASING CRITERIA SWAP THE ITEMS
    if (this.state.currentCriteria === "decreasingTask"
    ||  this.state.currentCriteria === "decreasingDate"
    ||  this.state.currentCriteria === "decreasingStatus") {
        let temp = item1;
        item1 = item2;
        item2 = temp;
    }

    // SORT BY ITEM DESCRIPTION
    if (this.state.currentCriteria === "increasingTask"
        || this.state.currentCriteria === "decreasingTask") {
        if (item1.description < item2.description)
            return -1;
        else if (item1.description > item2.description)
            return 1;
        else
            return 0;
    }

    // SORT BY ITEM DUE DATE
    if(this.state.currentCriteria === "increasingDate"
        || this.state.currentCriteria === "decreasingDate"){
        if(item1.due_date < item2.due_date)
            return -1;
        else if (item1.due_date > item2.due_date)
            return 1;
        else   
            return 0;
    }

    // SORT BY COMPLETED
    else {
        if (item1.completed < item2.completed)
            return -1;
        else if (item1.completed > item2.completed)
            return 1;
        else
            return 0;
    }
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