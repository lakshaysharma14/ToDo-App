import React, { Component } from 'react';
import Todos from './ToDo.js'
import AddForm from './AddForm.js'

class App extends Component {
  
  state =
  {
    todos:
    [
      {id:1 , content:"go to market"},
      {id:2 , content:"study"}
    ]
  }

  deleteTodo =(id) =>
  {
    console.log(id);
    const tds=this.state.todos.filter(TD =>
    {
      return TD.id !=id

    });
    
    this.setState
    ({
      todos:tds

    })
  }

  addTodo =(todo) =>
  {
    todo.id = Math.random();
    let todoss =[...this.state.todos,todo]
    this.setState
    ({
      todos:todoss
    })

  }
  

  render() {
    return (
      <div className='todo-app container'>
            <h1 className="center blue-text">ToDo</h1>

            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            <AddForm addTodo={this.addTodo} />
        
      </div>
   
   

        
      
    );
  }
}

export default App;
