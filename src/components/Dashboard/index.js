import React, { Component } from 'react'
import { connect } from "react-redux"

import Todo from './todo'

@connect((store)=> {
    return {
        todos : store.todos.todos
    }
})


  
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        let todos = this.props.todos
        let todoList = []

        if(this.props.color){
            todos = todos.filter(todo => todo.color==this.props.color);
        }

        todos.map((todo)=>{
            let classes = "set-margin "+ todo.color
            todoList.push(
                <Todo classes={classes} todo={todo}  key={todo.id}/>
            )
        })

        return (
            <div class="container todo-container">
                <div class="row">
                    {todoList}
                </div>
            </div>
        )
    }
}