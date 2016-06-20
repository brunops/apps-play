import { render } from 'react-dom'
import React from 'react'

import './index.html'

const Root = () => (
  <h1>Hello World</h1>
)

render(
  <Root />,
  document.getElementById('root')
)
