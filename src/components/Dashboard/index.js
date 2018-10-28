import React, { Component } from 'react'
import { connect } from "react-redux"

import uuidv1  from 'uuid/v1';

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
            let id=uuidv1()
            let classes = "set-margin "+ todo.color
            todoList.push(
                <div class="todo-card col-12 col-sm-6 col-md-6 col-lg-4" key={id}>
                    <div class={classes}>
                        {todo.text}
                    </div>
                </div>
            )
            id++
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