import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Note } from '../../api/notes/notes'
import { Meteor } from 'meteor/meteor'
import { AppLayout } from '../layouts/app_layout'
import { AppLib } from '../../lib/app_lib'

export default createContainer(
	() => {
		
		const
		  sub = Meteor.subscribe('notes.list.all'),
			notes = sub.ready()? Note.find({}, { sort: { updatedAt: -1 }}).fetch() : []
			,
			redirectToNoteDetail = note => FlowRouter.go("noteDetail", {_id: note._id})
			,
		  handleCreateNote = (title) => {
		    Meteor.call(
		    	'/note/create',
		    	title,
		    	(err, result) => AppLib.db.handleDbResult(err, redirectToNoteDetail(result))
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
