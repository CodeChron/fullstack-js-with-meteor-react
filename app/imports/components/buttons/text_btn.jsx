import React from 'react'
import classNames from 'classNames'

export const TextBtn = (props) => {

  const btnClasses = classNames("btn", props.btnSize)

  return <button 
           className={btnClasses}
           title={props.title}
           alt={props.title}
           onClick={props.handleClick}
         >
          {props.title} 
         </button>

}

TextBtn.propTypes = {
  handleClick: React.PropTypes.func,
  title: React.PropTypes.string.isRequired,
  btnSize: React.PropTypes.string
}

TextBtn.defaultProps = {
  btnSize: "btn-default"
}