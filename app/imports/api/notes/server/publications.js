import { Meteor } from 'meteor/meteor'
import { Notes } from '../notes'

const
  notesListFields = {
    title: 1,
    updatedAt: 1
  },
  noteFields = {
    title: 1
  }

Meteor.publish('notes.list.all', function() {
  return Notes.find({}, { fields: notesListFields})
})

Meteor.publish('note.details', function(id) {
  return Notes.find({_id: id }, { fields: noteFields})
})