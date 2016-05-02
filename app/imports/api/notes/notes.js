import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { Class } from 'meteor/jagi:astronomy'

export const Notes = new Mongo.Collection('notes')

export const NoteSchema = Class.create({
	name: 'Note',
	collection: Notes,
	fields: {
    content: String,
    updatedAt: Date 
  }
})

Meteor.methods({

	'/note/create': (content) => {
		const note = new NoteSchema()
    note.set({
      content: content,
   // ownerId: Meteor.userId(),
      updatedAt: new Date()
    })

    note.save()
    return note

    // if (note.validate()) {
    //   //get note count and update noteCount in session
      
    //   note.save()
    //   return note
    // }
    // note.throwValidationException()
  },

  // '/note/save': (note) => {
		
  //   note.set({
		// 	updatedAt: new Date()
		// })

  //   if (note.validate()) {
  //     note.save()
  //     return
  //   }
  //   note.throwValidationException()
  // },

  // '/note/delete': (id) => Notes.remove({_id: id})

})