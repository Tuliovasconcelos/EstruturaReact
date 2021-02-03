import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

//importar telas
import Principal from '../components/telas/principal'
import Sobre from '../components/telas/sobre'

export default props => (
    <Router history={hashHistory}>
        <Route path='/principal' component={Principal} />
        <Route path='/sobre' component={Sobre} />
        <Redirect from='*' to='/principal' />
    </Router>
)