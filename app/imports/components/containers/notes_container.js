import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../../api/notes/notes'
import { AppLayout } from '../layouts/app_layout'
// import { SingleFieldSubmit } from '../forms/single_field_submit'

export default createContainer(
	() => {
		
		const handleCreateNote = (content) => {
			Notes.insert({ 
				content:content,
				updatedAt: new Date() 
			})
		}

	  return {
	  	handleSubmit: handleCreateNote,
		  placeholder: "New Note",
	  }

  },
  AppLayout
)