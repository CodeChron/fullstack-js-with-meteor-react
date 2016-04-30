import React from 'react'

export const AppLayout = ({header, content}) =>
  <div id="app-container">
    {header()}
    <div id="main-content" className="container">
      {content()}
    </div>
  </div>
