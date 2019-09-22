import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Work from './Components/Work/Work'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'



export default (
    <Switch>

        <Route exact path = '/CA-Assessment' component={Home}/>
        <Route path = '/Work' component={Work}/>
        <Route path = '/About' component={About}/>
        <Route path = '/Contact' component={Contact}/>

    </Switch>
)