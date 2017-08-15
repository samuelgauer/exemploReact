import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Spec from '../spec/spec'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/specs' component={Spec} />
        <Redirect from='*' to='/' />
    </Router>
)