import React from 'react'
import ReactDOM from 'react-dom'
import NotesContainer from '/imports/components/containers/notes_container'

Meteor.startup(() =>
	ReactDOM.render(<NotesContainer />, document.getElementById("app"))
)