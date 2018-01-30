import React from "react"
import TodoInput from "Components/todo-input"
import TodoList from "Components/todo-list"



const todos = [
  {
    task: 'Learning React',
    isCompleted: true
  },
  {
    task: 'learn jsx',
    isCompleted: false
  },
  {
    task: 'learn action',
    isCompleted: false
  }

]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: todos
    }
  }
  addTask(task){
    this.state.todos.push({
        task:task,
        isCompleted:false
    })
    this.setState({todos:this.state.todos})
  }
  onTodoClick(task){
       
  }
  toggleTask(currentTask){
    const foundTask = _.find(this.state.todos, todo => todo.task === currentTask)
        foundTask.isCompleted = !foundTask.isCompleted
        this.setState({todos: this.state.todos})
  }
  validateTask(task){
      if(!task){
        return 'please enter a task!'
      }else if(_.find(this.state.todos,todo=>todo.task===task)){
        return 'task already exsits'
      }else{
        return ''
      }
  }
  saveTask(oldTask,newTask){
     const foundTask=_.find(this.state.todos,todo=>todo.task===oldTask)
     foundTask.task=newTask
     this.setState({todos:this.state.todos})
  }
  addTask(task){
    this.state.todos.unshift({
      task:task,
      isCompleted:false
    })
    this.setState({todos:this.state.todos})
  }
  deleteTask(task){
     _.remove(this.state.todos,todo=>todo.task===task)
     this.setState({
      todos:this.state.todos
     })
  }
  render() {
    return (
      <div className='row'>
                 <div className='col-3'></div>
             <div className='col-6'>
                  <h1>This is thie first React</h1>
                <TodoInput addTask={this.addTask.bind(this)}
                validateTask={this.validateTask.bind(this)}
                ></TodoInput>
                <TodoList list={this.state.todos}
                   toggleTask={this.toggleTask.bind(this)}
                   validateTask={this.validateTask.bind(this)}
                   saveTask={this.saveTask.bind(this)}
                   deleteTask={this.deleteTask.bind(this)}
                ></TodoList>
             </div>
             
               <div className='col-3'></div>
            </div>
    )
  }
}
export default App

