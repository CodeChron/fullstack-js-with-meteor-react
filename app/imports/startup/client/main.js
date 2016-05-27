import React from 'react'
import ReactDOM from 'react-dom'
import NotesContainer from '/imports/components/containers/notes_container'

import './main.html'

Meteor.startup(() =>
	ReactDOM.render(<NotesContainer />, document.getElementById("app"))
)