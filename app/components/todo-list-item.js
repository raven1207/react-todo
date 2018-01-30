import React from 'react'
class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            error: null
        }
    }
    render() {
        const taskStyle = {
            color: this.props.isCompleted ? 'blue' : 'red'
        }
        return (
            <tr key={this.props.index}>
              {this.renderTaskSection()}
              {this.renderActionSection()}
               </tr>
        )
    }
    renderTaskSection() {
        if(this.state.isEditing){
        	return (
                 <td>
                 	<form onSubmit={this.onSave.bind(this)}>
                 		<input type="text" className="form-input" defaultValue={this.props.task} ref="editInput" />
                 		{this.renderError()}
                 	</form>
                 </td>
        		)
        }
        const taskStyle = {
            color: this.props.isCompleted ? 'red' : 'blue'
        }
        if (!this.props.isCompleted) {
            return (
                <td onClick={this.onToggle.bind(this)} style={taskStyle}>
             	{this.props.task}
             </td>
            )
        }
        return (
          <td onClick={this.onToggle.bind(this)} style={taskStyle}><strike>{this.props.task}</strike></td>
        )

    }
    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <td>
           	<button className="btn btn-small" onClick={this.onSave.bind(this)}>save</button>
           	<button className="btn btn-small" onClick={this.onCancel.bind(this)}>Cancel</button>
           </td>
            )
        }
        return (
            <td>
           	<button className="btn btn-small" onClick={this.onEdit.bind(this)}>Edit</button>
           	<button className="btn btn-small" onClick={this.onDel.bind(this)}>Delete</button>
           </td>
        )
    }
    renderError(){
    	if(this.state.error){
    		return (
                  <div className="alert alert-error">{this.state.error}</div>
    			)
    	}
    	return null
    }
    onToggle() {
    	this.props.toggleTask(this.props.task)
    }
    onSave(e) {
    	e.preventDefault()
    	const oldTask=this.props.task
    	const newTask=this.refs.editInput.value;
    	const error = this.props.validateTask(newTask)
    	if(error) this.setState({error:error})
    	this.props.saveTask(oldTask,newTask)
    	this.setState({isEditing:false})
    }
    onCancel() {
    	this.setState({
    		isEditing:false
    	})
    }
    onEdit() {
    	this.setState({isEditing:true})
    }
    onDel() {
    	const currentTask=this.props.task
    	this.props.deleteTask(currentTask)
    }
}
export default TodoListItem