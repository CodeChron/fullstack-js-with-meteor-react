import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../../api/notes/notes'
import { List } from '../lists/list'
// import { SingleFieldSubmit } from '../forms/single_field_submit'


export default createContainer(() => {

	const notes = Notes.find({}, { sort: { updatedAt: -1 }}).fetch()
	
	const handleCreateNote = (content) => {
		Notes.insert({ 
			content:content,
			updatedAt: new Date() 
		})
	}

	// const handleDeleteNote = (note) => {
	// 	Notes.remove({_id: note._id})
	// }

  return {
  	handleSubmit: handleCreateNote,
	  placeholder: "New Note",
	  collection: notes
  }

}, List)
