import React, { Component } from "react"


import { connect } from "react-redux"

import uuidv1  from 'uuid/v1';

import { createTodo } from '../../actions/todo';
@connect((store)=> {
  return {
      todos : store.todos.todos
  }
})


export default class Add extends Component {
  constructor(props) {
    super(props)
    this.createTodo = this.createTodo.bind(this)
    this.onKeyPress= this.onKeyPress.bind(this)
  }

  componentDidMount() {
    
  }

  onKeyPress(e){
    // if(e.key=="Enter") {
    //   this.createTodo(e.target.value)
    // }
  }

  createTodo(color){
    if(document.getElementById("add-todo-input").value!=""){
      let id = uuidv1()
      let todo = {
        id : id,
        text : document.getElementById("add-todo-input").value,
        color : color
      }
      document.getElementById("add-todo-input").value = ""
      this.props.dispatch(createTodo(todo))
      this.props.handleRoute("/")
    }else{
      this.props.handleRoute(color)
    }   
  }

  render() {
    return (
      <div>
          <div class="left-container">
            <input type="text" id="add-todo-input" name="name" class="question" required autoComplete="off" onChange={this.onChange} onKeyPress={this.onKeyPress}/>
            <label for="add-todo-input"><span>Add a To-Do Item!</span></label>
          </div>
          <div class="right-container">
            <div class="blue button" onClick={() => this.createTodo("blue")}>
              <i class="material-icons icons-pad">send</i>
            </div>
            <div class="green button" onClick={() => this.createTodo("green")}>
              <i class="material-icons icons-pad">send</i>
            </div>
            <div class="red button" onClick={() => this.createTodo("red")}>
              <i class="material-icons icons-pad">send</i>
            </div>
          </div>
      </div>
    );
  }
}