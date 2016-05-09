import React from 'react'

export const AppHeaderLayout = (props) =>
<nav className="navbar navbar-default three-col-layout">
  <div className="container">
    <div className="navbar-header">
      <h1 className="navbar-brand">{props.pageTitle}</h1>
    </div>
 </div>
</nav>


AppHeaderLayout.propTypes = {
  pageTitle: React.PropTypes.string
}

AppHeaderLayout.defaultProps = { 
  pageTitle: "My Notes App"
}