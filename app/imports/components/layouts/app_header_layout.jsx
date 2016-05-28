import React from 'react'

export const AppHeaderLayout = (props) => {
	const dfltPageTitle = <h1 className="navbar-brand full-width">{"My Notes App"}</h1>

	return <nav className="navbar navbar-default three-col-layout">
	  <div className="left-right-icons">
	    {props.headerLeft}
	  </div>
	  <div className="container main-content centered">
	    <div className="navbar-header full-width">
	      {props.headerCenter}
	    </div>
	 </div>
	   <div className="left-right-icons">
	    {props.headerRight}
	  </div>
	</nav>

}


AppHeaderLayout.propTypes = {
  pageTitle: React.PropTypes.string
}

AppHeaderLayout.defaultProps = { 
  headerLeft: null,
  headerCenter: this.dfltPageTitle,
  headerRight: null
}