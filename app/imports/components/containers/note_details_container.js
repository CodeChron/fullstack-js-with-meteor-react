import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Notes } from '../../api/notes/notes'
// import { Meteor } from 'meteor/meteor'

import { AppLayout } from '../layouts/app_layout'

export default createContainer(
	() => {
		
		const
		  noteId = FlowRouter.getParam('_id'),
		  sub = Meteor.subscribe('note.details', noteId),
			note = sub.ready()? Notes.findOne({_id: noteId }) : {},
			handleUpdates = (field) => null

	  return {
		  note,
		  subsReady: sub.ready(),
		  handleUpdates
	  }
  },
  AppLayout
)
