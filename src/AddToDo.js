import React, { Component } from 'react';
class AddToDo extends Component {
 constructor(props) {
  super(props)
  this.state = {
   userInput: "",
   toDoList: ["hello", "bye"]
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
  handleSubmit = (e) => {
    e.preventDefault()
    const itemArr = this.state.userInput
    let newArr = [...this.state.toDoList, itemArr]
    this.setState({
      toDoList: newArr
    })
  }
  handleChange = (e) => {
   e.preventDefault()
   this.setState({
    userInput: e.target.value
   })
  }
  DeleteToDo = (e) => {
// this.state.toDoList.indexOf(e.currentTarget.dataset.value)
let newArr = [...this.state.toDoList]
 newArr = newArr.filter(todo => {
  return todo !== e.currentTarget.dataset.value
})
    this.setState({
      toDoList: newArr
    })
  }
  render() {
    const items = this.state.toDoList.map( (x, i) => <li data-value={x} onClick={this.DeleteToDo} key={i}>{x}</li>);
  console.log(items)
    return(
   <div className="doing">
    <form onSubmit={this.handleSubmit}>
      <input value={this.state.userInput} type="text" onChange={this.handleChange} />
      <button>Submit</button>
    </form>   
    <h1>My ToDo List:</h1>
    <ul>
      {items}
    </ul>
   </div>
  )
 }
}

export default AddToDo