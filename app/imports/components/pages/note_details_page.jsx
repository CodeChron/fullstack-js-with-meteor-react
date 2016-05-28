import React from 'react'
import { AppHeaderLayout } from '../layouts/app_header_layout'
import { EditableText } from '../content/editable_text'
import { IconBtn } from '../buttons/icon_btn'

export const NoteDetailsPage = (props) => {

	const
    handleBackBtnClick = () => history.back(),
    backBtn = <IconBtn icon="glyphicon glyphicon-menu-left" btnSize="btn-lg" handleClick={handleBackBtnClick} />,
    pageTitleBlock = <h1 className="navbar-brand full-width">{props.note.title}</h1>
    editablePageTitle = <EditableText viewBlock={pageTitleBlock} editableText={props.note.title} field={"title"} handleUpdate={props.handleUpdates} />
    

	return <div id="app-container">
	  <AppHeaderLayout
	  headerLeft={backBtn}
	  headerCenter={editablePageTitle}
	  />
	  <div id="main-content" className="container">
	    Note details
	  </div>
	</div>
}
