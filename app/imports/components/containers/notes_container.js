import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../../api/notes/notes'
import { Meteor } from 'meteor/meteor'
import { AppLayout } from '../layouts/app_layout'

export default createContainer(
	() => {
		
		const
		  sub = Meteor.subscribe('notes.list.all'),
			notes = sub.ready()? Notes.find({}, { sort: { updatedAt: -1 }}).fetch() : []
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
		  subsReady: sub.ready(),
	  	handleSubmit: handleCreateNote,
	  	handleDelete: handleDeleteNote,
		  placeholder: "New Note",
		  addItem: true,
      deleteItem: true
	  }
  },
  AppLayout
)

// <<<<<<< HEAD
// export default createContainer(() => {

// 	const sub = Meteor.subscribe('notes.all')

// 	const notes = sub.ready()? Notes.find({}, { sort: { updatedAt: -1 }}).fetch() : []

// 	const handleCreate = (title) => {
//     Meteor.call('/note/create', title, (err, result) => {
//       if (!err) {
//         // console.log('note: ' + result._id)
//       } else {
//         console.log('there was an error: ' + err.reason)
//       }
//     })
// 	}

// 	const handleDelete = (note) => {
// 		Meteor.call('/note/delete', note._id, (err, result) => {
//       if (err) {
//         console.log('there was an error: ' + err.reason)
//       }
//     })
// 	}

//   return {
//   	handleSubmit: handleCreate,
// 	  placeholder: "New Note",
// 	  subsReady: sub.ready(),
// 	  collection: notes,
// 	  handleDelete: handleDelete,
// 	  addItem: true,
// 	  deleteItem: true
//   }

// }, List)
// =======
// >>>>>>> 11-loader
