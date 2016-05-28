import React from 'react'
import classNames from 'classNames'

export const IconBtn = (props) => {

  const btnClasses = classNames("btn btn-default icon-btn", props.btnSize)

  return <button
      onClick={props.handleClick}
      className={btnClasses}
      title={props.title}
       alt={props.title}
    >
      <span className={props.icon} aria-hidden="true"></span>
    </button>  
}


IconBtn.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  icon: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  btnSize: React.PropTypes.string
}

IconBtn.defaultProps = {
  btnSize: "btn-lg"
}