import React from 'react'
import { IconBtn } from '../buttons/icon_btn'

export const AppHeaderLayout = (props) =>
<nav id="app-header" className="container three-col-layout">
  <h1 className="page-title main-content">{props.pageTitle}</h1>
</nav>

AppHeaderLayout.propTypes = {
  pageTitle: React.PropTypes.string
}

AppHeaderLayout.defaultProps = { 
  pageTitle: "My Notes App"
}