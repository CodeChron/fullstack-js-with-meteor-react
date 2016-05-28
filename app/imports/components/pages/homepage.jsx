import React from 'react'
import { AppHeaderLayout } from '../layouts/app_header_layout'
import { List } from '../lists/list'

export const Homepage = (props) => 

<div id="app-container">
  <AppHeaderLayout />
  <div id="main-content" className="container">
    <List collection={props.notes} {...props} />
  </div>
</div>
