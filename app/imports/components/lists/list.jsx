import React from 'react'
import { IconBtn } from '../buttons/icon_btn'
import { SingleFieldSubmit } from '../forms/single_field_submit'

export const List = (props) =>{

	const handleDelete = (item) => {
		const confirmDelete = confirm("Really delete this?")

 	  if (confirmDelete) {
 	  	props.handleDelete(item)
 	  }
	}

	const displayFeature = (shouldDisplay, feature, args ) => shouldDisplay? feature(args) : null

 const listFeatures = {
  	addItem: () => <li className="list-group-item"><SingleFieldSubmit {...props} /></li>,
  	deleteItem: (args) => <span className="pull-right"><IconBtn title={"Delete"} icon={"glyphicon glyphicon-remove"}  handleClick={()=> handleDelete(args)} /></span>
	}
	
	return props.subsReady?
	  <ul className="list-group">
	    {displayFeature(props.addItem, listFeatures.addItem)}
	    { 
	    	props.collection.map((item) => {
	 	      return <li key={item._id} className="list-group-item">{item.title} {displayFeature(props.deleteItem, listFeatures.deleteItem, item)}
	 	      </li>
	      })
	    }
    </ul>
    :
    null
}

List.propTypes = {
	collection: React.PropTypes.array.isRequired,
	subsReady: React.PropTypes.bool.isRequired,
	addItem: React.PropTypes.bool,
	deleteItem:  React.PropTypes.bool,
}
List.defaultProps = {
	addItem: false,
	deleteItem: false
}
