import { Meteor } from 'meteor/meteor'
import { Notes } from '../notes'

const
  notesListFields = {
    title: 1,
    updatedAt: 1
  }

Meteor.publish('notes.all', function() {
  return Notes.find({}, { fields: notesListFields})
})