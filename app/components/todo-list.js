import React from "react"
import _ from "lodash"
import TodoListHeader from "components/todo-list-header"
import TodoListItem from "components/todo-list-item"

class TodoList extends React.Component {
	constructor(props){
		super(props)
	}
    // renderItem(){

    //   return <TodoListItem key={index} todos={this.props.todos} />

    // }
    render() {
        return (
            <table className="table table-striped">
            <TodoListHeader />
      <tbody>
     {this.props.list.map((todo, index) =>
          <TodoListItem {...todo}
                key={index}
                onClick={() => this.props.onTodoClick(index)} {...this.props} />
        )}

    </tbody>
	</table>
        )
    }
}
export default TodoList;