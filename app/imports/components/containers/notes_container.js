import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../../api/notes/notes'
import { Meteor } from 'meteor/meteor'
import { AppLayout } from '../layouts/app_layout'

export default createContainer(
	() => {
		
		const
			notes = Notes.find({}, { sort: { updatedAt: -1 }}).fetch()
			,
		  handleCreateNote = (title) => {
		    Meteor.call('/note/create', title, (err) => {
		      if (err) {
		        console.log('there was an error: ' + err.reason)
		      }
		    })
		  }
		  ,
		  handleDeleteNote = (note) => {
		  	Meteor.call('/note/delete', note._id, (err, result) => {
          if (err) {
            console.log('there was an error: ' + err.reason)
          }
        })
	    }

	  return {
		  notes,
	  	handleSubmit: handleCreateNote,
	  	handleDelete: handleDeleteNote,
		  placeholder: "New Note",
		  addItem: true,
      deleteItem: true
	  }
  },
  AppLayout
)
