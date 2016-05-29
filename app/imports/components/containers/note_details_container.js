import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Note } from '../../api/notes/notes'
import { Meteor } from 'meteor/meteor'
import { AppLayout } from '../layouts/app_layout'
import { AppLib } from '../../lib/app_lib'

export default createContainer(
	() => {
		
		const
		  noteId = FlowRouter.getParam('_id'),
		  sub = Meteor.subscribe('note.details', noteId),
			note = sub.ready()? Note.findOne({_id: noteId }) : {},
			handleUpdates = (collection, field, value) =>  {		
		    const doc = {}
		    doc[field] = value
		    collection.set(doc)
		    Meteor.call('/note/save', collection, (err, result) => AppLib.db.handleDbResult(err, result))
			}

	  return {
		  note,
		  subsReady: sub.ready(),
		  handleUpdates
	  }
  },
  AppLayout
)