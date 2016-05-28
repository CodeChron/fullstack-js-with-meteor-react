import React from 'react'

export const AppHeaderLayout = (props) =>
<nav className="navbar navbar-default three-col-layout">
  <div className="left-right-icons">
    {props.headerLeft}
  </div>
  <div className="container main-content centered">
    <div className="navbar-header">
      <h1 className="navbar-brand full-width">{props.pageTitle}</h1>
    </div>
 </div>
   <div className="left-right-icons">
    {props.headerRight}
  </div>
</nav>


AppHeaderLayout.propTypes = {
  pageTitle: React.PropTypes.string
}

AppHeaderLayout.defaultProps = { 
  pageTitle: "My Notes App",
  headerLeft: null,
  headerRight: null
}