import React from 'react'

import Menu from '../components/Menu'

export default ({ children }) => (
    <div>
        <Menu />
        <h1>Hello, bro</h1>
        {children}
    </div>
)
