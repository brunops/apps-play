import { render } from 'react-dom'
import React from 'react'
import { Router, browserHistory } from 'react-router/es6'
import routes from './routes'

// import './index.html'

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
