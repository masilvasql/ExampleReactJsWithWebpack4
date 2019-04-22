import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Sobre from './views/Sobre'

export default props =>(
   <main>
        <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/Sobre' component={Sobre}/>
    </Switch>
   </main>
)