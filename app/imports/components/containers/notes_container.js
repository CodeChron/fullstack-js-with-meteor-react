import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../../api/notes/notes'
import { AppLayout } from '../layouts/app_layout'

export default createContainer(
	() => {
		
		const
			notes = Notes.find({}, { sort: { updatedAt: -1 }}).fetch()
			,
		  handleCreateNote = (title) => {
			  Notes.insert({ 
				  title,
				  updatedAt: new Date() 
			  })
		  },
		  handleDeleteNote = (note) => {
		    Notes.remove({_id: note._id})
	    }

	  return {
	  	handleSubmit: handleCreateNote,
	  	handleDelete: handleDeleteNote,
		  placeholder: "New Note",
		  notes,
		  addItem: true,
      deleteItem: true
	  }
  },
  AppLayout
)
