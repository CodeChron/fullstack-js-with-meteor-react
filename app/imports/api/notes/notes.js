import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { Class } from 'meteor/jagi:astronomy'

export const Notes = new Mongo.Collection('notes')

const NoteSchema = Class.create({
	name: 'Note',
	collection: Notes,
	fields: {
    title: String,
    updatedAt: Date 
  }
})

Meteor.methods({

	'/note/create': (title) => {
		const note = new NoteSchema()
    note.set({
      title,
      updatedAt: new Date()
    })
    note.save()
    return note
  },

  '/note/save': (note) => {
    
    // note.set({
    //   title,
    //   updatedAt: new Date()
    // })
    note.save()
    return note
  },

  '/note/delete': (id) => Notes.remove({_id: id})

})