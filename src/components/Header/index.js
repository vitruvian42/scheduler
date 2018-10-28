import React, { Component } from 'react'

import Add from './Add'

import Filter from './Filter'

export default class Header extends Component{
    constructor(props){
        super(props)
        this.handleRoute = this.handleRoute.bind(this)
    }

    componentDidMount(){

    }

    handleRoute(color){
        this.props.handleRoute(color)
    }

    render(){
        return(
            <div className="header-container">
                
                    <Add handleRoute={this.handleRoute}></Add>
            </div>
        )
    }
}