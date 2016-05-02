import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../../api/notes/notes'
import { List } from '../lists/list'
import { Meteor } from 'meteor/meteor'

export default createContainer(() => {

	const notes = Notes.find({}, { sort: { updatedAt: -1 }}).fetch()

	const handleCreate = (content) => {
    Meteor.call('/note/create', content, (err, result) => {
      if (!err) {
        console.log('note: ' + result._id)
      } else {
        console.log('there was an error: ' + err.reason)
      }
    })
	}

	const handleDelete = (note) => {
		Meteor.call('/note/delete', note._id, (err, result) => {
      if (err) {
        console.log('there was an error: ' + err.reason)
      }
    })
	}

  return {
  	handleSubmit: handleCreate,
	  placeholder: "New Note",
	  collection: notes,
	  handleDelete: handleDelete,
	  addItem: true,
	  deleteItem: true
  }

}, List)
