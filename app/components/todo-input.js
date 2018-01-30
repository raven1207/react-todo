import React from "react"
export default class TodoInput extends React.Component{
   constructor(props){
     super(props)
     this.state={
     	error:null
     }
  }
  render(){
  	return (
         <div className="row">
          <form onSubmit={this.handleCreate.bind(this)}>
          	<div className="col-8">
              <input type="text" className="form-input" placeholder="i love u" ref="createInput"  />
              {this.renderError()}
          	</div>
          	<div className="col-4">
             <button className="btn">创建</button>
          	</div>
          </form>
        </div>

  		)
  }
  handleCreate(e){
         e.preventDefault()
         const task=this.refs.createInput.value;
         const error=this.props.validateTask(task)
         if(error){
          this.setState({error:error})
          return 
         }
         this.props.addTask(task)
         this.refs.createInput.value=''
         this.setState({error:null})
  }
  renderError(){
    if(this.state.error){
      return <div className="alert alert-error">{this.state.error}</div>
    }
    return null
  }
} 


