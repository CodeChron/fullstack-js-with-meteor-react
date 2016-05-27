import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

// import { AppLayout } from '../../components/layouts/app_layout'
// import { AppHeaderLayout } from '../../components/layouts/app_header_layout'
import NotesContainer from '../../components/containers/notes_container'

//PAGES
import { Homepage } from '../../components/pages/homepage'

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
    mount(AppLayout, {
      header: () => <AppHeaderLayout />,
      content: () => null
    })
  }
})

