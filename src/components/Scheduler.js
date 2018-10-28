import React, { Component } from "react"

import Header from './Header'

import Dashboard from './Dashboard'


export default class Scheduler extends Component {
  constructor(props) {
    super(props)
    this.handleRoute = this.handleRoute.bind(this)
  }

  componentDidMount() {
    
  }

  handleRoute(color){
    this.props.history.push(color)
  }

  

  render() {
    let color = this.props.match.params.color
    return (
      <div>
        <Header handleRoute={this.handleRoute}></Header>
        <Dashboard color={this.props.match.params.color}></Dashboard>
      </div>
    );
  }
}