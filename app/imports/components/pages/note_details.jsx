import React from 'react'
import { AppHeaderLayout } from '../layouts/app_header_layout'

export const NoteDetails = (props) => 
<div id="app-container">
  <AppHeaderLayout pageTitle={props.note.title} />
  <div id="main-content" className="container">
    Note details
  </div>
</div>