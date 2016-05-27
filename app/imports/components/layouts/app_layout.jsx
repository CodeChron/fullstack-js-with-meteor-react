import React from 'react'
import { AppHeaderLayout } from './app_header_layout'
import { SingleFieldSubmit } from '../forms/single_field_submit'

export const AppLayout = () =>
  <div id="app-container">
    <AppHeaderLayout />
    <div id="main-content" className="container">
     <SingleFieldSubmit />
    </div>
  </div>