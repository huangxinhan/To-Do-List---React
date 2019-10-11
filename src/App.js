import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'
import AddItemScreen from './components/item_screen/AddItemScreen.js'
import PopUp from './components/list_screen/PopUp.js'
import jsTPS, { jTPS } from './JsTps/jTPS.js'
import changeName_Transaction from "./JsTps/changeName_Transaction.js"
import changeOwner_Transaction from './JsTps/changeOwner_Transaction.js'
import changeOrder_Transaction from './JsTps/changeOrder_Transaction.js'
import deleteItem_Transaction from './JsTps/deleteItem_Transaction.js'
import changeItem_Transaction from './JsTps/changeItem_Transaction.js'
import addItem_Transaction from './JsTps/addItem_Transaction.js'
import { XMLNS_1_0 } from 'xmlchars';

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN",
  ADD_ITEM_SCREEN: "ADD_ITEM_SCREEN",
  POP_UP_SCREEN: "POP_UP_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists, 
    currentList: null,
    taskCriteria: "increasingTask",
    dueDateCriteria: "increasingDate",
    completedCriteria: "increasingStatus",
    currentCriteria: null,
    currentIndex: null,
    showPopup: false,
    transactionStack: jsTPS,
    changeNameTransaction: changeName_Transaction,
    currentDescription: null,
    currentAssignedTo: null,
    currentDueDate: null,
    currentCompleted: null,
    newDescription: "",
    newAssignedTo: "",
    newDueDate: "",
    newCompleted: false,
  }

  transactionStack = new jTPS();

  togglePopup(){
    this.setState({showPopup: !this.state.showPopup})
  }

  addNewItem = () => {
    /*var newItem = {
      "key": this.state.currentList.items.length,
      "description": "",
      "due_date": "",
      "assigned_to": "",
      "completed": false
    }
    this.state.currentList.items.push(newItem);*/
    this.setState({currentIndex: this.state.currentList.items.length-1}, this.showNewItemScreen);
  }

  showNewItemScreen = () => {
    this.setState({currentScreen: AppScreen.ADD_ITEM_SCREEN});
  }

  editItem = (index, e) => {
    this.setState({currentIndex: index}, this.showItemScreen);
  }

  showItemScreen = () => {
    this.setState({currentDescription: this.state.currentList.items[this.state.currentIndex].description})
    this.setState({currentAssignedTo: this.state.currentList.items[this.state.currentIndex].assigned_to})
    this.setState({currentDueDate: this.state.currentList.items[this.state.currentIndex].due_date})
    this.setState({currentCompleted: this.state.currentList.items[this.state.currentIndex].completed})
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
  }

  showPopup = () => {
    this.setState({currentScreen: AppScreen.POP_UP_SCREEN})
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
    this.transactionStack.clearAllTransactions();
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
    let sortedList = this.state.currentList;
    sortedList.items.sort(this.compare);
    for (var i = 0; i < sortedList.items.length; i++){
      sortedList.items[i].key = i;
    }
    this.setState({currentList : sortedList})
    this.loadList(this.state.currentList);

    /*this.state.currentList.items.sort(this.compare);
    for (var i = 0; i < this.state.currentList.items.length; i++){
      this.state.currentList.items[i].key = i; //resetting the keys
    }
    this.loadList(this.state.currentList);*/
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
    if(this.state.currentCriteria === "increasingStatus" 
     ||  this.state.currentCriteria === "decreasingStatus"){
        if (item1.completed < item2.completed)
            return -1;
        else if (item1.completed > item2.completed)
            return 1;
        else
            return 0;
    }
}
  deleteList = () => {
    let newTodoLists = this.state.todoLists;
    newTodoLists.splice(this.state.currentList.key, 1);
    for (var i = 0; i < newTodoLists.length; i++){
      newTodoLists[i].key = i;
    }
    this.setState({todoLists: newTodoLists});
    this.setState({currentList: null}, this.homeList);

    /*this.state.todoLists.splice(this.state.currentList.key, 1); //remove from array
    for (var i = 0; i < this.state.todoLists.length; i++){
      this.state.todoLists[i].key = i; //resetting the keys
    }
    this.setState({currentList: null}, this.homeList);*/
  }

  homeList = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
  }

  nullList = () => {
    this.setState({currentList: null});
  }

  newList = () => {
    var newList = {
      "key": this.state.todoLists.length,
      "name": "new todo list",
      "owner": "Owner",
      "items": []
    }
    this.state.todoLists.push(newList);
    this.setState({currentList: newList})
    this.setState({currentScreen: AppScreen.LIST_SCREEN})
  }

  componentDidMount(){
    document.addEventListener("keydown", this.control)
  }

  control = (e) => {
    if(e.keyCode === 90 && e.ctrlKey){
      this.transactionStack.undoTransaction();
      this.setState({currentScreen: AppScreen.POP_UP_SCREEN});
      this.setState({currentScreen: AppScreen.LIST_SCREEN});
    }
    if(e.keyCode === 89 && e.ctrlKey){
      this.transactionStack.doTransaction();
      this.setState({currentScreen: AppScreen.POP_UP_SCREEN});
      this.setState({currentScreen: AppScreen.LIST_SCREEN});
    }
  }

  changeName = (e) => {
    var changeNameTransaction = new changeName_Transaction(this.state.currentList, this.state.currentList.name, e.target.value);
    this.transactionStack.addTransaction(changeNameTransaction);
  }

  changeOwner = (e) => {
    var changeOwnerTransaction = new changeOwner_Transaction(this.state.currentList, this.state.currentList.owner, e.target.value);
    this.transactionStack.addTransaction(changeOwnerTransaction);
  }

  moveUp = (index, e) => {
    e.stopPropagation();
    var changeOrderTransaction = new changeOrder_Transaction(this.state.currentList, index, index-1, "up");
    this.transactionStack.addTransaction(changeOrderTransaction);
    this.setState({currentScreen: AppScreen.POP_UP_SCREEN});
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
  }

  moveDown = (index, e) => {
    e.stopPropagation();
    var changeOrderTransaction = new changeOrder_Transaction(this.state.currentList, index, index+1, "down");
    this.transactionStack.addTransaction(changeOrderTransaction);
    this.setState({currentScreen: AppScreen.POP_UP_SCREEN});
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
  }

  deleteItem = (index, e) => {
    e.stopPropagation();
    var deleteItemTransaction = new deleteItem_Transaction(this.state.currentList, this.state.currentList.items[index], index);
    this.transactionStack.addTransaction(deleteItemTransaction);
    this.setState({currentScreen: AppScreen.POP_UP_SCREEN});
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
  }

  confirmChange = () => {
    var changeItemTransaction = new changeItem_Transaction(this.state.currentList.items[this.state.currentIndex], this.state.currentDescription, this.state.currentAssignedTo, this.state.currentDueDate, this.state.currentCompleted);
    this.transactionStack.addTransaction(changeItemTransaction);
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
  }

  confirmAdd = () => {
    var addItemTransaction = new addItem_Transaction(this.state.currentList, this.state.newDescription, this.state.newAssignedTo, this.state.newDueDate, this.state.newCompleted);
    this.transactionStack.addTransaction(addItemTransaction);
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
  }

  changeDescription = (e) =>{
    this.setState({currentDescription: e.target.value})
  }

  changeAssignedTo = (e) =>{
    this.setState({currentAssignedTo: e.target.value})
  }

  changeDueDate = (e) =>{
    this.setState({currentDueDate: e.target.value})
  }

  changeCompleted = (e) => {
    this.setState({currentCompleted: e.target.checked})
  }

  changeDescription1 = (e) =>{
    this.setState({newDescription: e.target.value})
  }

  changeAssignedTo1 = (e) =>{
    this.setState({newAssignedTo: e.target.value})
  }

  changeDueDate1 = (e) =>{
    this.setState({newDueDate: e.target.value})
  }

  changeCompleted1 = (e) => {
    this.setState({newCompleted: e.target.checked})
  }

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists}
        newList={this.newList} />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList}
          deleteItem={this.deleteItem}
          loadList={this.loadList}
          sortItemsByTask={this.sortItemsByTask}
          sortItemsByDueDate={this.sortItemsByDueDate}
          sortItemsByStatus={this.sortItemsByStatus}
          editItem={this.editItem}
          addNewItem={this.addNewItem}
          showPopup={this.showPopup}
          changeName={this.changeName}
          changeOwner={this.changeOwner}
          transactionStack={this.state.transactionStack}
          changeNameTransaction={this.state.changeNameTransaction}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          deleteItem={this.deleteItem} />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen
          currentItem={this.state.currentList.items[this.state.currentIndex]}
          loadList={this.loadList}
          todoList={this.state.currentList}
          currentDescription={this.state.currentDescription}
          currentAssignedTo={this.state.currentAssignedTo}
          currentDueDate={this.state.currentDueDate}
          currentCompleted={this.state.currentCompleted}
          confirmChange={this.confirmChange}
          changeDescription={this.changeDescription}
          changeAssignedTo={this.changeAssignedTo}
          changeDueDate={this.changeDueDate}
          changeCompleted={this.changeCompleted}
          />;
      case AppScreen.ADD_ITEM_SCREEN:
          return <AddItemScreen
          currentItem={this.state.currentList.items[this.state.currentIndex]}
          loadList={this.loadList}
          todoList={this.state.currentList}
          confirmAdd={this.confirmAdd}
          changeDescription1={this.changeDescription1}
          changeAssignedTo1={this.changeAssignedTo1}
          changeDueDate1={this.changeDueDate1}
          changeCompleted1={this.changeCompleted1}
          />;
      case AppScreen.POP_UP_SCREEN:
          return <PopUp
          text = "Are you sure you want to delete the list?"
          closePopup={this.loadList}
          loadList={this.loadList}
          todoList={this.state.currentList}
          goHome={this.goHome.bind(this)}
          deleteList={this.deleteList}
           />;

      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;