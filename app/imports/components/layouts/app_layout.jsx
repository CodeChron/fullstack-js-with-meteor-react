import React from 'react'
import { AppHeaderLayout } from './app_header_layout'

export const AppLayout = (props) =>
  <div id="app-container">
    <AppHeaderLayout />
    <div id="main-content" className="container">
     {props.content(props)}
    </div>
  </div>