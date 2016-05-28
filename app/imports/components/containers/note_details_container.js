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
			handleUpdates = (field, value) =>  {
		    // IN PROGRESS
		    // const noteFields = {}

		    // noteFields[field] = value
		    // note.set(noteFields)

		    // Meteor.call('/note/save', note, (err, result) => {
		    //   if (err) {
		    //     note.catchValidationException(err)
		    //     console.log('there was an error: ' + err.reason)
		    //   } 
		    // })				
			}

	  return {
		  note,
		  subsReady: sub.ready(),
		  handleUpdates
	  }
  },
  AppLayout
)

  // handleUpdates(field, value){
    // const 
    //   note = this.data.note,
    //   noteFields = {}

    // noteFields[field] = value
    // note.set(noteFields)

    // Meteor.call('/note/save', note, (err, result) => {
    //   if (err) {
    //     note.catchValidationException(err)
    //     console.log('there was an error: ' + err.reason)
    //   } 
    // })
  // }