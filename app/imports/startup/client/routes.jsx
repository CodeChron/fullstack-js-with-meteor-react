import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

// LAYOUTS
import NotesContainer from '../../components/containers/notes_container'
import NoteDetailsContainer from '../../components/containers/note_details_container'

//PAGES
import { Homepage } from '../../components/pages/homepage'
import { NoteDetails } from '../../components/pages/note_details'

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(NotesContainer, {
      content: (props) => <Homepage {...props} />
    })
  }
})

FlowRouter.route('/notes/:_id', {
  name: 'noteDetail',
  action(params) {
    mount(NoteDetailsContainer, {
      content: (props) => <NoteDetails id={params._id} {...props} />
    })
  }
})

