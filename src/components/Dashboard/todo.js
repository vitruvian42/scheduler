import React, { Component } from 'react'
  
export default class Todo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        let todo = this.props.todo
        let classes = "set-margin " +todo.color

        return (
            <div class="todo-card col-12 col-sm-6 col-md-6 col-lg-4">
                <div class={classes}>
                    {todo.text}
                </div>
            </div>
        )
    }
}