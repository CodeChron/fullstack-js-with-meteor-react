import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

// LAYOUTS
import NotesContainer from '../../components/containers/notes_container'

//PAGES
import { Homepage } from '../../components/pages/homepage'
import { NoteDetail } from '../../components/pages/note_detail'

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
    mount(NotesContainer, {
      content: (props) => <NoteDetail id={params._id} {...props} />
    })
  }
})

