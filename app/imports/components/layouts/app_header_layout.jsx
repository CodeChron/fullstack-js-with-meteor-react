import React from 'react'
import { IconBtn } from '../buttons/icon_btn'

export const AppHeaderLayout = (props) =>
<nav id="app-header" className="container three-col-layout">
  <IconBtn isMaterialIcon={true} icon="clear" title="Cancel" />
  <h1 className="page-title main-content">{props.pageTitle}</h1>
   <IconBtn isMaterialIcon={true} icon="more_vert"  title="More options"/>
</nav>


AppHeaderLayout.propTypes = {
  pageTitle: React.PropTypes.string
}

AppHeaderLayout.defaultProps = { 
  pageTitle: "My Notes App"
}