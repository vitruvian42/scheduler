// Write applicaiton routes in this file

import React, { propTypes } from "react"
import { Switch, Route } from "react-router-dom"

import '../assets/css/style.scss'
import Scheduler from "./Scheduler"

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // <Route exact path='/blue' render={(props) => <Scheduler color="blue" /> } />
    // <Route exact path='/green' render={(props) => <Scheduler color="green" /> } />
  }

  render() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Scheduler}/>
                <Route exact path='/:color'  component={Scheduler} />
                
            </Switch>
        </main>
    );
  }
}
