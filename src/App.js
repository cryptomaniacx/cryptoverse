import React from 'react'
import {Switch, Route , Link} from 'react-router-dom'
import { Layout, Typography,Space } from 'antd'

import { Navbar } from './Components' 

const App = () => {
  return (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        
      </div>
    </div>
  </div>
  )
}

export default App;