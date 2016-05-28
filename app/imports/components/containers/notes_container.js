import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Notes } from '../../api/notes/notes'
import { Meteor } from 'meteor/meteor'

import { AppLayout } from '../layouts/app_layout'

export default createContainer(
	() => {
		
		const
		  sub = Meteor.subscribe('notes.list.all'),
			notes = sub.ready()? Notes.find({}, { sort: { updatedAt: -1 }}).fetch() : []
			,
			redirectToNoteDetail = note => FlowRouter.go("noteDetail", {_id: note._id})
			,
			handleDbResult = (err, result) => err? console.log('db error: ' + err.reason) : result
			,
		  handleCreateNote = (title) => {
		    Meteor.call(
		    	'/note/create',
		    	title,
		    	(err, result) => handleDbResult(err, redirectToNoteDetail(result))
		    )
		  }
		  ,
		  handleDeleteNote = (note) => {
		  	Meteor.call(
		  		'/note/delete',
		  		note._id,
		  		(err, result) => handleDbResult(err)
        )
	    }

	  return {
		  notes,
		  subsReady: sub.ready(),
	  	handleSubmit: handleCreateNote,
	  	handleDelete: handleDeleteNote,
		  placeholder: "New Note",
		  addItem: true,
      deleteItem: true,
      linkItem: true
	  }
  },
  AppLayout
)
