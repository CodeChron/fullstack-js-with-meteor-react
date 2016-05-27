import React from 'react'
import { IconBtn } from '../buttons/icon_btn'
import { SingleFieldSubmit } from '../forms/single_field_submit'
import { Loader } from '../loader/loader.jsx'

export const List = (props) =>{

	const handleDelete = (item) => {
		const confirmDelete = confirm("Really delete this?")

 	  if (confirmDelete) {
 	  	props.handleDelete(item)
 	  }
	}

 const listFeatures = {
  	addItem: () => <li className="list-group-item"><SingleFieldSubmit {...props} /></li>,
  	deleteItem: (args) => <span className="pull-right"><IconBtn title={"Delete"} icon={"glyphicon glyphicon-remove"}  handleClick={()=> handleDelete(args)} /></span>
	}
	
	return  props.subsReady?
	  <ul className="list-group">
	    {props.addItem?
         listFeatures.addItem()
       :
        null
      }
	    {props.collection.map(
	    	(item) => 
	    	  <li key={item._id} className="list-group-item">
 	          {item.title} 
 	          {props.deleteItem?
 	      	    listFeatures.deleteItem(item)
 	           :
 	             null
 	          }
 	        </li>
 	    )}
    </ul>
    :
    <Loader />
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