import React, { Component } from 'react';
import Zeus from './zeus';
import './index.css';
import Updatetodo from './updatelist';
class App extends Component {
  state = {
    todos : [
      {id:1,content:"Count to No. of Objects"},
      {id:2,content:"use of simple fraction names"}
    ]
  }
  delete_entry = (id) =>{
   const todos=this.state.todos.filter(temp2=>{
      return  temp2.id!==id
    }
 );
 this.setState(
   {todos}
 )
  }

  updatelisttodo = (todo) => {
    todo.id = Math.random();
    let todos=[...this.state.todos,todo]
    this.setState({
      todos
    })
  }
  render(){
  return (
    <div className="App container">
     <span className=" heading center blue-text"> Actions </span> 
     <span className=" heading blue-text" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Standard   </span>
     <Zeus temp={this.state.todos} delete_entry={this.delete_entry}/>
     <Updatetodo temp={this.updatelisttodo}/>
    </div>
  )
  }
}

export default App;
