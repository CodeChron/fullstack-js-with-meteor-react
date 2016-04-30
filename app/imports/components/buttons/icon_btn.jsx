import React from 'react'

export const IconBtn = (props) => {
  
  const iconType = () => 
    props.isMaterialIcon?
      <i className="material-icons">{props.icon}</i>
    :
      <span className={props.icon} aria-hidden="true"></span> 

  return <button
    onClick={props.handleClick}
    className="icon-btn"
    title={props.title}
     alt={props.title}>
     { iconType() }
  </button>

}

IconBtn.propTypes = {
	handleClick: React.PropTypes.func.isRequired,
  isMaterialIcon: React.PropTypes.bool,
	icon: React.PropTypes.string.isRequired,
	title: React.PropTypes.string
}

IconBtn.defaultProps = {
  isMaterialIcon: false
}
